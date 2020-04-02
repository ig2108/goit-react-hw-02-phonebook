(this["webpackJsonpreact-pack"]=this["webpackJsonpreact-pack"]||[]).push([[0],{1:function(t,e,n){t.exports={form:"ContactForm_form__2Glup",labelItem:"ContactForm_labelItem__KdKr_",textName:"ContactForm_textName__2sI88",submitBtn:"ContactForm_submitBtn__I0wlB"}},10:function(t,e,n){t.exports={sectionTitle:"SectionTitle_sectionTitle__2kmuF"}},11:function(t,e,n){t.exports={contactList:"ContactsList_contactList__Rn4V7",contactItem:"ContactsList_contactItem__3OIos"}},12:function(t,e,n){t.exports={contactInfo:"ContactItem_contactInfo__17Pe7",deleteBtn:"ContactItem_deleteBtn__3loW_"}},15:function(t,e,n){t.exports={filterInput:"Filter_filterInput__gvE-N"}},16:function(t,e,n){t.exports={container:"App_container__2piFw"}},18:function(t,e,n){t.exports=n(31)},31:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(14),r=n.n(o),l=n(17),i=n(4),s=n(6),u=n(7),m=n(8),f=n(9),p=n(2),d=n.n(p),h=n(10),b=n.n(h),C=function(t){var e=t.title,n=t.children;return c.a.createElement("section",{className:b.a.sectionTitle},c.a.createElement("h2",{className:b.a.sectionTitle},e),n)},_=n(5),I=n(1),v=n.n(I),E=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=d.a.generate(),t.numberInputId=d.a.generate(),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),(0,t.props.onAddContact)(Object(i.a)({},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:v.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",{className:v.a.labelItem,htmlFor:this.nameInputId},c.a.createElement("p",{className:v.a.textName},"Name"),c.a.createElement("input",{className:v.a.inputName,type:"text",name:"name",value:e,onChange:this.handleChange,id:this.nameInputId})),c.a.createElement("label",{className:v.a.labelItem,htmlFor:this.numberInputId},c.a.createElement("p",{className:v.a.textName},"Number"),c.a.createElement("input",{type:"phone",name:"number",value:n,onChange:this.handleChange,id:this.numberInputId})),c.a.createElement("button",{className:v.a.submitBtn,type:"submit"},"Add Contact"))}}]),n}(a.Component),N=n(15),g=n.n(N),y=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("input",{type:"text",value:e,onChange:n,className:g.a.filterInput,placeholder:"Type name to filter contacts..."})},F=n(11),x=n.n(F),O=n(12),j=n.n(O),S=function(t){var e=t.contact,n=t.onDeleteContact,a=e.name,o=e.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:j.a.contactInfo},a," : ",o),c.a.createElement("button",{onClick:function(){return n(e.id)},className:j.a.deleteBtn,type:"button"},"Delete"))},k=function(t){var e=t.contacts,n=t.onDeleteContact;return c.a.createElement("ul",{className:x.a.contactList},e.map((function(t){return c.a.createElement("li",{key:t.id,className:x.a.contactItem},c.a.createElement(S,{contact:t,onDeleteContact:n}))})))},w=n(16),L=n.n(w),A=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleAddContact=function(e){t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts")):t.addContactToState(e)},t.addContactToState=function(e){var n=Object(i.a)({},e,{id:d.a.generate()});t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[n])}}))},t.handleDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleChangeFilter=function(e){t.setState({filter:e.target.value})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return c.a.createElement("div",{className:L.a.container},c.a.createElement(C,{title:"Phonebook"},c.a.createElement(E,{onAddContact:this.handleAddContact})),c.a.createElement(C,{title:"Contacts"},e.length>1&&c.a.createElement(y,{value:n,onChangeFilter:this.handleChangeFilter}),c.a.createElement(k,{onDeleteContact:this.handleDeleteContact,contacts:a})))}}]),n}(a.Component);r.a.render(c.a.createElement(A,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.bcb2fdbf.chunk.js.map