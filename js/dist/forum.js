module.exports=function(e){var t={};function r(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/LogInButton"]},function(e,t){e.exports=flarum.core.compat["models/User"]},function(e,t){e.exports=flarum.core.compat.Model},function(e,t){e.exports=flarum.core.compat["components/SettingsPage"]},function(e,t){e.exports=flarum.core.compat["components/LogInButtons"]},function(e,t){e.exports=flarum.core.compat["components/NotificationGrid"]},,,function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),n=r(3),i=r.n(n),l=r(4),f=r.n(l),u=r(1),c=r(6),s=r.n(c),g=r(2),p=r.n(g),d=r(7),b=r.n(d),y=r(5),v=r.n(y);o.a.initializers.add("flagrow-telegram",function(){i.a.prototype.canReceiveTelegramNotifications=f.a.attribute("canReceiveTelegramNotifications"),i.a.prototype.flagrowTelegramError=f.a.attribute("flagrowTelegramError"),Object(u.extend)(s.a.prototype,"items",function(e){e.add("flagrow-telegram",m(p.a,{className:"Button LogInButton--telegram",icon:"fab fa-telegram-plane",path:"/auth/telegram"},o.a.translator.trans("flagrow-telegram.forum.log_in_with_telegram_button")))}),Object(u.extend)(b.a.prototype,"notificationMethods",function(e){if(o.a.forum.attribute("flagrow-telegram.enableNotifications")){var t=o.a.session.user;t&&t.canReceiveTelegramNotifications()&&e.add("telegram",{name:"telegram",icon:"fab fa-telegram-plane",label:o.a.translator.trans("flagrow-telegram.forum.settings.notify_by_telegram_heading")})}}),Object(u.extend)(v.a.prototype,"accountItems",function(e){if(o.a.forum.attribute("flagrow-telegram.enableNotifications")){var t=o.a.session.user;t&&!t.canReceiveTelegramNotifications()&&e.add("flagrow-telegram",m("div",null,m(p.a,{className:"Button LogInButton--telegram",style:"display:inline-block; width:auto",icon:"fab fa-telegram-plane",path:"/auth/telegram"},o.a.translator.trans("flagrow-telegram.forum.link_telegram_button"))))}}),Object(u.extend)(v.a.prototype,"notificationsItems",function(e){if(o.a.forum.attribute("flagrow-telegram.enableNotifications")){var t=o.a.session.user;if(t&&t.flagrowTelegramError()){var r=o.a.forum.attribute("flagrow-telegram.botUsername");e.add("flagrowTelegramError",{view:function(){return m(".Alert",m("p",o.a.translator.trans("flagrow-telegram.forum.settings.unblock_telegram_bot",{a:m("a",{href:"https://t.me/"+r}),username:"@"+r})))}})}}})})}]);
