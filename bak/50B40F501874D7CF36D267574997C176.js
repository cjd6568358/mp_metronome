var e=require("@babel/runtime/helpers/interopRequireDefault.js").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderCalendar=function(e,d){var l=this;return new Promise((function(f){var u=l;void 0===u.firstRender?u.firstRender=!0:u.firstRender=!1;var o,s=u.data.calendar||{},c=n(t.default.installed);try{for(c.s();!(o=c.n()).done;){var b=o.value,p=a(b,2)[1];if("function"==typeof p.beforeRender){var v=p.beforeRender(r(r({},s),e),d||(0,i.getCalendarConfig)(u),u),R=v.calendarData,g=v.calendarConfig;e=R,d=g}}}catch(e){c.e(e)}finally{c.f()}u.setData({config:d,calendar:e},(function(){var r={calendar:e,config:d,firstRender:u.firstRender};f(r),u.firstRender&&(u.triggerEvent("afterCalendarRender",r),u.firstRender=!1)}))}))};var r=require("@babel/runtime/helpers/objectSpread2.js"),a=require("@babel/runtime/helpers/slicedToArray.js"),n=require("@babel/runtime/helpers/createForOfIteratorHelper.js"),t=e(require("67F675131874D7CF01901D14F2A7C176.js")),i=require("927AB8341874D7CFF41CD033B558C176.js");