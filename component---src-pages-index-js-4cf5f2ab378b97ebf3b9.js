(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t);var n=a(227),r=a.n(n),l=(a(228),a(209),a(229)),o=a.n(l),c=a(7),i=a.n(c),s=a(0),u=a.n(s),m=a(163),p=(a(440),a(4)),d=a.n(p),h=a(157),v=a(149),E=a.n(v),f=a(211),y=a.n(f),g=a(213),C=a.n(g),S=a(212),b=a.n(S),w=a(245),U=a.n(w),D=a(162),x=a.n(D),R=a(272),F=a.n(R),A=a(194),H=a.n(A),X=a(166),k=a.n(X),T=(a(36),a(243)),N=a.n(T),_=a(169),I=a.n(_),j=a(170),O=a.n(j),V=a(165),q=a.n(V),B=a(463),L=a.n(B),W=a(208),z=a.n(W),P=a(210),J=a.n(P),M=a(193),G=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.classes,n=t.prefix;return u.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off",onSubmit:function(t){return e.props.handleAddCurrency(t,n)}},u.a.createElement(J.a,{id:"outlined-number",label:"Amount of "+n+" to be added",onChange:this.props.handleChange,type:"number",name:"addAmount",className:a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}),u.a.createElement("br",null),u.a.createElement(M.a,{style:{marginLeft:"0.5rem"},type:"submit",variant:"contained",color:"primary",onClick:this.props.handleClose},"Add"))},t}(u.a.Component);G.propTypes={classes:d.a.object.isRequired};var Q=Object(h.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200}}})(G),$=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleChange=function(e){return function(a){var n;t.setState(((n={})[e]=a.target.value,n))}},t}return i()(t,e),t.prototype.render=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Sorry this Function is not yet implemented!"),u.a.createElement("p",null,"But stay tuned!"))},t}(u.a.Component);$.propTypes={classes:d.a.object.isRequired};var K=Object(h.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200}}})($),Y=a(242),Z=a.n(Y),ee=[{value:"USD",label:"$"},{value:"EUR",label:"€"},{value:"CHF",label:"CHF"}],te=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={currency:"EUR",originalCurrencyAmount:0},t.handleChange=function(e){return function(){var a=o()(r.a.mark(function a(n){var l;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.setState(((l={})[e]=n.target.value,l));case 2:console.log(t.state);case 3:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},t.handleSubmit=function(e){e.preventDefault();var a=t.props.prefix,n=t.state,r=n.currency,l=n.originalCurrencyAmount;console.log(l+a+"to"+r),t.props.handleConvert(a,l,r)},t}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.prefix;return u.a.createElement("form",{type:"submit",className:t.container,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},u.a.createElement(J.a,{id:"outlined-number",label:"Amount in "+a,onChange:this.handleChange("originalCurrencyAmount"),type:"number",className:t.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}),u.a.createElement("label",null,"To:"),u.a.createElement("br",null),u.a.createElement(J.a,{id:"outlined-select-currency",select:!0,label:"",className:t.textField,value:this.state.currency,onChange:this.handleChange("currency"),SelectProps:{MenuProps:{className:t.menu}},helperText:"Please select your currency",margin:"normal",variant:"outlined"},ee.map(function(e){return u.a.createElement(Z.a,{key:e.value,value:e.value},e.label)})),u.a.createElement(M.a,{type:"submit",variant:"contained",color:"primary",onClick:this.props.handleClose},"Convert"))},t}(u.a.Component);te.propTypes={classes:d.a.object.isRequired};var ae=Object(h.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200}}})(te);function ne(e){return u.a.createElement(z.a,Object.assign({direction:"up"},e))}var re=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1},t.handleClickOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.title,n=e.prefix;return u.a.createElement("div",null,u.a.createElement(H.a,{variant:"outlined",color:"primary",onClick:this.handleClickOpen},a),u.a.createElement(N.a,{fullScreen:!0,open:this.state.open,onClose:this.handleClose,TransitionComponent:ne},u.a.createElement(I.a,{className:t.appBar},u.a.createElement(O.a,null,u.a.createElement(q.a,{color:"inherit",onClick:this.handleClose,"aria-label":"Close"},u.a.createElement(L.a,null)),u.a.createElement(x.a,{variant:"h6",color:"inherit",className:t.flex},a),u.a.createElement(H.a,{color:"inherit",onClick:this.handleClose},"Close"))),u.a.createElement("div",{style:{marginTop:"2rem",marginLeft:"2rem",maxWidth:"960px"}},"A"===a[0]?u.a.createElement(Q,{handleChange:this.props.handleChange,handleAddCurrency:this.props.handleAddCurrency,handleClose:this.handleClose,prefix:n}):"S"===a[0]?u.a.createElement(K,null):u.a.createElement(ae,{prefix:n,handleClose:this.handleClose,handleConvert:this.props.handleConvert}))))},t}(u.a.Component);re.propTypes={classes:d.a.object.isRequired};var le=Object(h.withStyles)({appBar:{position:"relative"},flex:{flex:1}})(re),oe=a(161);function ce(e){var t=e.classes,a=e.prefix,n=e.currencyName,r=e.balance;return u.a.createElement("div",{className:t.root},u.a.createElement(y.a,null,u.a.createElement(b.a,{expandIcon:u.a.createElement(F.a,null)},u.a.createElement("div",{className:t.column},u.a.createElement(x.a,{className:t.heading,style:{fontSize:"1.3rem"}},u.a.createElement("strong",null,r,a)),u.a.createElement(x.a,{variant:"caption",style:{fontSize:"1rem"}},n)),u.a.createElement("div",{className:t.column},u.a.createElement(x.a,{className:t.secondaryHeading},"Expand for details"))),u.a.createElement(C.a,{className:t.details},u.a.createElement("div",{className:t.column}),u.a.createElement("div",{className:t.column},u.a.createElement(x.a,{variant:"caption"},"Account Holder:"),u.a.createElement(x.a,null,"Savvi.io FBO John Doe"),u.a.createElement(x.a,{variant:"caption",style:ie},"Bank Code (SWIFT / BIC):"),u.a.createElement(x.a,null,"XXXXXXXXXX"),u.a.createElement(x.a,{variant:"caption",style:ie},"Adress:"),u.a.createElement(x.a,null,"Savvi.io",u.a.createElement("br",null),"16W Street, Geneva, Switzerland")),u.a.createElement("div",{className:E()(t.column,t.helper)},u.a.createElement(x.a,{variant:"caption"},"Account Number:"),u.a.createElement(x.a,null,"XXXXXXXXXX"),u.a.createElement(x.a,{variant:"caption",style:ie},"Wire Transfer Number:"),u.a.createElement(x.a,null,"XXXXXXXXXX"),u.a.createElement(x.a,{variant:"caption",style:ie},"Routing Number (ACH or ABA):"),u.a.createElement(x.a,null,"XXXXXXXXXX"),u.a.createElement("br",null),u.a.createElement(x.a,{variant:"caption"},"How do I use these?",u.a.createElement("br",null),u.a.createElement("a",{href:"#sub-labels-and-columns",className:t.link},"Learn more")))),u.a.createElement(k.a,null),u.a.createElement(U.a,null,u.a.createElement("div",{style:se},u.a.createElement(le,{title:"Add "+a,prefix:a,handleChange:e.handleChange,handleAddCurrency:e.handleAddCurrency})),u.a.createElement("div",{style:se},u.a.createElement(le,{title:"Send "+a,prefix:a})),u.a.createElement(le,{title:"Convert "+a,prefix:a,handleConvert:e.handleConvert}),u.a.createElement(oe.a,{to:"/faq"},u.a.createElement(H.a,{size:"small"},"More")))))}var ie={marginTop:"0.5rem"},se={marginRight:"0.5rem"};ce.propTypes={classes:d.a.object.isRequired};var ue=Object(h.withStyles)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"33.33%"},helper:{borderLeft:"2px solid "+e.palette.divider,padding:e.spacing.unit+"px "+2*e.spacing.unit+"px"},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}}}})(ce),me=function(e){return u.a.createElement("div",null,u.a.createElement("h3",null,"Latest Activity:"),u.a.createElement("ul",null,e.activity.map(function(e,t){return u.a.createElement("li",{style:{marginTop:"1.5rem"},key:t},e)})))},pe=function(e){var t=e.sum,a="Total value: "+t+"USD",n="Total value: "+e.convertUSDtoEUR(t)+"EUR",r="Total value: "+e.convertUSDtoCHF(t)+"CHF";return u.a.createElement(M.b,{align:"center",color:"primary",style:{fontSize:"1.2rem"}},console.log("val:"+e.selectedValue),"USD"===e.selectedValue?a:"EUR"===e.selectedValue?n:r)},de=a(246),he=a.n(de),ve=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return u.a.createElement("div",null,u.a.createElement(M.b,null,"Select USD as default value"),u.a.createElement(he.a,{checked:"USD"===this.props.selectedValue,onChange:this.props.handleChange,value:"USD","aria-label":"USD"}),u.a.createElement(M.b,null,"Select EUR as default value"),u.a.createElement(he.a,{checked:"EUR"===this.props.selectedValue,onChange:this.props.handleChange,value:"EUR","aria-label":"EUR"}),u.a.createElement(M.b,null,"Select CHF as default value"),u.a.createElement(he.a,{checked:"CHF"===this.props.selectedValue,onChange:this.props.handleChange,value:"CHF","aria-label":"CHF"}))},t}(u.a.Component),Ee=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={selectedValue:"USD"},t.handleChange=function(){var e=o()(r.a.mark(function e(a){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState({selectedValue:a.target.value});case 2:console.log(t.state);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.sum;return u.a.createElement("div",{className:t.root},u.a.createElement(y.a,null,u.a.createElement(b.a,{expandIcon:u.a.createElement(F.a,null)},u.a.createElement(pe,{selectedValue:this.state.selectedValue,convertUSDtoEUR:this.props.convertUSDtoEUR,convertUSDtoCHF:this.props.convertUSDtoCHF,sum:a}),u.a.createElement(x.a,{variant:"caption",style:{marginLeft:"2rem",marginTop:"0.5rem",fontSize:"0.7rem"},className:t.heading},"expand to select default currency")),u.a.createElement(C.a,null,u.a.createElement(ve,{selectedValue:this.state.selectedValue,handleChange:this.handleChange}))))},t}(s.Component);Ee.propTypes={classes:d.a.object.isRequired};var fe=Object(h.withStyles)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}})(Ee);a.d(t,"default",function(){return ye});var ye=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={addAmount:0,activity:[],USD_wallet:100,EUR_wallet:500,CHF_wallet:1e4,totalValueUSD:null},t.handleChange=function(){var e=o()(r.a.mark(function e(a){var n,l,o,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),l=a.target,o=l.name,c=l.value,e.next=4,t.setState(((n={})[o]=c,n));case 4:console.log(t.state);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t.handleAddCurrency=function(){var e=o()(r.a.mark(function e(a,n){var l,o,c,i,s,u,m;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l=t.state,o=l.USD_wallet,c=l.EUR_wallet,i=l.CHF_wallet,s=l.addAmount,a.preventDefault(),console.log(n),console.log("The ADD button was pressed"),u=Date(),m=u+": Added: "+s+n,console.log(m),e.t0=n,e.next="USD"===e.t0?10:"EUR"===e.t0?14:"CHF"===e.t0?18:22;break;case 10:return e.next=12,t.setState({USD_wallet:parseInt(o)+parseInt(s),activity:[m].concat(t.state.activity),AddAmount:0});case 12:return t.calculateTotalSumInDollars(),e.abrupt("break",23);case 14:return e.next=16,t.setState({EUR_wallet:parseInt(c)+parseInt(s),activity:[m].concat(t.state.activity),AddAmount:0});case 16:return t.calculateTotalSumInDollars(),e.abrupt("break",23);case 18:return e.next=20,t.setState({CHF_wallet:parseInt(i)+parseInt(s),activity:[m].concat(t.state.activity),AddAmount:0});case 20:return t.calculateTotalSumInDollars(),e.abrupt("break",23);case 22:return e.abrupt("break",23);case 23:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),t.handleConvert=function(e,a,n){console.log("We are now in the handleConvert function"),console.log("We have received the following:"),console.log("Convert From: "+e),console.log("The amount to be converted: "+a),console.log("Into: "+n);var r=t.state,l=r.USD_wallet,o=r.EUR_wallet,c=r.CHF_wallet,i=Date();switch(t.setState({activity:[i+": Converted: "+a+e+" to "+n].concat(t.state.activity)}),e){case"USD":if(t.setState({USD_wallet:l-a}),"EUR"===n){var s=t.convertUSDtoEUR(a);t.setState({EUR_wallet:o+s})}else{var u=t.convertUSDtoCHF(a);t.setState({CHF_wallet:c+u})}break;case"EUR":if(console.log("Starting to convert from EUR"),t.setState({EUR_wallet:o-a}),"USD"===n){var m=t.convertEURtoUSD(a);t.setState({USD_wallet:l+m})}else{var p=t.convertEURtoCHF(a);t.setState({CHF_wallet:c+p})}break;case"CHF":if(console.log("Starting to convert from CHF"),t.setState({CHF_wallet:c-a}),"USD"===n){var d=t.convertCHFtoUSD(a);t.setState({USD_wallet:l+d})}else{var h=t.convertCHFtoEUR(a);t.setState({EUR_wallet:o+h})}}},t.convertUSDtoEUR=function(e){return.9*e},t.convertUSDtoCHF=function(e){return 1.02*e},t.convertEURtoUSD=function(e){return 1.12*e},t.convertEURtoCHF=function(e){return 1.14*e},t.convertCHFtoUSD=function(e){return.98*e},t.convertCHFtoEUR=function(e){return.88*e},t.calculateTotalSumInDollars=function(){var e=t.state,a=e.USD_wallet,n=e.EUR_wallet,r=e.CHF_wallet,l=a+t.convertEURtoUSD(n)+t.convertCHFtoUSD(r);console.log("Sum in USD: "+l),t.setState({totalValueUSD:l})},t}i()(t,e);var a=t.prototype;return a.componentWillMount=function(){this.calculateTotalSumInDollars()},a.render=function(){return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(M.b,null,"Hook up front-end to database to have data persistance."),u.a.createElement(fe,{convertUSDtoEUR:this.convertUSDtoEUR,convertUSDtoCHF:this.convertUSDtoCHF,sum:this.state.totalValueUSD}),u.a.createElement(ue,{prefix:"USD",currencyName:"US Dollars",balance:this.state.USD_wallet,handleChange:this.handleChange,handleAddCurrency:this.handleAddCurrency,handleConvert:this.handleConvert}),u.a.createElement(ue,{prefix:"EUR",currencyName:"EURO",balance:this.state.EUR_wallet,handleChange:this.handleChange,handleAddCurrency:this.handleAddCurrency,handleConvert:this.handleConvert}),u.a.createElement(ue,{prefix:"CHF",currencyName:"Swiss Franc",balance:this.state.CHF_wallet,handleChange:this.handleChange,handleAddCurrency:this.handleAddCurrency,handleConvert:this.handleConvert}),u.a.createElement(me,{activity:this.state.activity})))},t}(s.Component)},159:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(33),i=a.n(c);a.d(t,"a",function(){return i.a});a(159),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},163:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),o=a.n(l),c=a(4),i=a.n(c),s=a(169),u=a.n(s),m=a(174),p=a.n(m),d=a(166),h=a.n(d),v=a(176),E=a.n(v),f=a(175),y=a.n(f),g=a(165),C=a.n(g),S=a(167),b=a.n(S),w=a(168),U=a.n(w),D=a(173),x=a.n(D),R=a(184),F=a.n(R),A=a(170),H=a.n(A),X=a(162),k=a.n(X),T=a(157),N=(a(179),a(161)),_=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={mobileOpen:!1},t.handleDrawerToggle=function(){t.setState(function(e){return{mobileOpen:!e.mobileOpen}})},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.theme,n=e.children,r=o.a.createElement("div",null,o.a.createElement("div",{className:t.toolbar}),o.a.createElement(h.a,null),o.a.createElement(b.a,null,["Balances","Recipients","Invite a friend!"].map(function(e,t){return o.a.createElement("div",{key:t},0===t?o.a.createElement(N.a,{to:"/"},o.a.createElement(U.a,{button:!0},o.a.createElement(x.a,{primary:e}))):1===t?o.a.createElement(N.a,{to:"/recipients"},o.a.createElement(U.a,{button:!0},o.a.createElement(x.a,{primary:e}))):o.a.createElement(N.a,{to:"/invite"},o.a.createElement(U.a,{button:!0},o.a.createElement(x.a,{primary:e}))))})),o.a.createElement(h.a,null),o.a.createElement(b.a,null,["About","FAQ","Legal"].map(function(e,t){return o.a.createElement("div",{key:t},0===t?o.a.createElement(N.a,{to:"/about"},o.a.createElement(U.a,{button:!0},o.a.createElement(x.a,{primary:e}))):1===t?o.a.createElement(N.a,{to:"/faq"},o.a.createElement(U.a,{button:!0},o.a.createElement(x.a,{primary:e}))):o.a.createElement(N.a,{to:"/legal"},o.a.createElement(U.a,{button:!0},o.a.createElement(x.a,{primary:e}))))})));return o.a.createElement("div",{className:t.root},o.a.createElement(p.a,null),o.a.createElement(u.a,{position:"fixed",className:t.appBar},o.a.createElement(H.a,null,o.a.createElement(C.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerToggle,className:t.menuButton},o.a.createElement(F.a,null)),o.a.createElement(k.a,{variant:"h6",color:"inherit",noWrap:!0},"Savvy.io Code Challenge"))),o.a.createElement("nav",{className:t.drawer},o.a.createElement(y.a,{smUp:!0,implementation:"css"},o.a.createElement(E.a,{container:this.props.container,variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:this.state.mobileOpen,onClose:this.handleDrawerToggle,classes:{paper:t.drawerPaper}},r)),o.a.createElement(y.a,{xsDown:!0,implementation:"css"},o.a.createElement(E.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},r))),o.a.createElement("main",{className:t.content},o.a.createElement("div",{className:t.toolbar}),o.a.createElement("div",{className:"content"},n)))},t}(o.a.Component);_.propTypes={classes:i.a.object.isRequired,container:i.a.object,theme:i.a.object.isRequired},t.a=Object(T.withStyles)(function(e){var t,a,n;return{root:{display:"flex"},drawer:(t={},t[e.breakpoints.up("sm")]={width:240,flexShrink:0},t),appBar:(a={marginLeft:240},a[e.breakpoints.up("sm")]={width:"calc(100% - 240px)"},a),menuButton:(n={marginRight:20},n[e.breakpoints.up("sm")]={display:"none"},n),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:3*e.spacing.unit}}},{withTheme:!0})(_)},164:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(56),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-index-js-4cf5f2ab378b97ebf3b9.js.map