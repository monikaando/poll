(this["webpackJsonppoll-app"]=this["webpackJsonppoll-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),s=a.n(l),c=(a(21),a(12)),i=a(7),o=a(8),u=a(2),d=a(15),m=a(13),p=(a(22),a(9)),h=a(10);var b=function(e){var t=e.answers.map((function(t){return r.a.createElement("div",{className:"list d-flex justify-content-between align-items-center bg-info text-white border border-light rounded mb-2",key:t.key},r.a.createElement("p",{className:"pl-3 mb-1 d-flex justify-content-between align-items-center"},r.a.createElement("input",{className:"bg-transparent border-0",type:"text",id:t.key,value:t.value,onChange:function(a){e.setUpdate(a.target.value,t.key)}})),r.a.createElement("span",{className:"pr-2"},r.a.createElement(p.a,{className:"faicons",icon:"times",onClick:function(){return e.deleteAnswer(t.key)}})))}));return r.a.createElement("div",{className:"mt-4"},r.a.createElement(h.a,{duration:400,easing:"ease-in-out"},t))},f=a(4),v=a(11);f.b.add(v.a);var w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={answers:[],currentAnswer:{value:"",key:""}},n.handleInput=n.handleInput.bind(Object(u.a)(n)),n.addAnswer=n.addAnswer.bind(Object(u.a)(n)),n.deleteAnswer=n.deleteAnswer.bind(Object(u.a)(n)),n.setUpdate=n.setUpdate.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"handleInput",value:function(e){this.setState({currentAnswer:{value:e.target.value,key:Date.now()}})}},{key:"addAnswer",value:function(e){e.preventDefault();var t=this.state.currentAnswer;if(console.log(t),""!==t.value){var a=[].concat(Object(c.a)(this.state.answers),[t]);this.setState({answers:a,currentAnswer:{value:"",key:""}})}}},{key:"deleteAnswer",value:function(e){var t=this.state.answers.filter((function(t){return t.key!==e}));this.setState({answers:t})}},{key:"setUpdate",value:function(e,t){var a=this.state.answers;a.map((function(a){a.key===t&&(a.value=e)})),this.setState({answers:a})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Create")),r.a.createElement("input",{type:"text",className:"form-control mb-3 mt-5 bg-warning",value:this.state.value,placeholder:"Question",onChange:this.handleChange}),r.a.createElement(b,{answers:this.state.answers,deleteAnswer:this.deleteAnswer,setUpdate:this.setUpdate}),r.a.createElement("form",{onSubmit:this.addAnswer},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control bg-light text-dark",placeholder:"Type an answer","aria-label":"Type an answer","aria-describedby":"button-addon2",value:this.state.currentAnswer.value,onChange:this.handleInput}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary bg-info text-white",type:"submit",id:"button-addon2"},"Add")))))}}]),a}(r.a.Component),E=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Vote"))},y=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Results"))},g=function(){return r.a.createElement("div",{className:"p-2 bg-light text-dark fixed-bottom text-center"},r.a.createElement("h6",{className:"pt-2"},"Created by"," ",r.a.createElement("a",{href:"https://monikaswidzinska.netlify.app/",target:"_blank",rel:"noopener noreferrer"},"Monika Swidzinska")))};a(28);var k=function(){return r.a.createElement("div",{className:"app d-flex flex-column justify-content-between"},r.a.createElement("div",{className:"d-flex pb-3 m-5 flex-row justify-content-between"},r.a.createElement(w,null),r.a.createElement(E,null),r.a.createElement(y,null)),r.a.createElement("div",null,r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(29);var x=a(14);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x.a,null,r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.6a89ec71.chunk.js.map