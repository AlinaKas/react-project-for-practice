(this["webpackJsonpreact-project-for-practice"]=this["webpackJsonpreact-project-for-practice"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(2),a=n.n(r),l=(n(16),n(3)),i=n(4),s=n(6),d=n(5),u=(n(17),n(11)),h=n(9),p=n.n(h),j=n(0),b=document.querySelector("#modal-root"),f=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(j.jsx)("div",{className:p.a.backdrop,onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:p.a.content,children:this.props.children})}),b)}}]),n}(o.Component),O=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.showModal;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",onClick:this.toggleModal,children:"Modal open"}),e&&Object(j.jsxs)(f,{onClose:this.toggleModal,children:[Object(j.jsx)("h2",{children:"This is modal's content as CHILDREN"}),Object(j.jsx)(u.LoremIpsum,{p:1}),Object(j.jsx)("button",{type:"button",onClick:this.toggleModal,children:"Close"})]})]})}}]),n}(o.Component),k=O;a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={backdrop:"Modal_backdrop__3FAPo",content:"Modal_content__1VIbZ"}}},[[29,1,2]]]);
//# sourceMappingURL=main.9965b8b7.chunk.js.map