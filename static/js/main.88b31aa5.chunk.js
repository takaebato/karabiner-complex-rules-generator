(this["webpackJsonpkarabiner-complex-rules-generator"]=this["webpackJsonpkarabiner-complex-rules-generator"]||[]).push([[0],{74:function(e,a,t){e.exports=t(87)},79:function(e,a,t){},80:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(12),r=t.n(o),i=(t(79),t(80),t(81),t(139)),c=t(137),u=t(140),d=t(138),s=t(92),m=t(14),f=t(13),v=t(7),b=t(142),p=t(149),E=t(91),_=t(130),y=t(131),h=t(143),g=t(148),k=t(146),O=t(129),j=t(135),C=function(e){var a=(0|e)%100;return a>3&&a<21?"th":["th","st","nd","rd"][a%10]||"th"},w=function(e){for(var a=e.toLowerCase().split("_"),t=0;t<a.length;t++)a[t]=a[t][0].toUpperCase()+a[t].slice(1);return a.join(" ")},x=t(17),I=t.n(x),S=["frontmost_application_if","frontmost_application_unless"],F=function(e){var a=e.condition,t=e.index,o=Object(l.useState)(a),r=Object(m.a)(o,2),i=(r[0],r[1]),c=Object(l.useState)({description:!1}),u=Object(m.a)(c,2),d=u[0],s=u[1];return Object(l.useEffect)((function(){i(a)}),[a]),n.a.createElement(k.a,{defaultExpanded:0===t},n.a.createElement(O.a,{expandIcon:n.a.createElement(I.a,null)},"Condition ",t+1),n.a.createElement(b.a,{p:1},n.a.createElement(_.a,{fullWidth:!0,variant:"filled"},n.a.createElement(y.a,{id:"condition_type"},"Condition Type"),n.a.createElement(h.a,{labelId:"condition_type",value:S[0]},S.map((function(e){return n.a.createElement(g.a,{value:e,key:e},w(e))})))),!!a.bundle_identifiers.length&&n.a.createElement(k.a,{defaultExpanded:!0},n.a.createElement(O.a,{expandIcon:n.a.createElement(I.a,null)},"Bundle Identifiers"),n.a.createElement(b.a,{p:1},a.bundle_identifiers.map((function(e,t){return n.a.createElement(p.a,{value:e,fullWidth:!0,variant:"filled",label:"Regex Bundle Identifier ".concat(t+1),onChange:function(e){!function(e,t){var l=Object(v.a)({},a);l.bundle_identifiers[e]=t,i(l)}(t,e.target.value)}})})))),!!a.file_paths.length&&n.a.createElement(k.a,{defaultExpanded:!0},n.a.createElement(O.a,{expandIcon:n.a.createElement(I.a,null)},"File Paths"),n.a.createElement(b.a,{p:1},a.file_paths.map((function(e,t){return n.a.createElement(p.a,{value:e,fullWidth:!0,variant:"filled",label:"Regex File Path ".concat(t+1),onChange:function(e){!function(e,t){var l=Object(v.a)({},a);l.file_paths[e]=t,i(l)}(t,e.target.value)}})})))),d.description&&n.a.createElement(p.a,{fullWidth:!0,variant:"filled",label:"Condition Description (optional)",value:a.description,onChange:function(e){i(Object(v.a)({},a,{description:e.target.value}))}}),n.a.createElement(E.a,{onClick:function(){var e=Object(v.a)({},a);e.bundle_identifiers.push(""),i(e)}},"Add Bundle Identifier"),n.a.createElement(E.a,{onClick:function(){var e=Object(v.a)({},a);e.file_paths.push(""),i(e)}},"Add File Path"),n.a.createElement(E.a,{onClick:function(){return s(Object(v.a)({},d,{description:!d.description}))}},d.description?"Remove":"Add"," Description")))},K=t(9),B=t(136),R=t(145),A=t(144),W=[{label:"Function key",value:"fn"},{label:"Left Command",value:"left_gui"},{label:"Right Command",value:"right_gui"},{label:"Left Control",value:"left_control"},{label:"Right Control",value:"right_control"},{label:"Left Alt / Option",value:"left_alt"},{label:"Right Alt / Option",value:"right_alt"},{label:"Left Shift",value:"left_shift"},{label:"Right Shift",value:"right_shift"}],M=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"},{label:"6",value:"6"},{label:"7",value:"7"},{label:"8",value:"8"},{label:"9",value:"9"},{label:"0",value:"0"},{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"},{label:"D",value:"d"},{label:"E",value:"e"},{label:"F",value:"f"},{label:"G",value:"g"},{label:"H",value:"h"},{label:"I",value:"i"},{label:"J",value:"j"},{label:"K",value:"k"},{label:"L",value:"l"},{label:"M",value:"m"},{label:"N",value:"n"},{label:"O",value:"o"},{label:"P",value:"p"},{label:"Q",value:"q"},{label:"R",value:"r"},{label:"S",value:"s"},{label:"T",value:"t"},{label:"U",value:"u"},{label:"V",value:"v"},{label:"W",value:"w"},{label:"X",value:"x"},{label:"Y",value:"y"},{label:"Z",value:"z"},{label:"F1",value:"f1"},{label:"F2",value:"f2"},{label:"F3",value:"f3"},{label:"F4",value:"f4"},{label:"F5",value:"f5"},{label:"F6",value:"f6"},{label:"F7",value:"f7"},{label:"F8",value:"f8"},{label:"F9",value:"f9"},{label:"F10",value:"f10"},{label:"F11",value:"f11"},{label:"F12",value:"f12"},{label:"Escape",value:"escape"},{label:"` Grave Accent, Tilde",value:"grave_accent_and_tilde"},{label:"Tab key",value:"tab"},{label:"Caps Lock",value:"caps_lock"},{label:"Spacebar",value:"spacebar"},{label:"Up Arrow",value:"up_arrow"},{label:"Left Arrow",value:"left_arrow"},{label:"Down Arrow",value:"down_arrow"},{label:"Right Arrow",value:"right_arrow"},{label:"Enter",value:"return_or_enter"},{label:" (Backslash)",value:"backslash"},{label:"[ (Open Bracket)",value:"open_bracket"},{label:"] (Close Bracket)",value:"close_bracket"},{label:"; (Semicolon)",value:"semicolon"},{label:"' (Quote)",value:"quote"},{label:", (Comma)",value:"comma"},{label:". (Period)",value:"period"},{label:"/ (Slash)",value:"slash"},{label:"- (Dash or Hyphen)",value:"hyphen"},{label:"= (Equal)",value:"equal_sign"},{label:"Delete or Backspace",value:"delete_or_backspace"},{label:"Decrease Screen Brightness",value:"display_brightness_decrement"},{label:"Increase Screen Brightness",value:"display_brightness_increment"},{label:"Mission Control",value:"mission_control"},{label:"Launchpad",value:"launchpad"},{label:"Keyboard Brightness Decrease",value:"illumination_decrement"},{label:"Keyboard Brightness Increase",value:"illumination_increment"},{label:"Rewind / Previous",value:"rewind"},{label:"Play or Pause",value:"play_or_pause"},{label:"Fastfoward / Next",value:"fastforwad"},{label:"Mute",value:"mute"},{label:"Volume Down",value:"volume_decrement"},{label:"Volume Up",value:"volume_increment"}],D=function(e){var a=e.value,t=void 0===a?[]:a,l=e.onChange,o=void 0===l?function(e){}:l,r=e.modifiers,i=void 0!==r&&r,c=e.keyCodes,u=void 0!==c&&c,d=e.multiple,s=void 0===d||d,m=e.autoHighlight,v=void 0!==m&&m,b=e.freeSolo,E=void 0===b||b,_=e.label,y=void 0===_?"keys":_,h=[],g=[];return u&&(h=[].concat(Object(f.a)(h),Object(f.a)(M)),g.push("Key Codes")),i&&(h=[].concat(Object(f.a)(h),Object(f.a)(W)),g.push("Modifiers")),n.a.createElement(A.a,{multiple:s,freeSolo:E,options:h,getOptionLabel:function(e){return("object"===typeof e?e.label:e)||""},value:t,onChange:o,autoHighlight:v,renderInput:function(e){return n.a.createElement(p.a,Object.assign({},e,{variant:"filled",label:y,placeholder:g.join(", "),fullWidth:!0}))}})},N=[{label:"None",value:""},{label:"Left Click",value:"button1"},{label:"Right Click",value:"button2"},{label:"Middle Click",value:"button3"},{label:"Mouse 4",value:"button4"},{label:"Mouse 5",value:"button5"}],T=function(e){var a=e.eventObject,t=void 0===a?{}:a,o=e.setEventObject,r=void 0===o?function(e){}:o,i=Object(l.useState)({keyCode:!1,consumerKeyCode:!1}),c=Object(m.a)(i,2),u=c[0],d=c[1];return Object(l.useEffect)((function(){var e=Object(v.a)({},t);u.keyCode&&delete e.consumer_key_code,u.consumerKeyCode&&delete e.key_code,u.keyCode||u.consumerKeyCode||(delete e.key_code,delete e.consumer_key_code)}),[u]),Object(l.useEffect)((function(){var e={keyCode:!!t.key_code,consumerKeyCode:!!t.consumer_key_code};d(e)}),[t]),n.a.createElement(b.a,{marginBottom:2},n.a.createElement(j.a,null,n.a.createElement(E.a,{disabled:u.keyCode,variant:"contained",onClick:function(){d(Object(v.a)({},u,{keyCode:!0,consumerKeyCode:!1}))}},"Key Code"),n.a.createElement(E.a,{disabled:u.consumerKeyCode,variant:"contained",onClick:function(){d(Object(v.a)({},u,{keyCode:!1,consumerKeyCode:!0}))}},"Consumer Key Code"),n.a.createElement(E.a,{variant:"contained",onClick:function(){d(Object(v.a)({},u,{keyCode:!1,consumerKeyCode:!1}))},disabled:!(u.keyCode||u.consumerKeyCode),color:"secondary"},"Disable")),n.a.createElement(b.a,{marginBottom:1},u.keyCode&&n.a.createElement(D,{keyCodes:!0,modifiers:!0,multiple:!1,value:t.key_code,autoHighlight:!1,label:"Key Code (optional)",onChange:function(e,a){console.log(" w"),r(Object(v.a)({},t,{key_code:"string"===typeof a?{label:a,value:a}:a}))}}),u.consumerKeyCode&&n.a.createElement(p.a,{placeholder:"",margin:"normal",variant:"filled",label:"Consumer Key Code (optional)",fullWidth:!0,value:t.consumer_key_code||"",onChange:function(e){r(Object(v.a)({},t,{consumer_key_code:e.currentTarget.value}))}})),n.a.createElement(b.a,null,n.a.createElement(_.a,{variant:"filled",fullWidth:!0},n.a.createElement(y.a,{id:"type"},"Pointing Button (optional)"),n.a.createElement(h.a,{labelId:"type",value:t.pointing_button||"",onChange:function(e){r(Object(v.a)({},t,{pointing_button:e.target.value||""}))}},N.map((function(e){var a=e.label,t=e.value;return n.a.createElement(g.a,{value:t,key:t},a)}))))))},L=t(15),P=t.n(L),z=["none","insensitive","strict","strict_inverse"],H=["none","any","all"],U=function(e){var a,t,l,o,r=e.fromObject,i=e.setFromObject,c=function(e,a,t){i(Object(v.a)({},r,{modifiers:Object(v.a)({},r.modifiers,Object(K.a)({},t,a.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))))}))};return n.a.createElement(b.a,{className:"form-container",p:1},n.a.createElement(T,{setEventObject:i,eventObject:r}),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(D,{modifiers:!0,value:(null===(a=r.modifiers)||void 0===a?void 0:a.mandatory)||[],label:"Mandatory Modifiers (optional)",onChange:function(e,a){return c(0,a,"mandatory")}})),n.a.createElement("div",null,n.a.createElement(D,{modifiers:!0,value:(null===(t=r.modifiers)||void 0===t?void 0:t.optional)||[],label:"Optional Modifiers (optional)",onChange:function(e,a){return c(0,a,"optional")}}))),n.a.createElement(b.a,null,null===(l=r.simultaneous)||void 0===l?void 0:l.map((function(e,a){return n.a.createElement(k.a,{key:a,defaultExpanded:0===a},n.a.createElement(O.a,{expandIcon:n.a.createElement(I.a,null)},a+1,C(a+1)," Simultaneous Event"),n.a.createElement(b.a,{p:1},n.a.createElement(T,{eventObject:e,setEventObject:function(e){var a=Object(v.a)({},r),t=P.a.findIndex(r.simultaneous,{_id:e._id});a.simultaneous=a.simultaneous||[],a.simultaneous[t]=e,i(a)}})))})),n.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){return function(){var e=Object(v.a)({},r);e.simultaneous=e.simultaneous||[],e.simultaneous.push({_id:P.a.uniqueId("simultaneous_")}),i(e)}()}},"Add Simultaneous Event")),n.a.createElement(b.a,null,n.a.createElement(k.a,null,n.a.createElement(O.a,null,"Simultaneous Options"),n.a.createElement(b.a,{p:1},n.a.createElement(B.a,{control:n.a.createElement(R.a,{checked:!!(null===r||void 0===r?void 0:null===(o=r.simultaneous_options)||void 0===o?void 0:o.detect_key_down_uninterruptedly),onChange:function(){}}),label:"Detect Key Down Uninterruptedly"}),n.a.createElement(_.a,{fullWidth:!0,variant:"filled"},n.a.createElement(y.a,{id:"key_down_order"},"Key Down Order"),n.a.createElement(h.a,{labelId:"key_down_order",value:z[0]},z.map((function(e){return n.a.createElement(g.a,{value:e,key:e},w(e))})))),n.a.createElement(_.a,{fullWidth:!0,variant:"filled"},n.a.createElement(y.a,{id:"key_up_order"},"Key Up Order"),n.a.createElement(h.a,{labelId:"key_up_order",value:z[0]},z.map((function(e){return n.a.createElement(g.a,{value:e,key:e},w(e))})))),n.a.createElement(_.a,{fullWidth:!0,variant:"filled"},n.a.createElement(y.a,{id:"key_up_when"},"Key Up When"),n.a.createElement(h.a,{labelId:"key_up_when",value:H[0]},H.map((function(e){return n.a.createElement(g.a,{value:e,key:e},w(e))})))),n.a.createElement(E.a,{color:"primary",variant:"contained"},"Add to_after_key_up event")))))},q=t(90),J=t(64),G=t.n(J),V=function(e){var a=e.toObject,t=e.setToObject,o=e.removeToObject,r=Object(l.useState)({keyCode:!1,consumerKeyCode:!1,pointingButton:!1,simultaneous:!1,simultaneousOptions:!1}),i=Object(m.a)(r,2),c=i[0];i[1];return Object(l.useEffect)((function(){var e,t,l=Object(v.a)({},a);("disabled"===l.pointing_button&&delete l.pointing_button,!c.keyCode&&l.key_code)?delete l.key_code:l.key_code=null===(t=l.key_code)||void 0===t?void 0:t.value;!c.consumerKeyCode&&l.consumer_key_code&&delete l.consumer_key_code,(null===(e=l.modifiers)||void 0===e?void 0:e.length)?l.modifiers=l.modifiers.map((function(e){return e.value})):delete l.modifiers,!1===l.lazy&&delete l.lazy,!0===l.repeat&&delete l.repeat,!1===l.halt&&delete l.halt}),[a,c]),n.a.createElement(b.a,{className:"form-container"},n.a.createElement(T,{setEventObject:t,eventObject:a}),n.a.createElement(D,{freeSolo:!1,modifiers:!0,value:a.modifiers,label:"Modifiers",onChange:function(e,l){console.log({value:l}),t(Object(v.a)({},a,{modifiers:l.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))}))}}),n.a.createElement(_.a,{fullWidth:!0},n.a.createElement(q.a,null,"Additional Options"),n.a.createElement(B.a,{label:"Lazy",control:n.a.createElement(R.a,{checked:!!a.lazy,onChange:function(e){t(Object(v.a)({},a,{lazy:e.target.checked}))}})}),n.a.createElement(B.a,{label:"Repeat",control:n.a.createElement(R.a,{checked:!!a.repeat,onChange:function(e){t(Object(v.a)({},a,{repeat:e.target.checked}))}})}),n.a.createElement(B.a,{label:"Halt",control:n.a.createElement(R.a,{checked:!!a.halt,onChange:function(e){t(Object(v.a)({},a,{halt:e.target.checked}))}})})),n.a.createElement(E.a,{color:"secondary",variant:"contained",onClick:function(){return o()},startIcon:n.a.createElement(G.a,null)},"Remove"))},Q=["to","to_if_alone","to_if_held_down","to_after_key_up"],X=function(e){var a=e.manipulator,t=e.setManipulator;return n.a.createElement(b.a,null,Q.map((function(e,l){return a[e]&&n.a.createElement(k.a,{key:l,defaultExpanded:!0},n.a.createElement(O.a,{expandIcon:n.a.createElement(I.a,null)},'"',w(e),'" Events'),n.a.createElement(b.a,{p:2},a[e].map((function(l,o){var r={toObject:Object(v.a)({},l),setToObject:function(l){var n=Object(v.a)({},a);n[e][o]=l,t(n)},removeToObject:function(){var l=Object(v.a)({},a);l[e].splice(o,1),t(l)}};return n.a.createElement(k.a,{key:o,defaultExpanded:0===o},n.a.createElement(O.a,{expandIcon:n.a.createElement(I.a,null)},o+1,C(o+1),' "',w(e),'" Event'),n.a.createElement(b.a,{p:1},n.a.createElement(V,r)))}))))})))},Y=["to","to_if_alone","to_if_held_down","to_after_key_up"],Z=["basic","frontmost_application_if","frontmost_application_unless","device_if","device_unless","keyboard_type_if","keyboard_type_unless","input_source_if","input_source_unless","variable_if","variable_unless","event_changed_if","event_changed_unless"],$=function(e){var a=e.manipulator,t=e.setManipulator;return n.a.createElement("div",null,n.a.createElement(_.a,{variant:"filled",fullWidth:!0},n.a.createElement(y.a,{id:"type"},"Type*"),n.a.createElement(h.a,{labelId:"type",value:a.type,onChange:function(e){t(Object(v.a)({},a,{type:e.target.value}))}},Z.map((function(e){return n.a.createElement(g.a,{value:e,key:e},w(e))})))),n.a.createElement(k.a,{defaultExpanded:!0},n.a.createElement(O.a,{expandIcon:n.a.createElement(I.a,null)},'"From" Event*'),n.a.createElement(U,{fromObject:a.from,setFromObject:function(e){var l=Object(v.a)({},a,{from:e});t(l)}})),n.a.createElement(X,{manipulator:a,setManipulator:t}),a.conditions&&n.a.createElement(k.a,{defaultExpanded:!0},n.a.createElement(O.a,{expandIcon:n.a.createElement(I.a,null)},"Rule Conditions"),n.a.createElement(b.a,{p:1},a.conditions.map((function(e,a){return n.a.createElement(F,{key:a,index:a,condition:e})})))),n.a.createElement(b.a,null,n.a.createElement(s.a,null,'Add "To" Events'),n.a.createElement(j.a,null,Y.map((function(e){return n.a.createElement(E.a,{key:e,variant:"contained",color:"primary",onClick:function(){!function(e){var l=Object(v.a)({},a);l[e]=l[e]||[],l[e].push({repeat:!0,_id:P.a.uniqueId(e+"_")}),t(l)}(e)},size:"small"},e)})))),n.a.createElement(b.a,{marginTop:1},n.a.createElement(E.a,{color:"primary",variant:"contained",onClick:function(){!function(){var e=Object(v.a)({},a);e.conditions=e.conditions||[],e.conditions.push({type:"frontmost_application_if"}),t(e)}()}},"Add Conditions")))},ee=function(e){var a=e.rule,t=e.setRule,l=function(e){var l=P.a.findIndex(a.manipulators,{_id:e._id}),n=Object(v.a)({},a);n.manipulators[l]=Object(v.a)({},e),t(n)};return n.a.createElement(b.a,null,n.a.createElement(p.a,{label:"Description (optional)",variant:"filled",value:a.description,onChange:function(e){return t(Object(v.a)({},a,{description:e.target.value}))},multiline:!0,fullWidth:!0}),a.manipulators.map((function(e,a){return n.a.createElement($,{manipulator:e,key:a,setManipulator:l})})),n.a.createElement(E.a,null,"Add Manipulator"))},ae=Object(l.createContext)({setFormState:function(){},setRuleState:function(){},getRuleByIndex:function(){},formState:{}}),te=t(65),le=t.n(te),ne={simultaneous:[],modifiers:{optional:[],mandatory:[]}},oe={type:"basic",from:{modifiers:{mandatory:[],optional:[]},simultaneous:[]}},re=function(){return Object(v.a)({},ie({description:""},"rule"),{manipulators:[ie(oe,"manipulator")]})},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a.length&&(a+="_"),Object(v.a)({},e,{_id:P.a.uniqueId(a)})},ce=["to","to_if_alone","to_if_held_down","to_after_key_up"],ue=function(e){return e.value},de=function(e){return e.map(ue)},se=function(e){var a=P.a.cloneDeep(e);return a.rules.forEach((function(e,a){e.description.length||delete e.description,e.manipulators.forEach((function(e){var a,t;e.from=function(e){var a=Object.assign({},ne,e);return"object"===typeof a.key_code&&(a.key_code=ue(a.key_code)),a.modifiers&&(a.modifiers.mandatory&&(0===a.modifiers.mandatory.length?delete a.modifiers.mandatory:a.modifiers.mandatory=de(a.modifiers.mandatory)),a.modifiers.optional&&(0===a.modifiers.optional.length?delete a.modifiers.optional:a.modifiers.optional=de(a.modifiers.optional))),a.pointing_button&&"disabled"!==a.pointing_button||delete a.pointing_button,P.a.isEmpty(a.modifiers)&&delete a.modifiers,a}(e.from);var l=[];null===e||void 0===e||null===(a=e.from)||void 0===a||null===(t=a.simultaneous)||void 0===t||t.forEach((function(e){var a;delete e._id,(null===e||void 0===e?void 0:null===(a=e.key_code)||void 0===a?void 0:a.value)&&(e.key_code=e.key_code.value),P.a.isEmpty(e)||l.push(e)})),e.from.simultaneous=l,P.a.isEmpty(e.from.simultaneous)&&delete e.from.simultaneous,delete e._id})),delete e._id})),a},me=function(){var e=Object(l.useState)({title:"",rules:[re()]}),a=Object(m.a)(e,2),t=a[0],o=a[1],r=function(e){var a=P.a.findIndex(t.rules,{_id:e._id}),l=P.a.cloneDeep(t);l.rules[a]=Object(v.a)({},l.rules[a],{},e),o(Object(v.a)({},l))};return n.a.createElement(ae.Provider,{value:{formState:t,setFormState:o,getRuleByIndex:function(e){return t.rules[e]}}},n.a.createElement(c.a,null,n.a.createElement(d.a,{container:!0,direction:"row",justify:"space-between"},n.a.createElement(d.a,{item:!0,xs:!0},n.a.createElement(b.a,{p:1},n.a.createElement(p.a,{fullWidth:!0,onChange:function(e){return o(Object(v.a)({},t,{title:e.currentTarget.value}))},value:t.title,variant:"filled",label:"Title"}),t.rules.map((function(e,a){return n.a.createElement(k.a,{defaultExpanded:0===a,key:a},n.a.createElement(O.a,{expandIcon:n.a.createElement(I.a,null)},a+1+C(a+1)+" Rule"+(e.description?": "+e.description:"")),n.a.createElement(b.a,{p:1},n.a.createElement(ee,{key:a,rule:e,setRule:r})))})),n.a.createElement(E.a,{onClick:function(){var e=Object(v.a)({},t);e.rules=e.rules||[],e.rules.push(re()),o(Object(v.a)({},e))},color:"primary",variant:"contained",startIcon:n.a.createElement(le.a,null)},"Rule"))),n.a.createElement(d.a,{item:!0,xs:!0,container:!0},n.a.createElement(s.a,null,"Parsed JSON"),n.a.createElement("textarea",{className:"generated-code",readOnly:!0,value:JSON.stringify(se(t),null,2)}),n.a.createElement(s.a,null,"Unparsed State"),n.a.createElement("textarea",{className:"generated-code",value:JSON.stringify(t,null,2),readOnly:!0}),n.a.createElement(s.a,null,"Test field to paste state"),n.a.createElement("textarea",{className:"generated-code",onBlur:function(e){try{o(function(e){var a=JSON.parse(e);return a.rules=a.rules.map((function(e){var a=ie(e,"rule");return a.manipulators=a.manipulators.map((function(e){var a=ie(e,"manipulator");return ce.forEach((function(t){a[t]&&(a[t]=Object(f.a)(e[t]),a[t]=a[t].map((function(e){return ie(e,t)})),console.log(a[t]))})),a})),a})),a}(e.target.value))}catch(e){console.log({e:e})}}})))))},fe=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{position:"static"},n.a.createElement(c.a,null,n.a.createElement(u.a,null,n.a.createElement(d.a,{xs:!0},n.a.createElement(s.a,null,"Karabiner Complex Modification | Still a work in progress")),n.a.createElement(d.a,{xs:3,container:!0,justify:"space-evenly"},n.a.createElement("a",{className:"github-button",href:"https://github.com/genesy/karabiner-complex-rules-generator","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star genesy/karabiner-complex-rules-generator on GitHub"},"Star"),n.a.createElement("a",{className:"github-button",href:"https://github.com/genesy","data-size":"large","data-show-count":"true","aria-label":"Follow @genesy on GitHub"},"Follow @genesy"))))),n.a.createElement(me,null))};var ve=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(fe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.88b31aa5.chunk.js.map