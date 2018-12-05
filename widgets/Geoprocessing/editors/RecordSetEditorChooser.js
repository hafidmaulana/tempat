// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Geoprocessing/editors/RecordSetEditorChooser.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"field"\x3e\r\n    \x3cinput name\x3d"mode" type\x3d"radio" data-dojo-attach-point\x3d"jsonMode" data-dojo-props\x3d"" data-dojo-attach-event\x3d"onclick: _onJSONModeSelect" class\x3d"jimu-leading-margin10 jimu-radio-btn"\x3e\r\n    \x3clabel style\x3d"width: auto;" class\x3d"jimu-leading-margin025"\x3e${nls.inputJSONString}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"field"\x3e\r\n    \x3cinput name\x3d"mode" type\x3d"radio" data-dojo-attach-point\x3d"tableMode" data-dojo-attach-event\x3d"onclick: _onTableModeSelect" class\x3d"jimu-leading-margin10 jimu-radio-btn"\x3e\r\n    \x3clabel style\x3d" width: auto;" class\x3d"jimu-leading-margin025"\x3e${nls.selectTable}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"margin-top:5px;display:none;" data-dojo-attach-point\x3d"defaultJSONDiv"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"jsonEditorDiv"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/html dojo/_base/lang dojo/on dojo/text!./RecordSetEditorChooser.html dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ../BaseEditor ./simpleEditors dojo/i18n!../nls/strings dijit/form/RadioButton".split(" "),function(b,a,c,d,e,f,g,h,k,l){return b([h,f,g],{baseClass:"jimu-gp-editor-base jimu-gp-editor-rsec",templateString:e,editorName:"RecordSetEditorChooser",postMixInProperties:function(){this.inherited(arguments);c.mixin(this.nls,l)},postCreate:function(){this.inherited(arguments);
this.value={};this.param.recordSetMode&&(a.setAttr(this[this.param.recordSetMode+"Mode"],"checked",!0),d.emit(this[this.param.recordSetMode+"Mode"],"click",{cancelable:!0,bubble:!0}));this.editor=new k.SimpleJsonEditor({value:this.param.defaultValue,nls:this.nls});this.editor.placeAt(this.jsonEditorDiv)},getValue:function(){"json"===this.value.recordSetMode&&(this.value.defaultValue=this.editor.getValue());return this.value},_onJSONModeSelect:function(){this.value.recordSetMode="json";a.setStyle(this.defaultJSONDiv,
"display","block")},_onTableModeSelect:function(){this.value.recordSetMode="table";a.setStyle(this.defaultJSONDiv,"display","none")}})});