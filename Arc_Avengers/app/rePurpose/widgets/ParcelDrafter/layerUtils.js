// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dojo/_base/array","dojo/_base/lang"],function(k,l,d,e){return k([l],{map:null,getPopupInfo:!0,getRenderer:!0,postCreate:function(){},getLayerDetailsFromMap:function(f,g,c){var b={},h;this.map&&this.map.webMapResponse&&this.map.webMapResponse.itemInfo&&this.map.webMapResponse.itemInfo.itemData&&this.map.webMapResponse.itemInfo.itemData.operationalLayers&&d.forEach(this.map.webMapResponse.itemInfo.itemData.operationalLayers,e.hitch(this,function(a){a.layerObject&&
("ArcGISMapServiceLayer"===a.layerType||"ArcGISTiledMapServiceLayer"===a.layerType?(h=c&&c.substring(0,c.lastIndexOf("_")),h&&a.id!==h||(b.isMapServer=!0,f.substring(0,f.length-1)===a.url&&(d.forEach(a.resourceInfo.layers,e.hitch(this,function(a){a.id===parseInt(g,10)&&(b.title=a.name)})),d.forEach(a.layers,e.hitch(this,function(a){a.id===parseInt(g,10)&&(a.name&&(b.title=a.name),this.getPopupInfo&&(b.popupInfo=a.popupInfo),a.layerDefinition&&(a.layerDefinition.definitionExpression&&(b.definitionExpression=
a.layerDefinition.definitionExpression),this.getRenderer&&a.layerDefinition.drawingInfo&&a.layerDefinition.drawingInfo.renderer&&(b.renderer=a.layerDefinition.drawingInfo.renderer)))}))))):c&&a.id!==c||a.url.replace(/.*?:\/\//g,"").toLowerCase()!==(f+g).replace(/.*?:\/\//g,"").toLowerCase()||a.id!==c||(b.isMapServer=!1,b.title=a.title,this.getPopupInfo&&(b.popupInfo=a.popupInfo),a.layerDefinition&&(a.layerDefinition.definitionExpression&&(b.definitionExpression=a.layerDefinition.definitionExpression),
this.getRenderer&&a.layerDefinition.drawingInfo&&a.layerDefinition.drawingInfo.renderer&&(b.renderer=a.layerDefinition.drawingInfo.renderer))))}));return b}})});