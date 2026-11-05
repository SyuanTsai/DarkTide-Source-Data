import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, mkdir, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { loadRepresentativeFixture, loadContractSchema, validateSourceContract, createReviewReceipt } from '../scripts/content/contract-validator.mjs';
import { readAuthoringBundle, writeAuthoringBundle } from '../scripts/content/lib/authoring-bundle.mjs';
import { buildWeaponApprovalPackage, prepareGenericWeaponApproval, approveWeaponMerge, canonicalJsonBytes } from '../scripts/content/imports/generic-weapon-templates-approval.mjs';
const schema=await loadContractSchema();
const reviewer={kind:'human',id:'synthetic-reviewer'};
const reviewedAt='2026-11-04T00:00:00Z';
async function fixture(){
 const authoring=await loadRepresentativeFixture();
 for(const r of [...authoring.records,...authoring.tombstones])r.reviewState='approved';
 authoring.reviewReceipts=[...authoring.records,...authoring.tombstones].flatMap(r=>r.reviewTargets.map(t=>createReviewReceipt(authoring,{recordId:r.recordId,gameReleaseId:r.gameReleaseId,...t},{reviewer,reviewedAt})));
 const w=authoring.records.find(r=>r.kind==='weapon');
 const newWeapon=structuredClone(w);newWeapon.recordId='fixture:weapon:new';newWeapon.payload.markId='fixture-new-mark';newWeapon.payload.templateKey='fixture_new_template';newWeapon.reviewState='pending';
 const candidate={gameReleases:[],sourceRefs:[],sourceSnapshots:[],records:[newWeapon],tombstones:[],patches:[{recordId:w.recordId,gameReleaseId:w.gameReleaseId,fields:[{fieldPath:'/payload/templateKey',value:'fixture_changed'}],sourceRefs:[],dataCoverage:structuredClone(w.dataCoverage),reviewTargets:[]}]};
 return {authoring,candidate,coverageGaps:{}};
}
const approval=digest=>({decision:'approved',reviewer,reviewedAt,reviewedPackage:{packageDigest:digest}});
test('canonical package digest is stable',async()=>{const data=await fixture();const a=await buildWeaponApprovalPackage({...data,validate:false});const b=await buildWeaponApprovalPackage({...data,validate:false});assert.equal(a.packageDigest,b.packageDigest);assert.deepEqual(canonicalJsonBytes(a.document),canonicalJsonBytes(b.document));});
test('approval rejects wrong digest and non-human reviewer',async()=>{const data=await fixture();const built=await buildWeaponApprovalPackage({...data,validate:false});assert.throws(()=>approveWeaponMerge({authoring:data.authoring,built,approval:approval('0'.repeat(64))}),/packageDigest/);assert.throws(()=>approveWeaponMerge({authoring:data.authoring,built,approval:{...approval(built.packageDigest),reviewer:{kind:'service',id:'bot'}}}),/human/);});
test('receipts validate; stale dependency receipts are replaced and other receipts preserved',async()=>{const data=await fixture();const before=structuredClone(data.authoring.reviewReceipts);const built=await buildWeaponApprovalPackage({...data,validate:false});assert.ok(built.document.restaledRecords.length>0);const result=approveWeaponMerge({authoring:data.authoring,built,approval:approval(built.packageDigest)});assert.ok(result.reviewReceipts.some(r=>r.target.recordId==='fixture:weapon:new'));assert.ok(built.document.reviewTargets.some(t=>t.recordId==='fixture:weapon:alpha'));const outcome=validateSourceContract(result,{schema});assert.equal(outcome.valid,true,JSON.stringify(outcome.issues));const targets=new Set(built.document.reviewTargets.map(({targetDigest,dependenciesDigest,...t})=>JSON.stringify(t)));let replaced=0,kept=0;for(const receipt of before){const match=result.reviewReceipts.find(r=>JSON.stringify(r.target)===JSON.stringify(receipt.target));assert.ok(match);if(targets.has(JSON.stringify(receipt.target))){replaced++;assert.notEqual(match.dependenciesDigest,receipt.dependenciesDigest);}else{kept++;assert.deepEqual(match,receipt);}}assert.ok(replaced>0);assert.ok(kept>0);});
test('prepare writes only review files and leaves authoring untouched',async()=>{const data=await fixture(),root=await mkdtemp(path.join(os.tmpdir(),'syp287-test-'));try{await mkdir(path.join(root,'content/authoring/v2/w07'),{recursive:true});const name=path.join(root,'content/authoring/v2/w07/sentinel.json');await writeFile(name,'unchanged');const before=await readFile(name);await prepareGenericWeaponApproval({root,inputData:data});const after=await readFile(name);assert.deepEqual(after,before);assert.ok((await readFile(path.join(root,'content/reviews/syp-287-generic-weapons/review-package.json'))).length>0);const md=await readFile(path.join(root,'content/reviews/syp-287-generic-weapons/review-package.md'),'utf8');assert.match(md,/## \u672a\u89e3\u6790\u8986\u84cb/);}finally{await rm(root,{recursive:true,force:true});}});




test('compact digest changes when a single record value changes',async()=>{const data=await fixture();const first=await buildWeaponApprovalPackage({...data,validate:false});data.candidate.records[0].payload.templateKey+='-changed';const second=await buildWeaponApprovalPackage({...data,validate:false});assert.notEqual(first.packageDigest,second.packageDigest);});
test('full output is optional and must be outside the repository',async()=>{const data=await fixture(),root=await mkdtemp(path.join(os.tmpdir(),'syp287-root-')),outside=await mkdtemp(path.join(os.tmpdir(),'syp287-full-'));try{await assert.rejects(prepareGenericWeaponApproval({root,inputData:data,fullOut:path.join(root,'full')}),/outside the repository/);const built=await prepareGenericWeaponApproval({root,inputData:data,fullOut:outside});const full=JSON.parse(await readFile(path.join(outside,'review-package.json'),'utf8'));assert.deepEqual(full,built.fullDocument);assert.ok(full.newRecords[0].payload);}finally{await rm(root,{recursive:true,force:true});await rm(outside,{recursive:true,force:true});}});
