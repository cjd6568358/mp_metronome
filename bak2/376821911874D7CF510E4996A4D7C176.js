require("@babel/runtime/helpers/Arrayincludes.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("@babel/runtime/helpers/Arrayincludes.js");var e=require("@babel/runtime/helpers/objectSpread2.js"),r=require("@babel/runtime/helpers/createForOfIteratorHelper.js"),t=require("@babel/runtime/helpers/toConsumableArray.js"),o=require("927AB8341874D7CFF41CD033B558C176.js"),a=require("50B40F501874D7CF36D267574997C176.js");function n(e,a,n){var d,l=t(a),i=r(e);try{var s=function(){var e=d.value,r=l.findIndex((function(r){return o.dateUtil.toTimeStr(r)===o.dateUtil.toTimeStr(e)})),t=l[r];if(!t)return 1;t.showTodoLabel=!!n||!t.choosed,t.showTodoLabel&&(t.todoText=e.todoText),t.color=e.color};for(i.s();!(d=i.n()).done;)s()}catch(e){i.e(e)}finally{i.f()}return l}exports.default=function(){return{name:"todo",beforeRender:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.todos,a=void 0===o?[]:o,d=r.dates,l=void 0===d?[]:d,i=r.showLabelAlways,s=n(a,l,i);return{calendarData:e(e({},r),{},{dates:s}),calendarConfig:t}},methods:function(r){return{setTodos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,o.getCalendarData)("calendar",r);if(!n||!n.dates)return Promise.reject("请等待日历初始化完成后再调用该方法");var d=t.circle,l=t.dotColor,i=void 0===l?"":l,s=t.pos,u=void 0===s?"bottom":s,c=t.showLabelAlways,f=t.dates,h=void 0===f?[]:f,b=n.todos,v=void 0===b?[]:b,m=h.map((function(e){return o.dateUtil.tranformStr2NumOfDate(e)})),T={dates:n.dates,todos:o.dateUtil.uniqueArrayByDate(v.concat(m))};d||(T.todoLabelPos=u,T.todoLabelColor=i),T.todoLabelCircle=d||!1,T.showLabelAlways=c||!1;var p=(0,o.getCalendarData)("calendar",r);return a.renderCalendar.call(r,e(e({},p),T))},deleteTodos:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!(n instanceof Array&&n.length))return Promise.reject("deleteTodos()应为入参为非空数组");var d=(0,o.getCalendarData)("calendar",r),l=d.todos||[],i=n.map((function(e){return o.dateUtil.toTimeStr(e)})),s=l.filter((function(e){return!i.includes(o.dateUtil.toTimeStr(e))})),u=d.dates,c=d.curYear,f=d.curMonth,h=t(u),b=o.dateUtil.filterDatesByYM({year:c,month:f},s);return h.forEach((function(e){e.showTodoLabel=!1})),b.forEach((function(e){h[e.date-1].showTodoLabel=!h[e.date-1].choosed})),a.renderCalendar.call(r,e(e({},d),{},{dates:h,todos:s}))},clearTodos:function(){var n=(0,o.getCalendarData)("calendar",r),d=t(n.dates);return d.forEach((function(e){e.showTodoLabel=!1})),a.renderCalendar.call(r,e(e({},n),{},{dates:d,todos:[]}))},getTodos:function(){return(0,o.getCalendarData)("calendar.todos",r)||[]}}}}};