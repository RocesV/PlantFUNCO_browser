"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7246],{27246:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(33028),a=r(59740),c=r(32723),u=r(34795),i=r(9249),s=r(87371),o=r(45754),f=r(13820),d=r(60590),p=r(40730),h=r(82972),l=r(32145),v=r(93824),b=r(43430),m=r(8370),g=r(21403),k=r(99836),y=r(95950),S=["fields"],Z=["chromStart","chromEnd","chrom"];function w(e){return e.get("thickStart")&&e.get("blockCount")&&0!==e.get("strand")}var _=function(e){(0,o.Z)(r,e);var t=(0,f.Z)(r);function r(){var e;(0,i.Z)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).cached=void 0,e}return(0,s.Z)(r,[{key:"configurePre",value:function(){var e=(0,u.Z)((0,c.Z)().mark((function e(t){var r,n,a;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new d.Q({filehandle:(0,l.openLocation)((0,k.readConfObject)(this.config,"bigBedLocation"),this.pluginManager)}),e.next=3,r.getHeader(t);case 3:return n=e.sent,a=new p.Z({autoSql:n.autoSql}),e.abrupt("return",{bigbed:r,header:n,parser:a});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"configure",value:function(){var e=(0,u.Z)((0,c.Z)().mark((function e(t){var r=this;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.cached||(this.cached=this.configurePre(t).catch((function(e){throw r.cached=void 0,e}))),e.abrupt("return",this.cached);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,u.Z)((0,c.Z)().mark((function e(t){var r,n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure(t);case 2:return r=e.sent,n=r.header,e.abrupt("return",Object.keys(n.refsByName));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,u.Z)((0,c.Z)().mark((function e(t){var r,u,i,s,o,f,d,p;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure(t);case 2:return r=e.sent,u=r.parser,i=r.header,s=i.version,o=i.fileType,f=u.autoSql,d=f.fields,p=(0,a.Z)(f,S),e.abrupt("return",{version:s,fileType:o,autoSql:(0,n.Z)({},p),fields:Object.fromEntries(d.map((function(e){return[e.name,e.comment]})))});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.refName,s=e.start,o=e.end,f=r.signal;return(0,v.ObservableCreate)(function(){var e=(0,u.Z)((0,c.Z)().mark((function e(u){var d,p,h;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.configure(r);case 3:return d=e.sent,p=d.parser,h=d.bigbed,e.next=8,h.getFeatureStream(i,s,o,{signal:f,basesPerSpan:o-s});case 8:e.sent.pipe((0,m.J)(),(0,g.U)((function(e){var r=p.parseLine("".concat(i,"\t").concat(e.start,"\t").concat(e.end,"\t").concat(e.rest),{uniqueId:e.uniqueId}),c=r.blockCount,u=r.blockSizes,s=r.blockStarts,o=r.chromStarts;if(c){var f=o||s||[],d=u,h=e.start;r.subfeatures=[];for(var l=0;l<c;l+=1){var v=(f[l]||0)+h,m=v+(d[l]||0);r.subfeatures.push({uniqueId:"".concat(e.uniqueId,"-").concat(l),start:v,end:m,type:"block"})}}if(void 0===e.uniqueId)throw new Error("invalid bbi feature");r.chromStart,r.chromEnd,r.chrom;var g=(0,a.Z)(r,Z),k=new b.Z({id:"".concat(t.id,"-").concat(e.uniqueId),data:(0,n.Z)((0,n.Z)({},g),{},{start:e.start,end:e.end,refName:i})});return w(k)?(0,y.d)(k):k}))).subscribe(u),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),u.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),r.signal)}},{key:"freeResources",value:function(){}}]),r}(h.BaseFeatureDataAdapter)},95950:function(e,t,r){r.d(t,{P:function(){return u},d:function(){return c}});var n=r(33028),a=r(95802);function c(e){var t=e.children(),r=e.get("thickStart"),n=e.get("thickEnd");if(!r&&!n)return e;var c=t?t.filter((function(e){return"block"===e.get("type")})).sort((function(e,t){return e.get("start")-t.get("start")})):[],u=[];c.forEach((function(t){var a=t.get("start"),c=t.get("end");if(r>=c){var i=e.get("strand")>0?"five":"three";u.push({type:"".concat(i,"_prime_UTR"),start:a,end:c})}else if(r>a&&r<c&&n>=c){var s=e.get("strand")>0?"five":"three";u.push({type:"".concat(s,"_prime_UTR"),start:a,end:r},{type:"CDS",start:r,end:c})}else if(r<=a&&n>=c)u.push({type:"CDS",start:a,end:c});else if(r>a&&r<c&&n<c){var o=e.get("strand")>0?"five":"three",f=e.get("strand")>0?"three":"five";u.push({type:"".concat(o,"_prime_UTR"),start:a,end:r},{type:"CDS",start:r,end:n},{type:"".concat(f,"_prime_UTR"),start:n,end:c})}else if(r<=a&&n>a&&n<c){var d=e.get("strand")>0?"three":"five";u.push({type:"CDS",start:a,end:n},{type:"".concat(d,"_prime_UTR"),start:n,end:c})}else if(n<=a){var p=e.get("strand")>0?"three":"five";u.push({type:"".concat(p,"_prime_UTR"),start:a,end:c})}}));var i=Object.fromEntries(e.tags().map((function(t){return[t,e.get(t)]})));return i.subfeatures=u,i.type="mRNA",i.uniqueId=e.id(),delete i.chromStarts,delete i.chromStart,delete i.chromEnd,delete i.chrom,delete i.blockStarts,delete i.blockSizes,delete i.blockCount,delete i.thickStart,delete i.thickEnd,new a.SimpleFeature({data:i,id:e.id()})}function u(e,t,r,u,i,s,o,f){var d=e.split("\t"),p=d[t],h=+d[r],l=r===u?1:0,v=+d[u]+l,b=f?function(e,t){return Object.fromEntries(t.split("\t").map((function(t,r){return[e[r],t]})))}(f,e):s.parseLine(e,{uniqueId:o}),m=b.blockCount,g=b.blockSizes,k=b.blockStarts,y=b.chromStarts;if(m){var S=y||k||[],Z=g,w=h;b.subfeatures=[];for(var _=0;_<m;_+=1){var q=(S[_]||0)+w,C=q+(Z[_]||0);b.subfeatures.push({uniqueId:"".concat(o,"-").concat(_),start:q,end:C,type:"block"})}}i&&(b.score=+b[i]),delete b.chrom,delete b.chromStart,delete b.chromEnd;var x=new a.SimpleFeature((0,n.Z)((0,n.Z)({},b),{},{start:h,end:v,refName:p,uniqueId:o}));return x.get("thickStart")?c(x):x}}}]);
//# sourceMappingURL=7246.dd23ef36.chunk.js.map