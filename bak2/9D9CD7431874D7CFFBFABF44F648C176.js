var e=require("@babel/runtime/helpers/interopRequireDefault.js").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=require("@babel/runtime/helpers/objectSpread2.js");require("@babel/runtime/helpers/Arrayincludes.js");var t=require("927AB8341874D7CFF41CD033B558C176.js"),a=e(require("6E89F5561874D7CF08EF9D513738C176.js"));function n(e){return e?("string"==typeof e&&e.includes("-")&&(e=t.dateUtil.transformDateRow2Dict(e)),e):e}exports.default=function(){return{name:"convertSolarLunar",beforeRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.dates,u=void 0===n?[]:n,o=e.selectedDates,l=void 0===o?[]:o;return t.showLunar&&(u=u.map((function(e){var t=e.year,n=e.month,u=e.date;return r(r({},e),{},{lunar:a.default.solar2lunar(t,n,u)})})),l=l.map((function(e){var t=e.year,n=e.month,u=e.date;return r(r({},e),{},{lunar:a.default.solar2lunar(t,n,u)})}))),{calendarData:r(r({},e),{},{dates:u,selectedDates:l}),calendarConfig:t}},methods:function(){return{convertSolarLunar:function(e){if(!(e=n(e)))return e;var r=e,t=r.year,u=r.month,o=r.date;return a.default.solar2lunar(t,u,o)},convertlLunar2Solar:function(e,r){if(!(e=n(e)))return e;var t=e,u=t.year,o=t.month,l=t.date;return a.default.lunar2solar(u,o,l,r)}}}}};