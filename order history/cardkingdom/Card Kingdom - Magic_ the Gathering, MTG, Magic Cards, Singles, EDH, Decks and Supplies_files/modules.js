(()=>{var e,t;$((function(){$(document).on("touchend click",".thumb",(function(){var e="url('"+$(this).data("stdsrc")+"')",t=$(this).data("maxsrc")||$(this).data("stdsrc");$("#ckboxPoster").css({"background-image":e}).data("maxsrc",t)})),$(document).on("mouseenter","#ckboxPoster",(function(){$(this).append('<span class="catalogItemMag glyphicon glyphicon-search"></span>')})),$(document).on("mouseleave","#ckboxPoster",(function(){$(this).find(".catalogItemMag").remove()})),$(document).on("click touchend","#ckboxPoster",(function(e){var t=$(e.target).hasClass("catalogItemMag")?$(e.target).parent():$(e.target);ck.showLightbox(t)})),$(document).on("click touchend",".lbClose,.lbLink,.lbBackdrop",(function(){setTimeout((function(){$(".lbWrapper").remove()}),1)})),ck.showLightbox=function(e){var t=$(e).data("maxsrc")||e.image_url,o='<div class="lbWrapper"><div class="lbBackdrop"></div>';e.link_url&&e.link_url.length>0?o+='<a class="lbLink" href="'+e.link_url+'" target="_blank"><div id="lbImage" class="lbImage"></div></a>':o+='<div id="lbImage" class="lbImage"></div>',o+='<div class="lbClose glyphicon glyphicon-remove"></div></div>';var n=new Image;n.onload=function(){var e="url('"+this.src+"')",t=this.height+"px",o=this.width+"px";$("#lbImage").css({"background-image":e,height:t,width:o})},n.src=t,$("body").append(o)},$(document).on("click",".flipCardLink",(function(e){$(document).trigger("swapFlipImages.ck")}))})),$((function(){$(document).on("click",".flashAlert",(function(){$(this).remove()}))})),function(e,t,o,n){"use strict";function a(){this.init()}e.extend(a.prototype,{init:function(){var n=this;e(o).on("dataLoaded:ckpromos",(function(e,o){"/"!==t.location.pathname.toLowerCase()&&n.updatePromos(o),n.displayCkHelp(o)})),n.loadData()},displayCkHelp:function(t){var o,n,a=t.ckHelp;if(void 0!==a&&a.length>0){for(var i=a.length-1;i>=0;i--)if(1===(o=e(a[i].selector)).length){n="ckHelpId"+i;var s=e('<span class="ckHelp '+a[i].position+' glyphicon glyphicon-question-sign" data-helpid="'+n+'"></span>');o.append(s);var r=e('<div id="'+n+'" class="ckTooltip">'+a[i].content+"</div>");e("body").append(r)}this.initCKHelpInteractivity()}},updatePromos:function(t){for(var n,a,i,s=t.promos.length-1;s>=0;s--)if(a=(i=t.promos[s]).preview_page.replace(/&amp;/g,"&").toLowerCase(),n=this.checkForPageMatch(i,a),(0===a.length||!0===n)&&e(i.selector).length>0)if(void 0===i.image_url&&void 0===i.title&&void 0===i.flavorText&&void 0===i.html_blob&&void 0===i.embeddedVideoKey)e(i.selector).css({display:"none"});else{if(e(i.selector).css({display:"block"}).addClass("hasContent"),void 0!==i.customClass&&i.customClass.length>0&&e(i.selector).addClass(i.customClass),void 0!==i.link_url&&i.link_url.length>0){var r=i.link_url,c=i.description||"";r.length>0&&(r=r.replace("&amp;","&"),e(i.selector).find(">a").length>0?e(i.selector).find(">a").attr({href:r,"data-cktag":c}):e(i.selector).find(".wrapForBorder > a").attr({href:r,"data-cktag":c}))}if(void 0!==i.image_url&&i.image_url.length>3){i.alt_text=i.alt_text||i.title||i.description||"";var l='<img src="'+i.image_url+'" alt="'+i.alt_text+'">';e(i.selector).find(".itemImage").css({display:"block"}).html(l)}void 0!==i.title&&i.title.length>0&&e(i.selector).find("h3").css({display:"block"}).find("span").text(i.title),void 0!==i.flavorText&&i.flavorText.length>0&&e(i.selector).find(".text").css({display:"block"}).text(i.flavorText),void 0!==i.html_blob&&i.html_blob.length>3&&(i.html_blob=i.html_blob.replace(/\\&quot;/g,"&quot;"),e(i.selector).find(".specialContent").length>0?e(i.selector).find(".specialContent").append(i.html_blob):e(i.selector).find("> a").length>0?e(i.selector).find("> a").append(i.html_blob):e(i.selector).find(".wrapForBorder > a").length>0?e(i.selector).find(".wrapForBorder > a").append(i.html_blob):e(i.selector).append(i.html_blob)),"string"==typeof i.contentType&&i.contentType.length>0&&this.renderUniqueContentTypes(i)}e(o).trigger("promosBuilt:ckpromos")},renderUniqueContentTypes:function(t){var n=this;switch(t.contentType){case"customHeading":var a=t.selector+" h3",i="<"+t.customHTag+">"+t.title+"</"+t.customHTag+">";e(a).replaceWith(i),e(t.selector).addClass("noHoverFx");break;case"embeddedVideo":var s=t.selector+" .itemImage",r='<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+t.embeddedVideoKey+'?rel=0&modestbranding=1" frameborder="0" allow="" allowfullscreen></iframe>\n';e(t.selector).addClass("embeddedVideo"),e(s).css({display:"block"}).html(r);break;case"pouncingPopup":var c="ckShowPopupCount-"+t.id,l=parseInt(n.getCookie(c))?parseInt(n.getCookie(c)):0;l<parseInt(t.maxPopupCount)&&(n.showLightbox(t),n.setCookie(c,++l,365));break;case"productSlider":if("string"==typeof t.productSliderId&&t.productSliderId.length>0){e(t.selector).addClass("productSlider noHoverFx");var d="setProductSlider"+t.selector;e(o).trigger(d,[t.productSliderId,t.productSliderType])}}},checkForPageMatch:function(e,o){var n,a=t.location.pathname.toLowerCase();if(o.indexOf("||")<0){if(o===a)return!0}else for(var i=(n=o.split("||")).length-1;i>=0;i--)if(n[i]===a)return!0;return!1},loadData:function(){var t=this,n="/ckcms/json/ck_config.json?v="+ck.version;e.ajax({url:n,dataType:"json",type:"get",complete:function(n){t.promoListData=JSON.parse(n.responseText),e(o).trigger("dataLoaded:ckpromos",t.promoListData)}})},setCookie:function(e,t,n){var a="";if("number"==typeof n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),a="expires="+i.toUTCString()}o.cookie=e+"="+t+"; "+a+"; path=/"},getCookie:function(e){for(var t=e+"=",n=o.cookie.split(";"),a=0;a<n.length;a++){for(var i=n[a];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return""},showLightbox:function(t){var o=e(t).data("maxsrc")||t.image_url,n='<div class="lbWrapper"><div class="lbBackdrop"></div>';t.link_url&&t.link_url.length>0?n+='<a class="lbLink" href="'+t.link_url+'" target="_blank"><div id="lbImage" class="lbImage"></div></a>':n+='<div id="lbImage" class="lbImage"></div>',n+='<div class="lbClose glyphicon glyphicon-remove"></div></div>';var a=new Image;a.onload=function(){var t="url('"+this.src+"')",o=this.height+"px",n=this.width+"px";e("#lbImage").css({"background-image":t,height:o,width:n})},a.src=o,e("body").append(n)},initCKHelpInteractivity:function(){e(o).on({mouseleave:function(){var t="#"+e(this).data("helpid");setTimeout((function(){void 0===ck.tooltip&&e(t).css({display:"none"})}),500)},click:function(t){t.stopPropagation();var o="#"+e(this).data("helpid"),n=e(this).offset();e(o).css({top:n.top,left:n.left}).toggle(),e(this).hasClass("right")&&e(o).addClass("right")},touchend:function(t){t.preventDefault();var o=e(this).data("helpid");if(e(".ckTooltip").css({display:"none"}),ck.showHelp=!1,void 0!==o){e(".ckTooltip").css({display:"none"}),ck.showHelp=!1,o="#"+o;var n=e(this).offset();e(o).css({top:n.top,left:n.left}).toggle(),e(this).hasClass("right")&&e(o).addClass("right"),setTimeout((function(){ck.showHelp=!0}),300)}}},".ckHelp"),e(o).on({mouseenter:function(){ck.tooltip=this},mouseleave:function(){ck.tooltip=void 0,e(this).css({display:"none"})},click:function(){e(".ckTooltip").css({display:"none"}),ck.showHelp=!1},touchend:function(){ck.showHelp=!0,setTimeout((function(){e(".ckTooltip").css({display:"none"}),ck.showHelp=!1}),0)}},".ckTooltip")}}),e.fn.ckpromos=function(t){return this.each((function(){e.data(this,"plugin_ckpromos")||e.data(this,"plugin_ckpromos",new a(this,t))}))}}(jQuery,window,document),$((function(){$(document).ckpromos()})),function(){var e=0,t=function(e){var t=$(e.target).data("selector");$(t).hasClass("open")||($(t).siblings().removeClass("open"),$(t).toggleClass("open"),$(e.target).attr("aria-expanded","true"))},o=function(e){var t=e.toElement||e.relatedTarget;$(t).parents().hasClass("submenu")||($("#header .submenu").removeClass("open"),$(e.target).find(".desktop-menu-button").attr("aria-expanded","false"))},n=function(t){$(".submenu.desktop-menu-content a").each((function(e,t){t.setAttribute("tabindex",-1)})),$(t).find("a:visible").each((function(t,o){o.setAttribute("tabindex",t+1),e=t+1}))},a=function(e){var t="#"+$(e.target).parents(".mega-menu").attr("id")+"Button";$(t).focus()};$(document).on("mouseover","#desktop-menu .desktop-menu-button",(function(e){t(e)})),$(document).on("mouseleave",".submenu",(function(){$(this).removeClass("open"),$(".desktop-menu-button").attr("aria-expanded","false")})),$(document).on("mouseleave","#desktop-menu",(function(e){o(e)})),$(document).on("keydown","#desktop-menu .desktop-menu-button",(function(e){var a="";switch(e.key){case"ArrowDown":e.preventDefault(),t(e),a=$(e.target).data("selector"),n(a),$(a).find("a").first().focus();break;case"ArrowUp":e.preventDefault();break;case"Enter":a=$(this).data("selector"),$(a).hasClass("open")?($(a).removeClass("open"),$(this).attr("aria-expanded","false")):($(a).siblings().removeClass("open"),$(a).addClass("open"),$(this).attr("aria-expanded","true"),n(a));break;case"Escape":case"Tab":o(e)}})),$(document).on("keydown",".mega-menu a",(function(t){var n=0;switch(t.key){case"ArrowDown":t.preventDefault(),(n=parseInt($(t.target).attr("tabindex")))==e?function(e){var t="#"+$(e.target).parents(".mega-menu").attr("id")+"Button";$(t).next().focus(),o(e)}(t):$("[tabindex="+(n+1)+"]").focus();break;case"ArrowUp":t.preventDefault(),1==(n=parseInt($(t.target).attr("tabindex")))?a(t):$("[tabindex="+(n-1)+"]").focus();break;case"Escape":a(t),o(t)}})),document.getElementById("offcanvasNavbar").addEventListener("shown.bs.offcanvas",(function(t){$(".main-menu-wrapper li.submenu-toggle:visible, .main-menu-wrapper li a:visible").each((function(t,o){o.setAttribute("tabindex",t+1),e=t+1}))})),$(document).on("keydown",".submenu-toggle",(function(e){parseInt($(e.target).attr("tabindex")),"Enter"===e.key&&$(e.target).click()})),$(document).on("keydown",".submenu.show, .submenu.show *",(function(e){"ArrowLeft"===e.key&&$("#header .submenu.show").find(".submenu-title").click()})),$(document).on("click",".mega-menu a",(function(e){"string"==typeof $(this).attr("target")&&o(e)}));var i=_.throttle((function(){var e=$(window).outerHeight()-200+"px",t=($(window).innerWidth()>775&&$(window).innerWidth()<1240?$(window).innerWidth()-80:1160)+"px";$(".desktop-menu-content").css("max-width",t),$(".desktop-menu-content .mega-menu").css("max-height",e)}),50,{leading:!0,trailing:!1});$(window).on("resize",(function(){i()})),i()}(),window.dataLayer=window.dataLayer||[],$(document).on("checkoutStep",(function(e,t){"string"==typeof t&&t.length>0&&t.search(/^[a-zA-Z0-9-_]+$/>-1)&&window.dataLayer.push({event:"checkout","checkout-step":t})})),$(document).on("checkoutFormSubmit",(function(e,t){if("#save_cc"===t){var o=$(t).is(":checked");window.dataLayer.push({event:"checkout-submit-payment","save-credit-card":o})}})),$(document).on("finalizedOrder",(function(e,t){window.dataLayer.push({ecommerce:t})})),$(document).on("paypal-express-click",(function(e,t){window.dataLayer.push({event:"paypal-express-click","ck-order-id":t})})),$(document).on("paypal-express-finalize",(function(e,t){window.dataLayer.push({event:"paypal-express-finalize","ck-order-id":t})})),$(document).on("save-for-later-move-to-cart",(function(e,t,o){dataLayer.push({event:"addToCart",ecommerce:{currencyCode:"USD",add:{products:[{id:t,price:o}]}}})})),ck=ck||{},ck.formValidator=(t={},(e={}).formCheck={},e.formGroups={},e.validateEmail=function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value)},e.validateMatchOther=function(e){var t=$(e).data("related-field-selector"),o=$(t)[0].value;return e.value.length>0&&e.value===o},e.validateIntegerRequired=function(e){return parseInt(e.value)>0},e.validateAtLeastOne=function(t,o){var n=$(t).data("group-id");return!!e.formGroups[n]||($(t).is(":checked")&&(e.formGroups[n]=!0,o.each((function(t,o){$(o).data("group-id")===n&&(e.formCheck[t]=!0)}))),e.formGroups[n])},t.validate=function(t){var o=$(t).find("input,select");e.formGroups={},e.formCheck={},o.each((function(t,n){switch($(n).data("form-field-type")){case"email":e.formCheck[t]=e.validateEmail(n);break;case"match-other":e.formCheck[t]=e.validateMatchOther(n);break;case"integer-required":e.formCheck[t]=e.validateIntegerRequired(n);break;case"at-least-one":e.formCheck[t]=e.validateAtLeastOne(n,o)}})),$(".restockForm .alert-warning").removeClass("alert-warning"),$(".restockForm .hasErrors").removeClass("hasErrors");var n=!0;for(elIndex in e.formCheck)e.formCheck[elIndex]||(n=!1,$(o[elIndex]).addClass("alert-warning").parent().addClass("hasErrors"));return n},t),ck.clickAndDisable=function(e){e.onclick=function(e){e.preventDefault()}},$((function(){var e=$("#header").height(),t=$("#sidecartContainer"),o=$("body"),n=$(".headerSearch"),a=$(".ckTooltip"),i=parseInt(t.css("padding-top")),s="hiddenMenu",r=0,c=_.throttle((function(){var c,l,d,u,p=window.scrollY||document.documentElement.scrollTop;!0===ck.showHelp&&(a.css({display:"none"}),ck.showHelp=!1),$(window).outerWidth()>1200?(o.removeClass(s),c=window.scrollY||document.documentElement.scrollTop,l=$(window).height(),d=l,(u=l-($(document).height()-c-$(".footer").outerHeight()))>0&&(d=l-u-i),t.css({"max-height":d})):(0!==r&&(p<r?o.removeClass(s):p>e&&(o.addClass(s),n.removeClass("showSearch"))),r=window.scrollY||document.documentElement.scrollTop)}),50);$(document).on("scroll",(function(){c()})),c(),$(document).on("cartUpdated.ck",(function(){o.removeClass(s)}))})),$((function(){var e=function(e){var t,o,n,a,i;if((i=parseInt(e))<0)t="ANY MOMENT";else{t="in ",(o=Math.floor(i/86400))==o&&o>0&&(o>0&&(t=o+"d "),i-=3600*o*24);var s=(n=Math.floor(i/3600)).toString();t=t+(s=s.padStart(2,"0"))+":",i-=3600*n;var r=(a=Math.floor(i/60)).toString();if(t=t+(r=r.padStart(2,"0"))+":",i-=Math.floor(60*a),n<1){var c=i.toString();t+=c=c.padStart(2,"0")}else t+="00"}$("#siteNotice .countdownTime").text(t),$("#siteNotice .ckClose").on("click",(function(){$("#siteNotice").remove(),$("body").removeClass("activeCountdown"),$("#header").css("top","auto"),$(".mainWrapper").css({top:"auto","padding-bottom":"0px"}),$(".shopMain .sidePanel").css("padding-top","0px"),$("#sidecartContainer.flashAlert,.submenu,#offcanvasNavbar").css("margin-top","0px"),$(window).off("resize.with-notice"),function(e,t,o){var n="";if("number"==typeof o){var a=new Date;a.setTime(a.getTime()+24*o*60*60*1e3),n="expires="+a.toUTCString()}document.cookie=e+"="+t+"; "+n+"; path=/"}("hideSitewideMessage","true")}))},t=function(){var e=$("#siteNotice").outerHeight()||0;ck.noticeOffset=e,$(".shopMain .sidePanel").css("padding-top",e+"px"),$("#header").css("top",e+"px"),$(".mainWrapper").css({top:e+"px","padding-bottom":e+"px"}),$("#sidecartContainer,.flashAlert").css("margin-top",e+"px"),$(window).width()<776&&$("#offcanvasNavbar,#header .submenu").css("margin-top",e+"px")};"number"==typeof ck.sitewideCountdown&&("true"!==function(e){for(var t=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var a=o[n];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""}("hideSitewideMessage")||ck.sitewideCountdown<3600)&&ck.sitewideCountdown>-300&&($("#siteNotice").append('<span class="ckClose">X</span>'),$("body").addClass("activeCountdown"),e(ck.sitewideCountdown),setInterval((function(){ck.sitewideCountdown-=3,e(ck.sitewideCountdown)}),3e3),$(window).on("resize.with-notice",(function(){t()})),t())})),$((function(){$(document).on({mouseenter:function(){if($(this).find(".ckTooltipPrinting").length<1){var e=$(this).find("a").data("title"),t=$("<div>",{class:"ckTooltipPrinting"}).text(e);$(this).append(t)}},mouseleave:function(){$(this).find(".ckTooltipPrinting").remove()}},"#printings > li:not(.showAllVersions)")}))})();
//# sourceMappingURL=modules.js.map