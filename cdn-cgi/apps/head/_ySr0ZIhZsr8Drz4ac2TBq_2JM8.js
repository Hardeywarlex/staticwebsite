;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="d7a0838e7c9c23cdc09d4a81f096c373";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["rQBc8KGEjb5J"]={appId:"mt9QUlJFKGSg",scope:{}};;CloudflareApps.installs["rQBc8KGEjb5J"].options={"account":{"accountId":"gNnQtlbUusLB","service":"jsguardian"},"free":{"guardInnerHTML":"clean","guardInput":"clean","guardPrompt":"clean","guardTransport":"https-only","guardWhen":"before","guardXSS":"sanitize"}};;if(CloudflareApps.matchPage(CloudflareApps.installs['rQBc8KGEjb5J'].URLPatterns)){(function(){"use strict";function cloneObject(obj,done=new Map()){if(done.has(obj)){return done.get(obj);}
var clone=Array.isArray(obj)?[]:{};done.set(obj,clone);for(var key in obj){if(typeof(obj[key])=="object"&&obj[key]!=null){clone[key]=cloneObject(obj[key],done);}else{clone[key]=obj[key];}}
return clone;}
Object.seal(DOMParser.prototype);var parser=new DOMParser();function sanitize(value){if(typeof(value)==="string"){var body=parser.parseFromString(value,"text/html").body,riskyattributes=["background","form","autofocus","dirname","onfocus","formaction","onformchange","onforminput","onerror"],riskytags=["link","details","base","object"],riskytext=["${","`","<!--","[CDATA"];for(var text of riskytext){if(body.innerHTML.includes(text)){return"";}}
for(var aname of riskyattributes){if(body.querySelectorAll(`[${aname}]`).length>0){return"";}}
for(var tname of riskytags){if(body.querySelectorAll(tname).length>0){return"";}}
if(body.querySelectorAll("[src='#']").length>0){return"";}
return body.innerHTML;}
return"";}
var _addEventListener=window.addEventListener,_setAttribute=Element.prototype.setAttribute,options=cloneObject(typeof(CloudflareApps.installs['rQBc8KGEjb5J'].options)!=="undefined"?CloudflareApps.installs['rQBc8KGEjb5J'].options:{"free":{"guardWhen":"before","guardInnerHTML":"clean","guardPrompt":"clean","guardInput":"clean","guardTransport":"https-only","guardXSS":"sanitize"},"plan":"free"});function isExecutable(str){var functionExp=/([\s\(]*.\(\s*.*\s*\)\s*.*\s*=>)|([\s*.*\s*=>\s*.\{)|([\s\(]*.[Ff]unction\s*.*\s*\(\s*.*\s*\)\s*.*\s*\{)/,templateExp=/(\`(\s*.*)\$\{(\s*.*\s*.*)\}(\s*.*)\`)/;return functionExp.test(str)||templateExp.test(str)};function protect(){if(options.guardInput&&options.guardInput!=="off"){(function(){if(_addEventListener){_addEventListener.call(window,"change",function(event){var target=event.currentTarget;if(target instanceof HTMLInputElement||target instanceof HTMLTextAreaElement){var oldvalue=target.getAttribute("value"),clean=sanitize(target.value);if(oldvalue===clean){return;}
var executable=isExecutable(clean);if((options.guardInput==="clean"||target.value==clean+"")&&!executable){target.value=clean;_setAttribute.call(target,"value",clean);}else if(options.guardInput==="strict"||executable){target.value=oldvalue;}}});}
var desc=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");Object.defineProperty(HTMLInputElement.prototype,"value",{enumerable:desc.enumerable,configurable:desc.configurable,get:desc.get,set:function(value){var clean=sanitize(value)+"",executable=isExecutable(clean);if((options.guardInput==="clean"||value==clean+"")&&!executable){desc.set.call(this,clean);return clean;}}});})();}
if(options.guardInnerHTML&&options.guardInnerHTML!=="off"){(function(){var desc=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML");Object.defineProperty(Element.prototype,"innerHTML",{enumerable:desc.enumerable,configurable:false,get:desc.get,set:function(value){if(options.guardInnerHTML==="prevent"){return this.innerHTML;}
var clean=sanitize(value)+"";if(options.guardInnerHTML==="clean"||value==clean+""){desc.set.call(this,clean);return clean;}}});})();}
if(options.guardPrompt&&options.guardPrompt!=="off"){(function(){if(options.guardPrompt==="prevent"){Object.defineProperty(window,"prompt",{value:function(){return"";}})}else if(options.guardPrompt==="clean"||options.guardPrompt==="strict"){var _prompt=window.prompt.bind(window);Object.defineProperty(window,"prompt",{value:function(title){var input=_prompt(title),sanitized=sanitize(input)+"";if(options.guardPrompt==="strict"){if(input!=sanitized||isExecutable(sanitized)){window.alert("Invalid input: "+input);return"";}}else if(isExecutable(sanitized)){window.alert("Invalid input: "+input);return"";}
return sanitized;}});}})();}
if(options.guardTransport==="https-only"){(function(){var meta=document.createElement("meta");meta.setAttribute("http-equiv","Content-Security-Policy");meta.setAttribute("content","upgrade-insecure-requests");document.head.appendChild(meta);meta=document.createElement("meta");meta.setAttribute("http-equiv","Strict-Transport-Security");meta.setAttribute("content","max-age=31536000");document.head.appendChild(meta);})();}
if(options.guardXSS==="sanitize"||options.guardXSS==="block"){(function(){var meta=document.createElement("meta");meta.setAttribute("http-equiv","X-XSS-Protection");if(options.guardXSS==="sanitize"){meta.setAttribute("content","1");}else{meta.setAttribute("content","1; mode=block");}
document.head.appendChild(meta);})();}}
if(options.guardWhen==="after"&&_addEventListener){_addEventListener.call(window,"load",protect);}else{protect();}})();}