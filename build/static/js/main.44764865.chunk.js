(this["webpackJsonpKoders-app"]=this["webpackJsonpKoders-app"]||[]).push([[0],{16:function(e,t,i){},20:function(e,t,i){},22:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i.n(a),s=i(6),r=i.n(s),o=(i(16),function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,23)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),a(e),n(e),s(e),r(e)}))}),l=(i(17),i(18),i(5)),c=i.n(l),h=i(7),u=i(8),m=i(9),d=i(1),f=i(11),p=i(10),b=i(3),v=i.n(b),j=(i(20),i.p+"static/media/alarm.eaffe612.mp3"),y=i(0),g=function(){return Object(y.jsxs)("footer",{className:"credits",children:["Made with ",Object(y.jsx)("i",{style:{color:"red"},className:"fa fa-heart"})," by Koders"]})},T=i.p+"static/media/koders.532f8da8.png",k=window.require("electron").ipcRenderer,O=function(e){Object(f.a)(i,e);var t=Object(p.a)(i);function i(){var e;return Object(u.a)(this,i),(e=t.call(this)).countMinutes=function(e,t){var i=t.split(":"),a=e-(60*parseInt(i[0])+parseInt(i[1]));if(a<60)return a<10?"00:0"+a:"00:"+a;var n=parseInt(a/60);return n+":"+(a-60*n)},e.handleChange=function(t){e.setTimeForCode(),e.setState({work:t.target.value})},e.handleChangeInput=function(t){e.setState({value:t.target.value})},e.state={time:0,play:!1,timeType:0,title:"",work:"",value:""},e.setTimeForCode=e.setTime.bind(Object(d.a)(e),1500),e.setTimeForSocial=e.setTime.bind(Object(d.a)(e),1200),e.setTimeForCoffee=e.setTime.bind(Object(d.a)(e),300),e.reset=e.reset.bind(Object(d.a)(e)),e.play=e.play.bind(Object(d.a)(e)),e.alert=e.alert.bind(Object(d.a)(e)),e.elapseTime=e.elapseTime.bind(Object(d.a)(e)),e}return Object(m.a)(i,[{key:"componentDidMount",value:function(){this.setDefaultTime(),this.startShortcuts(),Notification.requestPermission()}},{key:"getTitle",value:function(e){return e="undefined"===typeof e?this.state.time:e,this.format(e)+" | Pomodoro timer"}},{key:"setDefaultTime",value:function(){var e=1500;this.setState({time:e,timeType:e,title:this.getTitle(e),play:!1})}},{key:"elapseTime",value:function(){if(0===this.state.time&&(this.reset(0),this.alert()),!0===this.state.play){var e=this.state.time-1;this.setState({time:e,title:this.getTitle(e)})}}},{key:"format",value:function(e){var t=Math.floor(e%3600/60),i=Math.floor(e%3600%60);return(t<10?"0":"")+t+":"+(i<10?"0":"")+i}},{key:"getFormatTypes",value:function(){return[{type:this.state.work?"Working On ".concat(this.state.work):"Work",time:1500},{type:"In a Meeting",time:1200},{type:"On a Break",time:300}]}},{key:"formatType",value:function(e){for(var t=this.getFormatTypes(),i=0;i<t.length;i++){var a=t[i];if(a.time===e)return a.type}return null}},{key:"restartInterval",value:function(){clearInterval(this.interval),this.interval=setInterval(this.elapseTime,1e3)}},{key:"play",value:function(){this.state.value?!0!==this.state.play&&(this.restartInterval(),this.setState({play:!0})):alert("Please enter Title")}},{key:"reset",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.time;clearInterval(this.interval),this.format(e),this.setState({play:!1})}},{key:"togglePlay",value:function(){return!0===this.state.play?this.reset():this.play()}},{key:"setTime",value:function(e){this.restartInterval(),this.setState({time:e,timeType:e,title:this.getTitle(e),play:!1,value:""})}},{key:"startShortcuts",value:function(){v.a.bind("space",this.togglePlay.bind(this)),v.a.bind(["ctrl+left","meta+left"],this.toggleMode.bind(this,-1)),v.a.bind(["ctrl+right","meta+right"],this.toggleMode.bind(this,1))}},{key:"toggleMode",value:function(e){for(var t=this.getFormatTypes(),i=-1,a=0;a<t.length;a++)if(t[a].time===this.state.timeType){i=a;break}if(-1!==i){var n=t[i+e];n&&this.setTime(n.time)}}},{key:"_setLocalStorage",value:function(e,t){var i=t.target.checked;localStorage.setItem("react-pomodoro-"+e,i)}},{key:"_getLocalStorage",value:function(e){return"true"===localStorage.getItem("react-pomodoro-"+e)}},{key:"alert",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(Object(h.a)(c.a.mark((function e(){var t,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.value){e.next=3;break}return alert("Please Enter Title"),e.abrupt("return");case 3:(t=new Audio(j)).play(),setTimeout((function(){return t.pause()}),1400),i={content:this.state.value,title:this.formatType(this.state.timeType)},1500===this.state.timeType?(new Notification("The time is over!",{icon:T,lang:"en",body:"Hey, Let's get back to Work."}),i.timer=this.countMinutes(1500,this.format(this.state.time)),this.setTimeForCoffee()):1200===this.state.timeType?(new Notification("Relax :)",{icon:T,lang:"en",body:"Meeting timer is over."}),i.timer=this.countMinutes(1200,this.format(this.state.time))):(new Notification("Relax :)",{icon:T,lang:"en",body:"Break timer is over."}),i.timer=this.countMinutes(300,this.format(this.state.time))),k.send("webhook",i),this.setDefaultTime();case 10:case"end":return e.stop()}}),e,this)}))))},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"pomodoro",children:[Object(y.jsxs)("div",{className:"main",children:[Object(y.jsxs)("div",{className:"content display timer",children:[Object(y.jsxs)("span",{className:"time",children:[Object(y.jsx)("h1",{children:"Time Tracker"}),this.format(this.state.time)]}),Object(y.jsxs)("span",{className:"timeType",children:[this.formatType(this.state.timeType),Object(y.jsx)("div",{className:"row d-flex justify-content-center",children:Object(y.jsx)("input",{className:"form-control col-5 col-sm-3 col-md-4  input",placeholder:"Title",value:this.state.value,onChange:this.handleChangeInput})})]})]}),Object(y.jsxs)("div",{className:"content display",children:[Object(y.jsxs)("select",{className:"col-2 form-control form-select sel","aria-label":"Default select example",onChange:this.handleChange,children:[Object(y.jsx)("option",{defaultValue:!0,children:"Work"}),Object(y.jsx)("option",{value:"Development",children:"Development"}),Object(y.jsx)("option",{value:"Designing",children:"Designing"}),Object(y.jsx)("option",{value:"Content Creation",children:"Content Creation"}),Object(y.jsx)("option",{value:"Marketing",children:"Marketing"}),Object(y.jsx)("option",{value:"Planning",children:"Planning"}),Object(y.jsx)("option",{value:"Management",children:"Management"})]}),Object(y.jsx)("button",{className:"btn btn-primary col-2 ml-2",onClick:this.setTimeForSocial,children:"Meetings"}),Object(y.jsx)("button",{className:"btn btn-primary col-2 ml-2",onClick:this.setTimeForCoffee,children:"Break"})]}),Object(y.jsxs)("div",{className:"content",children:[Object(y.jsx)("i",{className:"fa fa-play-circle fa-5x btnIcon","aria-hidden":"true",onClick:this.play}),Object(y.jsx)("i",{className:"fa fa-pause-circle fa-5x btnIcon","aria-hidden":"true",onClick:this.reset}),Object(y.jsx)("i",{className:"fa fa-stop-circle fa-5x btnIcon","aria-hidden":"true",onClick:this.alert})]})]}),Object(y.jsx)("div",{className:"bottomBar",children:Object(y.jsx)(g,{})})]})}}]),i}(n.a.Component);r.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(O,{})}),document.getElementById("root")),o()}},[[22,1,2]]]);
//# sourceMappingURL=main.44764865.chunk.js.map