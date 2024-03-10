require("@babel/runtime/helpers/Arrayincludes.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("@babel/runtime/helpers/slicedToArray.js"),r=require("@babel/runtime/helpers/createForOfIteratorHelper.js");require("@babel/runtime/helpers/Arrayincludes.js");var a=require("@babel/runtime/helpers/objectSpread2.js"),t=require("C83266961874D7CFAE540E915EE7C176.js"),n=require("927AB8341874D7CFF41CD033B558C176.js");function l(e,r){var a=e.year,t=e.month,l=r.start,i=r.end,o=r.current,u=n.dateUtil.getTimeStamp,s=u({year:a,month:t,date:l}),d=u({year:a,month:t,date:i}),f=u({year:a,month:t,date:o});return f>=s&&f<=d}function i(e,r){var a=r.calendar||{},n=a.convertlLunar2Solar,l=(0,a.convertSolarLunar)(e)||{},i=l.lYear,o={type:"festival",name:"除夕",label:"除夕"};12===l.lMonth&&(t.festival.lunar[12]||(t.festival.lunar[12]={}),-1===n("".concat(i,"-12-30"))?t.festival.lunar[12][29]=o:t.festival.lunar[12][30]=o)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.month,n=e.date,l=t.festival.solar[a]&&t.festival.solar[a][n];if(!l){var i=r.calendar||{},o=i.convertSolarLunar,u=o(e),s=u.lMonth,d=u.lDay;if(!(l=t.festival.lunar[s]&&t.festival.lunar[s][d])){var f=t.festival.lunar[s]||{},c=Object.keys(f).find((function(e){return e.match(new RegExp("\\b".concat(d,"\\b")))}));if(c){var v=t.festival.lunar[s][c];if(v){var h=v.condition;l="function"==typeof h&&h(u)}else l=!1}else l=!1}}return l}exports.default=function(){return{name:"holidays",beforeRender:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=arguments.length>2?arguments[2]:void 0,f=u.dates,c=void 0===f?[]:f;return(s.showHolidays||s.showFestival)&&(c=c.map((function(u){var f=a({},u),c=f,v=c.year,h=c.month,y=c.date,m=t.holidays[v]&&t.holidays[v][h]||{},p=m[y];if(p)f=a(a({},f),p);else{var g,b=Object.keys(m).filter((function(e){return e.includes("-")})),O="",q=r(b);try{for(q.s();!(g=q.n()).done;){var w=g.value,S=w.split("-"),H=e(S,2),L=H[0],Y=H[1];if(+u.date>=+L&&+u.date<=+Y){O=w;break}}}catch(e){q.e(e)}finally{q.f()}var x=O.split("-"),j=e(x,2);if(l({year:v,month:h},{start:j[0],end:j[1],current:y}))f=a(a({},f),m[O]);else if(s.showFestival){var C=d.calendar||{},k=C.convertSolarLunar,A=C.convertlLunar2Solar;if("function"!=typeof k||"function"!=typeof A)return n.logger.warn("农历节日显示需要引入农历插件(/component/v2/plugins/solarLunar)");i(f,d);var D=o(f,d);D&&(f=a(a({},f),D))}}return f}))),{calendarData:a(a({},u),{},{dates:c}),calendarConfig:s}},methods:function(e){return{getHolidaysOfCurrentYear:function(){var r=(0,n.getCalendarData)("calendar",e).curYear;return this.methods(e).getHolidaysOfYear(r)},getHolidaysOfYear:function(e){return e?t.holidays[e]?t.holidays[e]:(n.logger.warn("未匹配到当前年份节假日信息，请自行补充"),{err:"not match"}):n.logger.warn("getHolidaysOfCurrentYear() 入参错误")}}}}};