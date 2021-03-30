(this["webpackJsonpgantt-task-react-example"]=this["webpackJsonpgantt-task-react-example"]||[]).push([[0],{10:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);a(10);var n,r=a(0),o=a.n(r),i=a(9),s=a.n(i),c=a(4),l=a.n(c),d=a(5),u=a(3),g=a(1),h=a(7);!function(e){e.QuarterDay="Quarter Day",e.HalfDay="Half Day",e.Day="Day",e.Week="Week",e.Month="Month"}(n||(n={}));var m=function(e,t,a){return new Date(e.getFullYear()+("year"===a?t:0),e.getMonth()+("month"===a?t:0),e.getDate()+("day"===a?t:0),e.getHours()+("hour"===a?t:0),e.getMinutes()+("minute"===a?t:0),e.getSeconds()+("second"===a?t:0),e.getMilliseconds()+("millisecond"===a?t:0))},f=function(e,t){var a=["millisecond","second","minute","hour","day","month","year"],n=function(e){var n=a.indexOf(t);return a.indexOf(e)<=n};return new Date(e.getFullYear(),n("year")?0:e.getMonth(),n("month")?1:e.getDate(),n("day")?0:e.getHours(),n("hour")?0:e.getMinutes(),n("minute")?0:e.getSeconds(),n("second")?0:e.getMilliseconds())},b=function(e,t){var a,r=e[0].start,o=e[0].start,i=Object(h.a)(e);try{for(i.s();!(a=i.n()).done;){var s=a.value;s.start<r&&(r=s.start),s.end>o&&(o=s.end)}}catch(c){i.e(c)}finally{i.f()}switch(t){case n.Month:r=m(r,-1,"month"),r=f(r,"month"),o=m(o,1,"year"),o=f(o,"year");break;case n.Week:r=f(r,"day"),o=f(o,"day"),r=m(y(r),-7,"day"),o=m(o,1.5,"month");break;default:r=f(r,"day"),o=f(o,"day"),r=m(r,-1,"day"),o=m(o,19,"day")}return[r,o]},v=function(e,t,a){for(var r=new Date(e),o=[r];r<t;){switch(a){case n.Month:r=m(r,1,"month");break;case n.Week:r=m(r,7,"day");break;case n.Day:r=m(r,1,"day");break;case n.HalfDay:r=m(r,12,"hour");break;case n.QuarterDay:r=m(r,6,"hour")}o.push(r)}return o},p=function(e,t){var a=new Intl.DateTimeFormat(t,{month:"long"}).format(e);return a=a.replace(a[0],a[0].toLocaleUpperCase())},y=function(e){var t=e.getDay(),a=e.getDate()-t+(0===t?-6:1);return new Date(e.setDate(a))},x=function(e){var t=new Date(e.valueOf()),a=(t.getDay()+6)%7;t.setDate(t.getDate()-a+3);var n=t.valueOf();t.setMonth(0,1),4!==t.getDay()&&t.setMonth(0,1+(4-t.getDay()+7)%7);var r=(1+Math.ceil((n-t.valueOf())/6048e5)).toString();return 1===r.length?"0".concat(r):r},k="_task-list-header-module__ganttTable__3_ygE",j="_task-list-header-module__ganttTable_Header__1nBOt",w="_task-list-header-module__ganttTable_HeaderSeparator__2eZzQ",T="_task-list-header-module__ganttTable_HeaderItem__WuQ0f",_=function(e){var t=e.headerHeight,a=e.fontFamily,n=e.fontSize,r=e.rowWidth;return o.a.createElement("div",{className:k,style:{fontFamily:a,fontSize:n}},o.a.createElement("div",{className:j,style:{height:t-2}},o.a.createElement("div",{className:T,style:{minWidth:r}},"\xa0Name"),o.a.createElement("div",{className:w,style:{height:.5*t,marginTop:.2*t}}),o.a.createElement("div",{className:T,style:{minWidth:r}},"\xa0From"),o.a.createElement("div",{className:w,style:{height:.5*t,marginTop:.25*t}}),o.a.createElement("div",{className:T,style:{minWidth:r}},"\xa0To")))},O="_task-list-table-module__taskListWrapper__3ZbQT",E="_task-list-table-module__taskListTableRow__34SS0",S="_task-list-table-module__taskListCell__3lLk3",C=function(e){var t=e.rowHeight,a=e.rowWidth,n=e.tasks,r=e.fontFamily,i=e.fontSize,s=e.locale,c={weekday:"short",year:"numeric",month:"long",day:"numeric"};return o.a.createElement("div",{className:O,style:{fontFamily:r,fontSize:i}},n.map((function(e){return o.a.createElement("div",{className:E,style:{height:t},key:"".concat(e.id,"row")},o.a.createElement("div",{className:S,style:{minWidth:a,maxWidth:a},title:e.name},"\xa0",e.name),o.a.createElement("div",{className:S,style:{minWidth:a,maxWidth:a}},"\xa0",e.start.toLocaleDateString(s,c)),o.a.createElement("div",{className:S,style:{minWidth:a,maxWidth:a}},"\xa0",e.end.toLocaleDateString(s,c)))})))},D="_tooltip-module__tooltipDefaultContainer__3T42e",M="_tooltip-module__tooltipDefaultContainerParagraph__29NTg",N="_tooltip-module__tooltipDetailsContainer__25P-K",W=function(e){var t=e.task,a=e.rowHeight,n=e.svgHeight,i=e.displayXStartEndpoint,s=e.arrowIndent,c=e.fontSize,l=e.fontFamily,d=e.TooltipContent,u=Object(r.useRef)(null),h=Object(r.useState)(1e3),m=Object(g.a)(h,2),f=m[0],b=m[1],v=Object(r.useState)(1e3),p=Object(g.a)(v,2),y=p[0],x=p[1],k=Object(r.useState)(t.index*a),j=Object(g.a)(k,2),w=j[0],T=j[1],_=Object(r.useState)(i.end),O=Object(g.a)(_,2),E=O[0],S=O[1];return Object(r.useEffect)((function(){if(u.current){var e=1.1*u.current.offsetHeight,r=t.index*a,o=1.1*u.current.scrollWidth,c=t.x2+s+.5*s;o+c>i.end&&(c=t.x1-s-.5*s-o);var l=e+r;c<i.start&&l>n?(r-=e,(c=.5*(t.x1+t.x2-o))+o>i.end&&(c=i.end-o),(c+o>i.end||c-o<i.start)&&(c=i.end-o)):c<i.start&&l<n?(r+=a,((c=.5*(t.x1+t.x2-o))+o>i.end||c-o<i.start)&&(c=i.end-o)):l>n&&(r=n-e),T(r),b(o),S(c),1e3!==e&&x(e)}}),[u,t,s,i]),o.a.createElement("foreignObject",{x:E,y:w,width:f,height:y},o.a.createElement("div",{ref:u,className:N},o.a.createElement(d,{task:t,fontSize:c,fontFamily:l})))},F=function(e){var t=e.task,a=e.fontSize,n={fontSize:a,fontFamily:e.fontFamily};return o.a.createElement("div",{className:D,style:n},o.a.createElement("b",{style:{fontSize:a+6}},"".concat(t.name,": ").concat(t.start.getDate(),"-").concat(t.start.getMonth()+1,"-").concat(t.start.getFullYear()," - ").concat(t.end.getDate(),"-").concat(t.end.getMonth()+1,"-").concat(t.end.getFullYear())),t.end.getTime()-t.start.getTime()!==0&&o.a.createElement("p",{className:M},"Duration: ".concat(~~((t.end.getTime()-t.start.getTime())/864e5)," day(s)")),o.a.createElement("p",{className:M},!!t.progress&&"Progress: ".concat(t.progress," %")))},H="_scroll-module__scroll__3f9LK",L=function(e){var t=e.scroll,a=e.ganttHeight,n=e.ganttFullHeight,i=e.headerHeight,s=e.onScroll,c=Object(r.useRef)(null);return Object(r.useEffect)((function(){c.current&&(c.current.scrollTop=t)}),[t]),o.a.createElement("div",{style:{height:a,marginTop:i},className:H,onScroll:s,ref:c},o.a.createElement("div",{style:{height:n,width:1}}))},R=function(e){var t=e.headerHeight,a=e.fontFamily,n=e.fontSize,i=e.rowWidth,s=e.rowHeight,c=e.scrollY,l=e.tasks,d=e.selectedTask,u=e.setSelectedTask,g=e.locale,h=e.ganttHeight,m=e.horizontalContainerClass,f=e.TaskListHeader,b=e.TaskListTable,v=Object(r.useRef)(null);Object(r.useEffect)((function(){v.current&&(v.current.scrollTop=c)}),[c]);var p={headerHeight:t,fontFamily:a,fontSize:n,rowWidth:i},y={rowHeight:s,rowWidth:i,fontFamily:a,fontSize:n,tasks:l,locale:g,selectedTaskId:d?d.id:"",setSelectedTask:u};return o.a.createElement("div",null,o.a.createElement(f,Object.assign({},p)),o.a.createElement("div",{ref:v,className:m,style:h?{height:h}:{}},o.a.createElement(b,Object.assign({},y))))},z="_grid-module__gridRow__2dZTy",P="_grid-module__gridRowLine__3rUKi",Y="_grid-module__gridTick__RuwuK",I=function(e){var t,a=e.tasks,n=e.dates,r=e.rowHeight,i=e.svgWidth,s=e.columnWidth,c=e.todayColor,l=0,d=[],u=[o.a.createElement("line",{key:"RowLineFirst",x:"0",y1:0,x2:i,y2:0,className:P})],g=Object(h.a)(a);try{for(g.s();!(t=g.n()).done;){var f=t.value;d.push(o.a.createElement("rect",{key:"Row"+f.id,x:"0",y:l,width:i,height:r,className:z})),u.push(o.a.createElement("line",{key:"RowLine"+f.id,x:"0",y1:l+r,x2:i,y2:l+r,className:P})),l+=r}}catch(j){g.e(j)}finally{g.f()}for(var b=new Date,v=0,p=[],y=o.a.createElement("rect",null),x=0;x<n.length;x++){var k=n[x];p.push(o.a.createElement("line",{key:k.getTime(),x1:v,y1:0,x2:v,y2:l,className:Y})),(x+1!==n.length&&k.getTime()<b.getTime()&&n[x+1].getTime()>=b.getTime()||0!==x&&x+1===n.length&&k.getTime()<b.getTime()&&m(k,k.getTime()-n[x-1].getTime(),"millisecond").getTime()>=b.getTime())&&(y=o.a.createElement("rect",{x:v,y:0,width:s,height:l,fill:c})),v+=s}return o.a.createElement("g",{className:"gridBody"},o.a.createElement("g",{className:"rows"},d),o.a.createElement("g",{className:"rowLines"},u),o.a.createElement("g",{className:"ticks"},p),o.a.createElement("g",{className:"today"},y))},B=function(e){return o.a.createElement("g",{className:"grid"},o.a.createElement(I,Object.assign({},e)))},X="_calendar-module__calendarBottomText__9w8d5",K="_calendar-module__calendarTopTick__1rLuZ",Q="_calendar-module__calendarTopText__2q1Kt",V="_calendar-module__calendarHeader__35nLX",G=function(e){var t=e.value,a=e.x1Line,n=e.y1Line,r=e.y2Line,i=e.xText,s=e.yText;return o.a.createElement("g",{className:"calendarTop"},o.a.createElement("line",{x1:a,y1:n,x2:a,y2:r,className:K,key:t+"line"}),o.a.createElement("text",{key:t+"text",y:s,x:i,className:Q},t))},A=function(e){var t=e.dateSetup,a=e.locale,r=e.viewMode,i=e.headerHeight,s=e.columnWidth,c=e.fontFamily,l=e.fontSize,d=[],u=[];switch(t.viewMode){case n.Month:var h=function(){for(var e=[],n=[],r=6*s,c=.5*i,l=0;l<t.dates.length;l++){var d=t.dates[l],u=p(d,a);if(n.push(o.a.createElement("text",{key:u+d.getFullYear(),y:.8*i,x:s*l+.5*s,className:X},u)),0===l||d.getFullYear()!==t.dates[l-1].getFullYear()){var g=d.getFullYear().toString();e.push(o.a.createElement(G,{key:g,value:g,x1Line:s*l,y1Line:0,y2Line:c,xText:r+s*l-d.getMonth()*s,yText:.9*c}))}}return[e,n]}(),m=Object(g.a)(h,2);d=m[0],u=m[1];break;case n.Week:var f=function(){for(var e=[],n=[],r=1,c=.5*i,l=t.dates,d=l.length-1;d>=0;d--){var u=l[d],g="";0!==d&&u.getMonth()===l[d-1].getMonth()||(g="".concat(p(u,a),", ").concat(u.getFullYear()));var h="W".concat(x(u));n.push(o.a.createElement("text",{key:u.getTime(),y:.8*i,x:s*d,className:X},h)),g&&(d!==l.length-1&&e.push(o.a.createElement(G,{key:g,value:g,x1Line:s*d+r*s,y1Line:0,y2Line:c,xText:s*d+s*r*.5,yText:.9*c})),r=0),r++}return[e,n]}(),b=Object(g.a)(f,2);d=b[0],u=b[1];break;case n.Day:var v=function(){for(var e=[],n=[],r=.5*i,c=t.dates,l=0;l<c.length;l++){var d=c[l],u=d.getDate().toString();if(n.push(o.a.createElement("text",{key:d.getTime(),y:.8*i,x:s*l+.5*s,className:X},u)),l+1!==c.length&&d.getMonth()!==c[l+1].getMonth()){var g=p(d,a);e.push(o.a.createElement(G,{key:g+d.getFullYear(),value:g,x1Line:s*(l+1),y1Line:0,y2Line:r,xText:s*(l+1)-d.getDate()*s*.5,yText:.9*r}))}}return[e,n]}(),y=Object(g.a)(v,2);d=y[0],u=y[1];break;default:var k=function(){for(var e=[],l=[],d=r===n.HalfDay?2:4,u=.5*i,g=t.dates,h=0;h<g.length;h++){var m=g[h],f=Intl.DateTimeFormat(a,{hour:"numeric"}).format(m);if(l.push(o.a.createElement("text",{key:m.getTime(),y:.8*i,x:s*h,className:X,fontFamily:c},f)),0===h||m.getDate()!==g[h-1].getDate()){var b="".concat(m.getDate()," ").concat(p(m,a));e.push(o.a.createElement(G,{key:b+m.getFullYear(),value:b,x1Line:s*h+d*s,y1Line:0,y2Line:u,xText:s*h+d*s*.5,yText:.9*u}))}}return[e,l]}(),j=Object(g.a)(k,2);d=j[0],u=j[1]}return o.a.createElement("g",{className:"calendar",fontSize:l,fontFamily:c},o.a.createElement("rect",{x:0,y:0,width:s*t.dates.length,height:i,className:V}),u," ",d)},U=function(e){var t=e.taskFrom,a=e.taskTo,n=e.rowHeight,r=e.taskHeight,i=e.arrowIndent,s=t.index>a.index?-1:1,c=a.y+r/2,l="M ".concat(t.x2," ").concat(t.y+r/2," \n  h ").concat(i," \n  v ").concat(s*n/2," \n  H ").concat(a.x1-i," \n  V ").concat(c," \n  h ").concat(i),d="".concat(a.x1,",").concat(c," \n  ").concat(a.x1-5,",").concat(c-5," \n  ").concat(a.x1-5,",").concat(c+5);return o.a.createElement("g",{className:"arrow"},o.a.createElement("path",{strokeWidth:"1.5",d:l,fill:"none"}),o.a.createElement("polygon",{points:d}))},Z=function(e,t,a,n,r,o,i,s,c,l,d,u,g,h,m,f,b,v,p){var y;switch(e.type){case"milestone":y=q(e,t,a,n,r,o,i,s,c,v,p);break;case"project":y=J(e,t,a,n,r,o,i,s,c,h,m,f,b);break;default:y=J(e,t,a,n,r,o,i,s,c,l,d,u,g)}return y},J=function(e,t,a,n,r,o,i,s,c,l,d,g,h){var m=$(e.start,a,n,r),f=$(e.end,a,n,r),b=ee(t,o,i),v=Object(u.a)({backgroundColor:g,backgroundSelectedColor:h,progressColor:l,progressSelectedColor:d},e.styles),p=e.type;return"task"===p&&f-m<2*c&&(p="smalltask",f=m+2*c),Object(u.a)(Object(u.a)({},e),{},{typeInternal:p,x1:m,x2:f,y:b,index:t,barCornerRadius:s,handleWidth:c,height:i,barChildren:[],styles:v})},q=function(e,t,a,n,r,o,i,s,c,l,d){var g=$(e.start,a,n,r),h=ee(t,o,i),m=g-.5*i,f=g+.5*i,b=i/1.414,v=Object(u.a)({backgroundColor:l,backgroundSelectedColor:d,progressColor:"",progressSelectedColor:""},e.styles);return Object(u.a)(Object(u.a)({},e),{},{end:e.start,x1:m,x2:f,y:h,index:t,barCornerRadius:s,handleWidth:c,typeInternal:e.type,progress:0,height:b,barChildren:[],styles:v})},$=function(e,t,a,n){var r=~~((e.getTime()-t[0].getTime()+e.getTimezoneOffset()-t[0].getTimezoneOffset())/a);return Math.round((r+(e.getTime()-t[r].getTime()-60*e.getTimezoneOffset()*1e3+60*t[r].getTimezoneOffset()*1e3)/a)*n)},ee=function(e,t,a){return e*t+(t-a)/2},te=function(e,t,a){return(t-e)*a*.01},ae=function(e,t,a){return[e-5,t+a,e+5,t+a,e,t+a-8.66].join(",")},ne=function(e,t,a){var n=Math.round((e-a.x1)/t)*t,r=a.x1+n;return[r,r+a.x2-a.x1]},re=function(e,t,a,n,r){var o=new Date((e-t)/n*r+a.getTime());return o=new Date(o.getTime()+6e4*(o.getTimezoneOffset()-a.getTimezoneOffset()))},oe=function(e,t,a,n,r,o){var i;switch(a.type){case"milestone":i=se(e,t,a,n,r,o);break;default:i=ie(e,t,a,n,r,o)}return i},ie=function(e,t,a,n,r,o){var i=Object(u.a)({},a),s=!1;switch(t){case"progress":i.progress=function(e,t){if(e>=t.x2)return 100;if(e<=t.x1)return 0;var a=t.x2-t.x1;return Math.round(100*(e-t.x1)/a)}(e,a),s=i.progress!==a.progress;break;case"start":var c=function(e,t,a){e>=a.x2-2*a.handleWidth&&(e=a.x2-2*a.handleWidth);var n=Math.round((e-a.x1)/t)*t;return a.x1+n}(e,n,a);i.x1=c,(s=i.x1!==a.x1)&&(i.start=re(c,a.x1,a.start,n,r));break;case"end":var l=function(e,t,a){e<=a.x1+2*a.handleWidth&&(e=a.x1+2*a.handleWidth);var n=Math.round((e-a.x2)/t)*t;return a.x2+n}(e,n,a);i.x2=l,(s=i.x2!==a.x2)&&(i.end=re(l,a.x2,a.end,n,r));break;case"move":var d=ne(e-o,n,a),h=Object(g.a)(d,2),m=h[0],f=h[1];(s=m!==a.x1)&&(i.start=re(m,a.x1,a.start,n,r),i.end=re(f,a.x2,a.end,n,r),i.x1=m,i.x2=f)}return{isChanged:s,changedTask:i}},se=function(e,t,a,n,r,o){var i=Object(u.a)({},a),s=!1;switch(t){case"move":var c=ne(e-o,n,a),l=Object(g.a)(c,2),d=l[0],h=l[1];(s=d!==a.x1)&&(i.start=re(d,a.x1,a.start,n,r),i.end=i.start,i.x1=d,i.x2=h)}return{isChanged:s,changedTask:i}};function ce(e){return void 0!==e.key}var le="_bar-module__barWrapper__KxSXS",de="_bar-module__barHandle__3w_5u",ue="_bar-module__barBackground__31ERP",ge=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,i=e.isSelected,s=e.progressWidth,c=e.barCornerRadius,l=e.styles,d=e.onMouseDown;return o.a.createElement("g",{onMouseDown:d},o.a.createElement("rect",{x:t,width:n,y:a,height:r,ry:c,rx:c,fill:i?l.backgroundSelectedColor:l.backgroundColor,className:ue}),o.a.createElement("rect",{x:t,width:s,y:a,height:r,ry:c,rx:c,fill:i?l.progressSelectedColor:l.progressColor}))},he=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,i=e.barCornerRadius,s=e.onMouseDown;return o.a.createElement("rect",{x:t,y:a,width:n,height:r,className:de,ry:i,rx:i,onMouseDown:s})},me=function(e){var t=e.progressPoint,a=e.onMouseDown;return o.a.createElement("polygon",{className:de,points:t,onMouseDown:a})},fe=function(e){var t=e.task,a=e.isProgressChangeable,n=e.isDateChangeable,r=e.onEventStart,i=e.isSelected,s=te(t.x1,t.x2,t.progress),c=ae(s+t.x1,t.y,t.height),l=t.height-2;return o.a.createElement("g",{className:le,tabIndex:0},o.a.createElement(ge,{x:t.x1,y:t.y,width:t.x2-t.x1,height:t.height,progressWidth:s,barCornerRadius:t.barCornerRadius,styles:t.styles,isSelected:i,onMouseDown:function(e){n&&r("move",t,e)}}),o.a.createElement("g",{className:"handleGroup"},n&&o.a.createElement("g",null,o.a.createElement(he,{x:t.x1+1,y:t.y+1,width:t.handleWidth,height:l,barCornerRadius:t.barCornerRadius,onMouseDown:function(e){r("start",t,e)}}),o.a.createElement(he,{x:t.x2-t.handleWidth-1,y:t.y+1,width:t.handleWidth,height:l,barCornerRadius:t.barCornerRadius,onMouseDown:function(e){r("end",t,e)}})),a&&o.a.createElement(me,{progressPoint:c,onMouseDown:function(e){r("progress",t,e)}})))},be=function(e){var t=e.task,a=e.isProgressChangeable,n=e.isDateChangeable,r=e.onEventStart,i=e.isSelected,s=te(t.x1,t.x2,t.progress),c=ae(s+t.x1,t.y,t.height);return o.a.createElement("g",{className:le,tabIndex:0},o.a.createElement(ge,{x:t.x1,y:t.y,width:t.x2-t.x1,height:t.height,progressWidth:s,barCornerRadius:t.barCornerRadius,styles:t.styles,isSelected:i,onMouseDown:function(e){n&&r("move",t,e)}}),o.a.createElement("g",{className:"handleGroup"},a&&o.a.createElement(me,{progressPoint:c,onMouseDown:function(e){r("progress",t,e)}})))},ve="_milestone-module__milestoneWrapper__RRr13",pe="_milestone-module__milestoneBackground__2P2B1",ye=function(e){var t=e.task,a=e.isDateChangeable,n=e.onEventStart,r=e.isSelected,i="rotate(45 ".concat(t.x1+.356*t.height," \n    ").concat(t.y+.85*t.height,")");return o.a.createElement("g",{tabIndex:0,className:ve},o.a.createElement("rect",{fill:r?t.styles.backgroundSelectedColor:t.styles.backgroundColor,x:t.x1,width:t.height,y:t.y,height:t.height,rx:t.barCornerRadius,ry:t.barCornerRadius,transform:i,className:pe,onMouseDown:function(e){a&&n("move",t,e)}}))},xe="_project-module__projectWrapper__1KJ6x",ke="_project-module__projectBackground__2RbVy",je="_project-module__projectTop__2pZMF",we=function(e){var t=e.task,a=e.isSelected,n=a?t.styles.backgroundSelectedColor:t.styles.backgroundColor,r=a?t.styles.progressSelectedColor:t.styles.progressColor,i=te(t.x1,t.x2,t.progress),s=t.x2-t.x1,c=[t.x1,t.y+t.height/2-1,t.x1,t.y+t.height,t.x1+15,t.y+t.height/2-1].join(","),l=[t.x2,t.y+t.height/2-1,t.x2,t.y+t.height,t.x2-15,t.y+t.height/2-1].join(",");return o.a.createElement("g",{tabIndex:0,className:xe},o.a.createElement("rect",{fill:n,x:t.x1,width:s,y:t.y,height:t.height,rx:t.barCornerRadius,ry:t.barCornerRadius,className:ke}),o.a.createElement("rect",{x:t.x1,width:i,y:t.y,height:t.height,ry:t.barCornerRadius,rx:t.barCornerRadius,fill:r}),o.a.createElement("rect",{fill:n,x:t.x1,width:s,y:t.y,height:t.height/2,rx:t.barCornerRadius,ry:t.barCornerRadius,className:je}),o.a.createElement("polygon",{className:je,points:c,fill:n}),o.a.createElement("polygon",{className:je,points:l,fill:n}))},Te="_task-list-module__barLabel__3zRJQ",_e="_task-list-module__barLabelOutside__3KcaM",Oe=function(e){var t=Object(u.a)({},e),a=t.task,n=t.arrowIndent,i=t.isDelete,s=t.taskHeight,c=t.isSelected,l=t.onEventStart,d=Object(r.useRef)(null),h=Object(r.useState)(o.a.createElement("div",null)),m=Object(g.a)(h,2),f=m[0],b=m[1],v=Object(r.useState)(!0),p=Object(g.a)(v,2),y=p[0],x=p[1];Object(r.useEffect)((function(){switch(a.typeInternal){case"milestone":b(o.a.createElement(ye,Object.assign({},e)));break;case"project":b(o.a.createElement(we,Object.assign({},e)));break;case"smalltask":b(o.a.createElement(be,Object.assign({},e)));break;default:b(o.a.createElement(fe,Object.assign({},e)))}}),[a,c]),Object(r.useEffect)((function(){d.current&&x(d.current.getBBox().width<a.x2-a.x1)}),[d,a]);return o.a.createElement("g",{onKeyDown:function(e){switch(e.key){case"Delete":i&&l("delete",a,e)}e.stopPropagation()},onMouseEnter:function(e){l("mouseenter",a,e)},onMouseLeave:function(e){l("mouseleave",a,e)},onDoubleClick:function(e){l("dblclick",a,e)},onFocus:function(){l("select",a)}},f,o.a.createElement("text",{x:function(){var e=a.x2-a.x1,t=a.barChildren.length>0;return y?a.x1+.5*e:a.x1+e+n*+t+.2*n}(),y:a.y+.5*s,className:y?Te:_e,ref:d},a.name))},Ee=function(e){var t,a=e.tasks,n=e.dates,i=e.ganttEvent,s=e.selectedTask,c=e.rowHeight,u=e.columnWidth,h=e.timeStep,m=e.svg,f=e.svgHeight,b=e.displayXStartEndpoint,v=e.taskHeight,p=e.arrowColor,y=e.arrowIndent,x=e.fontFamily,k=e.fontSize,j=e.setGanttEvent,w=e.setFailedTask,T=e.setSelectedTask,_=e.onDateChange,O=e.onProgressChange,E=e.onDoubleClick,S=e.onDelete,C=e.TooltipContent,D=null===m||void 0===m||null===(t=m.current)||void 0===t?void 0:t.createSVGPoint(),M=Object(r.useState)(0),N=Object(g.a)(M,2),F=N[0],H=N[1],L=Object(r.useState)(0),R=Object(g.a)(L,2),z=R[0],P=R[1],Y=Object(r.useState)(!1),I=Object(g.a)(Y,2),B=I[0],X=I[1];Object(r.useEffect)((function(){var e=n[1].getTime()-n[0].getTime()-60*n[1].getTimezoneOffset()*1e3+60*n[0].getTimezoneOffset()*1e3;H(h*u/e)}),[u,n,h]),Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,r,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.changedTask&&D&&null!==m&&void 0!==m&&m.current){e.next=2;break}return e.abrupt("return");case 2:t.preventDefault(),D.x=t.clientX,n=D.matrixTransform(null===m||void 0===m||null===(a=m.current.getScreenCTM())||void 0===a?void 0:a.inverse()),r=oe(n.x,i.action,i.changedTask,F,h,z),o=r.isChanged,s=r.changedTask,o&&j({action:i.action,changedTask:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var a=Object(d.a)(l.a.mark((function a(n){var r,o,s,c,d,u,g,f,b,v,p;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=i.action,s=i.originalSelectedTask,(c=i.changedTask)&&D&&null!==m&&void 0!==m&&m.current&&s){a.next=3;break}return a.abrupt("return");case 3:if(n.preventDefault(),D.x=n.clientX,d=D.matrixTransform(null===m||void 0===m||null===(r=m.current.getScreenCTM())||void 0===r?void 0:r.inverse()),u=oe(d.x,o,c,F,h,z),g=u.changedTask,f=s.start!==g.start||s.end!==g.end||s.progress!==g.progress,m.current.removeEventListener("mousemove",e),m.current.removeEventListener("mouseup",t),j({action:""}),X(!1),b=!0,"move"!==o&&"end"!==o&&"start"!==o||!_||!f){a.next=26;break}return a.prev=14,a.next=17,_(g);case 17:void 0!==(v=a.sent)&&(b=v),a.next=24;break;case 21:a.prev=21,a.t0=a.catch(14),b=!1;case 24:a.next=37;break;case 26:if(!O||!f){a.next=37;break}return a.prev=27,a.next=30,O(g);case 30:void 0!==(p=a.sent)&&(b=p),a.next=37;break;case 34:a.prev=34,a.t1=a.catch(27),b=!1;case 37:b||w(s);case 38:case"end":return a.stop()}}),a,null,[[14,21],[27,34]])})));return function(e){return a.apply(this,arguments)}}();B||"move"!==i.action&&"end"!==i.action&&"start"!==i.action&&"progress"!==i.action||null===m||void 0===m||!m.current||(m.current.addEventListener("mousemove",e),m.current.addEventListener("mouseup",t),X(!0))}),[i,F,z,O,h,_,m,B]);var K=function(){var e=Object(d.a)(l.a.mark((function e(t,a,n){var r,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=4;break}"select"===t&&T(a.id),e.next=41;break;case 4:if(!ce(n)){e.next=19;break}if("delete"!==t){e.next=17;break}if(!S){e.next=17;break}return e.prev=7,e.next=10,S(a);case 10:void 0!==(r=e.sent)&&r&&j({action:t,changedTask:a}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.error("Error on Delete. "+e.t0);case 17:e.next=41;break;case 19:if("mouseenter"!==t){e.next=23;break}i.action||j({action:t,changedTask:a,originalSelectedTask:a}),e.next=41;break;case 23:if("mouseleave"!==t){e.next=27;break}"mouseenter"===i.action&&j({action:""}),e.next=41;break;case 27:if("dblclick"!==t){e.next=31;break}E&&E(a),e.next=41;break;case 31:if("move"!==t){e.next=40;break}if(null!==m&&void 0!==m&&m.current&&D){e.next=34;break}return e.abrupt("return");case 34:D.x=n.clientX,s=D.matrixTransform(null===(o=m.current.getScreenCTM())||void 0===o?void 0:o.inverse()),P(s.x-a.x1),j({action:t,changedTask:a,originalSelectedTask:a}),e.next=41;break;case 40:j({action:t,changedTask:a,originalSelectedTask:a});case 41:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,a,n){return e.apply(this,arguments)}}();return o.a.createElement("g",{className:"content"},o.a.createElement("g",{className:"arrows",fill:p,stroke:p},a.map((function(e){return e.barChildren.map((function(t){return o.a.createElement(U,{key:"Arrow from ".concat(e.id," to ").concat(a[t].id),taskFrom:e,taskTo:a[t],rowHeight:c,taskHeight:v,arrowIndent:y})}))}))),o.a.createElement("g",{className:"bar",fontFamily:x,fontSize:k},a.map((function(e){return o.a.createElement(Oe,{task:e,arrowIndent:y,taskHeight:v,isProgressChangeable:!!O&&!e.isDisabled,isDateChangeable:!!_&&!e.isDisabled,isDelete:!e.isDisabled,onEventStart:K,key:e.id,isSelected:!!s&&e.id===s.id})}))),o.a.createElement("g",{className:"toolTip"},i.changedTask&&b&&o.a.createElement(W,{arrowIndent:y,rowHeight:c,svgHeight:f,displayXStartEndpoint:b,task:i.changedTask,fontFamily:x,fontSize:k,TooltipContent:C})))},Se="_gantt-module__ganttVerticalContainer__CZjuD",Ce="_gantt-module__horizontalContainer__2B2zv",De="_gantt-module__wrapper__3eULf",Me=function(e){var t,a=e.gridProps,n=e.calendarProps,i=e.barProps,s=e.ganttHeight,c=e.scrollY,l=e.scrollX,d=e.onScroll,h=Object(r.useRef)(null),m=Object(r.useRef)(null),f=Object(r.useRef)(null),b=Object(r.useState)({start:0,end:0}),v=Object(g.a)(b,2),p=v[0],y=v[1],x=Object(u.a)(Object(u.a)({},i),{},{svg:h,displayXStartEndpoint:p});return Object(r.useEffect)((function(){m.current&&(m.current.scrollTop=c)}),[c]),Object(r.useEffect)((function(){f.current&&(f.current.scrollLeft=l,y({start:l,end:f.current.clientWidth+l}))}),[l,null===(t=f.current)||void 0===t?void 0:t.clientWidth]),o.a.createElement("div",{className:Se,ref:f,onScroll:d},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a.svgWidth,height:n.headerHeight,fontFamily:i.fontFamily},o.a.createElement(A,Object.assign({},n))),o.a.createElement("div",{ref:m,className:Ce,style:s?{height:s,width:a.svgWidth}:{width:a.svgWidth}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a.svgWidth,height:i.rowHeight*i.tasks.length,fontFamily:i.fontFamily,ref:h},o.a.createElement(B,Object.assign({},a)),o.a.createElement(Ee,Object.assign({},x)))))},Ne=function(e){var t=e.tasks,a=e.headerHeight,i=void 0===a?50:a,s=e.columnWidth,c=void 0===s?60:s,l=e.listCellWidth,d=void 0===l?"155px":l,u=e.rowHeight,h=void 0===u?50:u,m=e.ganttHeight,f=void 0===m?0:m,p=e.viewMode,y=void 0===p?n.Day:p,x=e.locale,k=void 0===x?"en-GB":x,j=e.barFill,w=void 0===j?60:j,T=e.barCornerRadius,O=void 0===T?3:T,E=e.barProgressColor,S=void 0===E?"#a3a3ff":E,D=e.barProgressSelectedColor,M=void 0===D?"#8282f5":D,N=e.barBackgroundColor,W=void 0===N?"#b8c2cc":N,H=e.barBackgroundSelectedColor,z=void 0===H?"#aeb8c2":H,P=e.projectProgressColor,Y=void 0===P?"#7db59a":P,I=e.projectProgressSelectedColor,B=void 0===I?"#59a985":I,X=e.projectBackgroundColor,K=void 0===X?"#fac465":X,Q=e.projectBackgroundSelectedColor,V=void 0===Q?"#f7bb53":Q,G=e.milestoneBackgroundColor,A=void 0===G?"#f1c453":G,U=e.milestoneBackgroundSelectedColor,J=void 0===U?"#f29e4c":U,q=e.handleWidth,$=void 0===q?8:q,ee=e.timeStep,te=void 0===ee?3e5:ee,ae=e.arrowColor,ne=void 0===ae?"grey":ae,re=e.fontFamily,oe=void 0===re?"Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue":re,ie=e.fontSize,se=void 0===ie?"14px":ie,ce=e.arrowIndent,le=void 0===ce?20:ce,de=e.todayColor,ue=void 0===de?"rgba(252, 248, 227, 0.5)":de,ge=e.TooltipContent,he=void 0===ge?F:ge,me=e.TaskListHeader,fe=void 0===me?_:me,be=e.TaskListTable,ve=void 0===be?C:be,pe=e.onDateChange,ye=e.onProgressChange,xe=e.onDoubleClick,ke=e.onDelete,je=e.onSelect,we=Object(r.useRef)(null),Te=Object(r.useState)((function(){var e=b(t,y),a=Object(g.a)(e,2),n=a[0],r=a[1];return{viewMode:y,dates:v(n,r,y)}})),_e=Object(g.a)(Te,2),Oe=_e[0],Ee=_e[1],Se=Object(r.useState)(h*w/100),Ne=Object(g.a)(Se,2),We=Ne[0],Fe=Ne[1],He=Object(r.useState)([]),Le=Object(g.a)(He,2),Re=Le[0],ze=Le[1],Pe=Object(r.useState)({action:""}),Ye=Object(g.a)(Pe,2),Ie=Ye[0],Be=Ye[1],Xe=Object(r.useState)(),Ke=Object(g.a)(Xe,2),Qe=Ke[0],Ve=Ke[1],Ge=Object(r.useState)(null),Ae=Object(g.a)(Ge,2),Ue=Ae[0],Ze=Ae[1],Je=Object(r.useState)(0),qe=Object(g.a)(Je,2),$e=qe[0],et=qe[1],tt=Object(r.useState)(0),at=Object(g.a)(tt,2),nt=at[0],rt=at[1],ot=Object(r.useState)(!1),it=Object(g.a)(ot,2),st=it[0],ct=it[1],lt=h*Re.length,dt=Oe.dates.length*c,ut=Re.length*h;Object(r.useEffect)((function(){var e=b(t,y),a=Object(g.a)(e,2),n=a[0],r=a[1],o=v(n,r,y);Ee({dates:o,viewMode:y}),ze(function(e,t,a,n,r,o,i,s,c,l,d,u,g,h,m,f,b){var v=t[1].getTime()-t[0].getTime()-60*t[1].getTimezoneOffset()*1e3+60*t[0].getTimezoneOffset()*1e3,p=e.map((function(e,p){return Z(e,p,t,v,a,n,r,o,i,s,c,l,d,u,g,h,m,f,b)}));return p=p.map((function(e,t){for(var a=e.dependencies||[],n=function(e){var n=p.findIndex((function(t){return t.id===a[e]}));-1!==n&&p[n].barChildren.push(t)},r=0;r<a.length;r++)n(r);return e}))}(t,o,c,h,We,O,$,S,M,W,z,Y,B,K,V,A,J))}),[t,y,h,O,c,We,$,S,M,W,z,Y,B,K,V,A,J]),Object(r.useEffect)((function(){var e=Ie.changedTask,t=Ie.action;if(e)if("delete"===t)Be({action:""}),ze(Re.filter((function(t){return t.id!==e.id})));else if("move"===t||"end"===t||"start"===t||"progress"===t){var a=Re.find((function(t){return t.id===e.id}));if(a&&(a.start.getTime()!==e.start.getTime()||a.end.getTime()!==e.end.getTime()||a.progress!==e.progress)){var n=Re.map((function(t){return t.id===e.id?e:t}));ze(n)}}}),[Ie,Re]),Object(r.useEffect)((function(){Ue&&(ze(Re.map((function(e){return e.id!==Ue.id?e:Ue}))),Ze(null))}),[Ue,Re]),Object(r.useEffect)((function(){var e=h*w/100;e!==We&&Fe(e)}),[h,w,We]),Object(r.useEffect)((function(){var e=function(e){e.preventDefault();var t=$e+e.deltaY;et(t<0?0:t>ut-f?ut-f:t),ct(!0)};return we.current&&f&&f<Re.length*h&&we.current.addEventListener("wheel",e,{passive:!1}),function(){we.current&&we.current.removeEventListener("wheel",e)}}),[we.current,$e,f,Re,h]);var gt=function(e){var t=Re.find((function(t){return t.id===e})),a=Re.find((function(e){return!!Qe&&e.id===Qe.id}));je&&(a&&je(a,!1),t&&je(t,!0)),Ve(t)},ht={columnWidth:c,svgWidth:dt,tasks:t,rowHeight:h,dates:Oe.dates,todayColor:ue},mt={dateSetup:Oe,locale:k,viewMode:y,headerHeight:i,columnWidth:c,fontFamily:oe,fontSize:se},ft={tasks:Re,dates:Oe.dates,ganttEvent:Ie,selectedTask:Qe,rowHeight:h,taskHeight:We,columnWidth:c,arrowColor:ne,timeStep:te,fontFamily:oe,fontSize:se,arrowIndent:le,svgHeight:lt,svgWidth:dt,setGanttEvent:Be,setFailedTask:Ze,setSelectedTask:gt,onDateChange:pe,onProgressChange:ye,onDoubleClick:xe,onDelete:ke,TooltipContent:he},bt={rowHeight:h,rowWidth:d,fontFamily:oe,fontSize:se,tasks:Re,locale:k,headerHeight:i,scrollY:$e,ganttHeight:f,horizontalContainerClass:Ce,selectedTask:Qe,setSelectedTask:gt,TaskListHeader:fe,TaskListTable:ve};return o.a.createElement("div",{className:De,onKeyDown:function(e){e.preventDefault();var t=$e,a=nt,n=!0;switch(e.key){case"Down":case"ArrowDown":t+=h,n=!1;break;case"Up":case"ArrowUp":t-=h,n=!1;break;case"Left":case"ArrowLeft":a-=c;break;case"Right":case"ArrowRight":a+=c}n?(a<0?a=0:a>dt&&(a=dt),rt(a)):(t<0?t=0:t>ut-f&&(t=ut-f),et(t)),ct(!0)},tabIndex:0,ref:we},d&&o.a.createElement(R,Object.assign({},bt)),o.a.createElement(Me,{gridProps:ht,calendarProps:mt,barProps:ft,ganttHeight:f,scrollY:$e,scrollX:nt,onScroll:function(e){nt===e.currentTarget.scrollLeft||st||rt(e.currentTarget.scrollLeft),ct(!1)}}),o.a.createElement(L,{ganttFullHeight:ut,ganttHeight:f,headerHeight:i,scroll:$e,onScroll:function(e){$e===e.currentTarget.scrollTop||st||et(e.currentTarget.scrollTop),ct(!1)}}))},We=(a(8),a(2)),Fe=function(e){var t=e.onViewModeChange,a=e.onViewListChange,r=e.isChecked;return Object(We.jsxs)("div",{className:"ViewContainer",children:[Object(We.jsx)("button",{className:"Button",onClick:function(){return t(n.QuarterDay)},children:"Quarter of Day"}),Object(We.jsx)("button",{className:"Button",onClick:function(){return t(n.HalfDay)},children:"Half of Day"}),Object(We.jsx)("button",{className:"Button",onClick:function(){return t(n.Day)},children:"Day"}),Object(We.jsx)("button",{className:"Button",onClick:function(){return t(n.Week)},children:"Week"}),Object(We.jsx)("button",{className:"Button",onClick:function(){return t(n.Month)},children:"Month"}),Object(We.jsxs)("div",{className:"Switch",children:[Object(We.jsxs)("label",{className:"Switch_Toggle",children:[Object(We.jsx)("input",{type:"checkbox",defaultChecked:r,onClick:function(){return a(!r)}}),Object(We.jsx)("span",{className:"Slider"})]}),"Show Task List"]})]})};var He=function(){var e=o.a.useState(n.Day),t=Object(g.a)(e,2),a=t[0],r=t[1],i=o.a.useState(function(){var e=new Date;return[{start:new Date(e.getFullYear(),e.getMonth(),1),end:new Date(e.getFullYear(),e.getMonth(),15),name:"Some Project",id:"ProjectSample",progress:25,type:"project"},{start:new Date(e.getFullYear(),e.getMonth(),1),end:new Date(e.getFullYear(),e.getMonth(),2,12,28),name:"Idea",id:"Task 0",progress:45,type:"task",project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),2),end:new Date(e.getFullYear(),e.getMonth(),4,0,0),name:"Research",id:"Task 1",progress:25,dependencies:["Task 0"],type:"task",project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),4),end:new Date(e.getFullYear(),e.getMonth(),8,0,0),name:"Discussion with team",id:"Task 2",progress:10,dependencies:["Task 1"],type:"task",project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),9,0,0),name:"Developing",id:"Task 3",progress:2,dependencies:["Task 2"],type:"task",project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),10),name:"Review",id:"Task 4",type:"task",progress:70,dependencies:["Task 2"],project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),15),end:new Date(e.getFullYear(),e.getMonth(),15),name:"Release",id:"Task 6",progress:e.getMonth(),type:"milestone",dependencies:["Task 4"],project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),18),end:new Date(e.getFullYear(),e.getMonth(),19),name:"Party Time",id:"Task 9",progress:0,isDisabled:!0,type:"task"}]}()),s=Object(g.a)(i,2),c=s[0],h=s[1],m=o.a.useState(!0),f=Object(g.a)(m,2),b=f[0],v=f[1],p=60;a===n.Month?p=300:a===n.Week&&(p=250);var y=function(e){console.log("On date change Id:"+e.id);var t=c.map((function(t){return t.id===e.id?e:t}));if(e.project){var a=function(e,t){for(var a=e.filter((function(e){return e.project===t})),n=a[0].start,r=a[0].end,o=0;o<a.length;o++){var i=a[o];n.getTime()>i.start.getTime()&&(n=i.start),r.getTime()<i.end.getTime()&&(r=i.end)}return[n,r]}(t,e.project),n=Object(g.a)(a,2),r=n[0],o=n[1],i=t[t.findIndex((function(t){return t.id===e.project}))];if(i.start.getTime()!==r.getTime()||i.end.getTime()!==o.getTime()){var s=Object(u.a)(Object(u.a)({},i),{},{start:r,end:o});t=t.map((function(t){return t.id===e.project?s:t}))}}h(t)},x=function(e){var t=window.confirm("Are you sure about "+e.name+" ?");return t&&h(c.filter((function(t){return t.id!==e.id}))),t},k=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(c.map((function(e){return e.id===t.id?t:e}))),console.log("On progress change Id:"+t.id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){alert("On Double Click event Id:"+e.id)},w=function(e,t){console.log(e.name+" has "+(t?"selected":"unselected"))};return Object(We.jsxs)("div",{children:[Object(We.jsx)(Fe,{onViewModeChange:function(e){return r(e)},onViewListChange:v,isChecked:b}),Object(We.jsx)("h3",{children:"Gantt With Unlimited Height"}),Object(We.jsx)(Ne,{tasks:c,viewMode:a,onDateChange:y,onDelete:x,onProgressChange:k,onDoubleClick:j,onSelect:w,listCellWidth:b?"155px":"",columnWidth:p}),Object(We.jsx)("h3",{style:{color:"#e56b6f"},children:"Milestones and projects are not available"}),Object(We.jsx)("h3",{children:"Gantt With Limited Height"}),Object(We.jsx)(Ne,{tasks:c,viewMode:a,onDateChange:y,onDelete:x,onProgressChange:k,onDoubleClick:j,onSelect:w,listCellWidth:b?"155px":"",ganttHeight:300,columnWidth:p})]})};s.a.render(Object(We.jsx)(He,{}),document.getElementById("root"))},8:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.6de59ad8.chunk.js.map