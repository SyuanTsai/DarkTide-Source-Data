return {archetype_name='soldier',name='soldier_tree',nodes={
 {talent='basic',type='start',widget_name='a',icon='first',parents={}},
 {talent='tiered',type='ability',widget_name='b',max_points=3,parents={'a','empty','a'}},
 {talent='dynamic',type='stat',widget_name='c',parents={'b'}},
 {talent='shadow',type='keystone_modifier',widget_name='d',parents={'c'}},
 {talent='basic',type='stat',widget_name='e',icon='second',parents={}},
 {talent='missing',type='default',widget_name='f'},
 {talent='bad',type='future',widget_name='g'},
 {widget_name='empty',type='default'},
}}
