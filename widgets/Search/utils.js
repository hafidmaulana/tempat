// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/lang dojo/_base/array dojo/Deferred dojo/when dojo/promise/all jimu/portalUtils esri/lang esri/request".split(" "),function(d,g,n,p,h,q,k,r){return{map:null,layerInfosObj:null,appConfig:null,_esriLocatorRegExp:/geocode(.){0,3}\.arcgis.com\/arcgis\/rest\/services\/World\/GeocodeServer/g,setMap:function(a){this.map=a},setLayerInfosObj:function(a){this.layerInfosObj=a},setAppConfig:function(a){this.appConfig=a},getConfigInfo:function(a){if(a&&a.sources&&0<a.sources.length){var b=null;
return this.searchLayer(this.map)&&a.upgradeFromGeocoder?(b=this.map.itemInfo.itemData.applicationProperties.viewing.search,b=g.map(b.layers,d.hitch(this,function(a,b){b.hintText=a;return this._getQueryTypeGeocoder(b)},b.hintText)),h(b).then(d.hitch(this,function(c){a.sources=[].concat(c).concat(a.sources);return a}))):a}return p(this._getSoucesFromPortalAndWebmap()).then(d.hitch(this,function(a){return{allPlaceholder:"",showInfoWindowOnSelect:!0,sources:a}}))},_getSoucesFromPortalAndWebmap:function(){var a=
[],b=null;this.searchLayer(this.map)&&(b=this.map.itemInfo.itemData.applicationProperties.viewing.search,g.forEach(b.layers,d.hitch(this,function(b,l){l.hintText=b;a.push(this._getQueryTypeGeocoder(l))},b.hintText)));return q.getPortalSelfInfo(this.appConfig.portalUrl).then(d.hitch(this,function(b){if((b=b.helperServices&&b.helperServices.geocode)&&0<b.length)for(var c=0,f=b.length;c<f;c++){var m=b[c];m&&a.push(this._processSingleLine(m))}return h(a).then(d.hitch(this,function(a){for(var b=[],c=0;c<
a.length;c++){var e=a[c];e&&(e&&"query"===e.type||(e={name:e.name||this._getGeocodeName(e.url),url:e.url,singleLineFieldName:e.singleLineFieldName,placeholder:"Find address or place",maxResults:6,searchInCurrentMapExtent:!1,type:"locator"},e.enableLocalSearch=this._isEsriLocator(e.url),e.localSearchMinScale=3E5,e.localSearchDistance=5E4),b.push(e))}return b}))}))},_getQueryTypeGeocoder:function(a){var b=this.map.getLayer(a.id),c=null,d=null,f=null,f=k.isDefined(a.subLayer)?a.id+"_"+a.subLayer:a.id,
c=this.layerInfosObj.traversal(function(a){return a.id===f?(d=a,!0):!1});return b&&c&&d?(c=k.isDefined(a.subLayer)?d.url||b.url+"/"+a.subLayer:d.url||b.url,{name:d.title,layerId:f,url:c,placeholder:a.hintText,searchFields:[a.field.name],displayField:a.field.name,exactMatch:a.field.exactMatch||!1,maxResults:6,searchInCurrentMapExtent:!1,type:"query"}):null},_isEsriLocator:function(a){this._esriLocatorRegExp.lastIndex=0;return this._esriLocatorRegExp.test(a)},_processSingleLine:function(a){if(a.singleLineFieldName)return a;
if(this._isEsriLocator(a.url))return a.singleLineFieldName="SingleLine",a;var b=new n;r({url:a.url,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(d.hitch(this,function(c){c.singleLineAddressField&&c.singleLineAddressField.name?(a.singleLineFieldName=c.singleLineAddressField.name,b.resolve(a)):(console.warn(a.url+"has no singleLineFieldName"),b.resolve(null))}),d.hitch(this,function(a){console.error(a);b.resolve(null)}));return b.promise},_getGeocodeName:function(a){if("string"!==
typeof a)return"geocoder";a=a.split("/");return a[a.length-2]||"geocoder"},getGeocoderName:function(a){return this._getGeocodeName(a)},hasAppSearchInfo:function(a){return a.itemInfo&&a.itemInfo.itemData&&a.itemInfo.itemData.applicationProperties&&a.itemInfo.itemData.applicationProperties.viewing&&a.itemInfo.itemData.applicationProperties.viewing.search},searchLayer:function(a){if(!this.hasAppSearchInfo(a))return!1;a=a.itemInfo.itemData.applicationProperties.viewing.search;return a.enabled&&0!==a.layers.length?
!0:!1}}});