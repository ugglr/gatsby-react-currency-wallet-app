(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t);var n=a(267),r=a.n(n),l=(a(223),a(222),a(268)),o=a.n(l),c=a(7),i=a.n(c),s=a(0),u=a.n(s),m=a(162),p=a(207),d=function(e){return u.a.createElement("div",{style:{marginBottom:"1rem",borderStyle:"solid",borderColor:"#3F51B5",borderWidth:"0.6px"}},u.a.createElement(p.b,{align:"center",color:"primary",style:{fontSize:"1.2rem"}},"Total value: "+e.sum+"USD"))},h=(a(440),a(4)),v=a.n(h),E=a(158),f=a(149),y=a.n(f),g=a(238),C=a.n(g),b=a(241),S=a.n(b),w=a(240),x=a.n(w),U=a(242),D=a.n(U),R=a(164),A=a.n(R),X=a(466),F=a.n(X),k=a(190),N=a.n(k),T=a(166),H=a.n(T),_=(a(36),a(237)),I=a.n(_),j=a(169),O=a.n(j),B=a(170),q=a.n(B),L=a(165),W=a.n(L),P=a(462),z=a.n(P),V=a(206),J=a.n(V),M=a(208),G=a.n(M),Q=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.classes,n=t.prefix;return u.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off",onSubmit:function(t){return e.props.handleAddCurrency(t,n)}},u.a.createElement(G.a,{id:"outlined-number",label:"Amount of "+n+" to be added",onChange:this.props.handleChange,type:"number",name:"addAmount",className:a.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}),u.a.createElement("br",null),u.a.createElement(p.a,{style:{marginLeft:"0.5rem"},type:"submit",variant:"contained",color:"primary",onClick:this.props.handleClose},"Add"))},t}(u.a.Component);Q.propTypes={classes:v.a.object.isRequired};var $=Object(E.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200}}})(Q),K=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleChange=function(e){return function(a){var n;t.setState(((n={})[e]=a.target.value,n))}},t}return i()(t,e),t.prototype.render=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Sorry this Function is not yet implemented!"),u.a.createElement("p",null,"But stay tuned!"))},t}(u.a.Component);K.propTypes={classes:v.a.object.isRequired};var Y=Object(E.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200}}})(K),Z=a(236),ee=a.n(Z),te=[{value:"USD",label:"$"},{value:"EUR",label:"€"},{value:"CHF",label:"CHF"}],ae=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={currency:"EUR",originalCurrencyAmount:0},t.handleChange=function(e){return function(){var a=o()(r.a.mark(function a(n){var l;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.setState(((l={})[e]=n.target.value,l));case 2:console.log(t.state);case 3:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},t.handleSubmit=function(e){e.preventDefault();var a=t.props.prefix,n=t.state,r=n.currency,l=n.originalCurrencyAmount;console.log(l+a+"to"+r),t.props.handleConvert(a,l,r)},t}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.prefix;return u.a.createElement("form",{type:"submit",className:t.container,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},u.a.createElement(G.a,{id:"outlined-number",label:"Amount in "+a,onChange:this.handleChange("originalCurrencyAmount"),type:"number",className:t.textField,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}),u.a.createElement("label",null,"To:"),u.a.createElement("br",null),u.a.createElement(G.a,{id:"outlined-select-currency",select:!0,label:"",className:t.textField,value:this.state.currency,onChange:this.handleChange("currency"),SelectProps:{MenuProps:{className:t.menu}},helperText:"Please select your currency",margin:"normal",variant:"outlined"},te.map(function(e){return u.a.createElement(ee.a,{key:e.value,value:e.value},e.label)})),u.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary",onClick:this.props.handleClose},"Convert"))},t}(u.a.Component);ae.propTypes={classes:v.a.object.isRequired};var ne=Object(E.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200}}})(ae);function re(e){return u.a.createElement(J.a,Object.assign({direction:"up"},e))}var le=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1},t.handleClickOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.title,n=e.prefix;return u.a.createElement("div",null,u.a.createElement(N.a,{variant:"outlined",color:"primary",onClick:this.handleClickOpen},a),u.a.createElement(I.a,{fullScreen:!0,open:this.state.open,onClose:this.handleClose,TransitionComponent:re},u.a.createElement(O.a,{className:t.appBar},u.a.createElement(q.a,null,u.a.createElement(W.a,{color:"inherit",onClick:this.handleClose,"aria-label":"Close"},u.a.createElement(z.a,null)),u.a.createElement(A.a,{variant:"h6",color:"inherit",className:t.flex},a),u.a.createElement(N.a,{color:"inherit",onClick:this.handleClose},"Close"))),u.a.createElement("div",{style:{marginTop:"2rem",marginLeft:"2rem",maxWidth:"960px"}},"A"===a[0]?u.a.createElement($,{handleChange:this.props.handleChange,handleAddCurrency:this.props.handleAddCurrency,handleClose:this.handleClose,prefix:n}):"S"===a[0]?u.a.createElement(Y,null):u.a.createElement(ne,{prefix:n,handleClose:this.handleClose,handleConvert:this.props.handleConvert}))))},t}(u.a.Component);le.propTypes={classes:v.a.object.isRequired};var oe=Object(E.withStyles)({appBar:{position:"relative"},flex:{flex:1}})(le),ce=a(160);function ie(e){var t=e.classes,a=e.prefix,n=e.currencyName,r=e.balance;return u.a.createElement("div",{className:t.root},u.a.createElement(C.a,null,u.a.createElement(x.a,{expandIcon:u.a.createElement(F.a,null)},u.a.createElement("div",{className:t.column},u.a.createElement(A.a,{className:t.heading,style:{fontSize:"1.3rem"}},u.a.createElement("strong",null,r,a)),u.a.createElement(A.a,{variant:"caption",style:{fontSize:"1rem"}},n)),u.a.createElement("div",{className:t.column},u.a.createElement(A.a,{className:t.secondaryHeading},"Expand for details"))),u.a.createElement(S.a,{className:t.details},u.a.createElement("div",{className:t.column}),u.a.createElement("div",{className:t.column},u.a.createElement(A.a,{variant:"caption"},"Account Holder:"),u.a.createElement(A.a,null,"Savvi.io FBO John Doe"),u.a.createElement(A.a,{variant:"caption",style:se},"Bank Code (SWIFT / BIC):"),u.a.createElement(A.a,null,"XXXXXXXXXX"),u.a.createElement(A.a,{variant:"caption",style:se},"Adress:"),u.a.createElement(A.a,null,"Savvi.io",u.a.createElement("br",null),"16W Street, Geneva, Switzerland")),u.a.createElement("div",{className:y()(t.column,t.helper)},u.a.createElement(A.a,{variant:"caption"},"Account Number:"),u.a.createElement(A.a,null,"XXXXXXXXXX"),u.a.createElement(A.a,{variant:"caption",style:se},"Wire Transfer Number:"),u.a.createElement(A.a,null,"XXXXXXXXXX"),u.a.createElement(A.a,{variant:"caption",style:se},"Routing Number (ACH or ABA):"),u.a.createElement(A.a,null,"XXXXXXXXXX"),u.a.createElement("br",null),u.a.createElement(A.a,{variant:"caption"},"How do I use these?",u.a.createElement("br",null),u.a.createElement("a",{href:"#sub-labels-and-columns",className:t.link},"Learn more")))),u.a.createElement(H.a,null),u.a.createElement(D.a,null,u.a.createElement("div",{style:ue},u.a.createElement(oe,{title:"Add "+a,prefix:a,handleChange:e.handleChange,handleAddCurrency:e.handleAddCurrency})),u.a.createElement("div",{style:ue},u.a.createElement(oe,{title:"Send "+a,prefix:a})),u.a.createElement(oe,{title:"Convert "+a,prefix:a,handleConvert:e.handleConvert}),u.a.createElement(ce.a,{to:"/faq"},u.a.createElement(N.a,{size:"small"},"More")))))}var se={marginTop:"0.5rem"},ue={marginRight:"0.5rem"};ie.propTypes={classes:v.a.object.isRequired};var me=Object(E.withStyles)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15)},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"33.33%"},helper:{borderLeft:"2px solid "+e.palette.divider,padding:e.spacing.unit+"px "+2*e.spacing.unit+"px"},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}}}})(ie),pe=function(e){return u.a.createElement("div",null,u.a.createElement("h3",null,"Latest Activity:"),u.a.createElement("ul",null,e.activity.map(function(e,t){return u.a.createElement("li",{style:{marginTop:"1.5rem"},key:t},e)})))};a.d(t,"default",function(){return de});var de=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={addAmount:0,activity:[],USD_wallet:100,EUR_wallet:500,CHF_wallet:1e4,totalValueUSD:null},t.handleChange=function(){var e=o()(r.a.mark(function e(a){var n,l,o,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),l=a.target,o=l.name,c=l.value,e.next=4,t.setState(((n={})[o]=c,n));case 4:console.log(t.state);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t.handleAddCurrency=function(){var e=o()(r.a.mark(function e(a,n){var l,o,c,i,s,u,m;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l=t.state,o=l.USD_wallet,c=l.EUR_wallet,i=l.CHF_wallet,s=l.addAmount,a.preventDefault(),console.log(n),console.log("The ADD button was pressed"),u=Date(),m=u+": Added: "+s+n,console.log(m),e.t0=n,e.next="USD"===e.t0?10:"EUR"===e.t0?14:"CHF"===e.t0?18:22;break;case 10:return e.next=12,t.setState({USD_wallet:parseInt(o)+parseInt(s),activity:[m].concat(t.state.activity),AddAmount:0});case 12:return t.calculateTotalSumInDollars(),e.abrupt("break",23);case 14:return e.next=16,t.setState({EUR_wallet:parseInt(c)+parseInt(s),activity:[m].concat(t.state.activity),AddAmount:0});case 16:return t.calculateTotalSumInDollars(),e.abrupt("break",23);case 18:return e.next=20,t.setState({CHF_wallet:parseInt(i)+parseInt(s),activity:[m].concat(t.state.activity),AddAmount:0});case 20:return t.calculateTotalSumInDollars(),e.abrupt("break",23);case 22:return e.abrupt("break",23);case 23:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),t.handleConvert=function(e,a,n){console.log("We are now in the handleConvert function"),console.log("We have received the following:"),console.log("Convert From: "+e),console.log("The amount to be converted: "+a),console.log("Into: "+n);var r=t.state,l=r.USD_wallet,o=r.EUR_wallet,c=r.CHF_wallet,i=Date();switch(t.setState({activity:[i+": Converted: "+a+e+" to "+n].concat(t.state.activity)}),e){case"USD":if(t.setState({USD_wallet:l-a}),"EUR"===n){var s=t.convertUSDtoEUR(a);t.setState({EUR_wallet:o+s})}else{var u=t.convertUSDtoCHF(a);t.setState({CHF_wallet:c+u})}break;case"EUR":if(console.log("Starting to convert from EUR"),t.setState({EUR_wallet:o-a}),"USD"===n){var m=t.convertEURtoUSD(a);t.setState({USD_wallet:l+m})}else{var p=t.convertEURtoCHF(a);t.setState({CHF_wallet:c+p})}break;case"CHF":if(console.log("Starting to convert from CHF"),t.setState({CHF_wallet:c-a}),"USD"===n){var d=t.convertCHFtoUSD(a);t.setState({USD_wallet:l+d})}else{var h=t.convertCHFtoEUR(a);t.setState({EUR_wallet:o+h})}}},t.convertUSDtoEUR=function(e){return.9*e},t.convertUSDtoCHF=function(e){return 1.02*e},t.convertEURtoUSD=function(e){return 1.12*e},t.convertEURtoCHF=function(e){return 1.14*e},t.convertCHFtoUSD=function(e){return.98*e},t.convertCHFtoEUR=function(e){return.88*e},t.calculateTotalSumInDollars=function(){var e=t.state,a=e.USD_wallet,n=e.EUR_wallet,r=e.CHF_wallet,l=a+t.convertEURtoUSD(n)+t.convertCHFtoUSD(r);console.log("Sum in USD: "+l),t.setState({totalValueUSD:l})},t}i()(t,e);var a=t.prototype;return a.componentWillMount=function(){this.calculateTotalSumInDollars()},a.render=function(){return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(p.b,null,"Hook up front-end to database to have data persistance."),u.a.createElement(d,{sum:this.state.totalValueUSD}),u.a.createElement(me,{prefix:"USD",currencyName:"US Dollars",balance:this.state.USD_wallet,handleChange:this.handleChange,handleAddCurrency:this.handleAddCurrency,handleConvert:this.handleConvert}),u.a.createElement(me,{prefix:"EUR",currencyName:"EURO",balance:this.state.EUR_wallet,handleChange:this.handleChange,handleAddCurrency:this.handleAddCurrency,handleConvert:this.handleConvert}),u.a.createElement(me,{prefix:"CHF",currencyName:"Swiss Franc",balance:this.state.CHF_wallet,handleChange:this.handleChange,handleAddCurrency:this.handleAddCurrency,handleConvert:this.handleConvert}),u.a.createElement(pe,{activity:this.state.activity})))},t}(s.Component)},159:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(33),i=a.n(c);a.d(t,"a",function(){return i.a});a(159),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},162:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),o=a.n(l),c=a(4),i=a.n(c),s=a(169),u=a.n(s),m=a(174),p=a.n(m),d=a(166),h=a.n(d),v=a(176),E=a.n(v),f=a(175),y=a.n(f),g=a(165),C=a.n(g),b=a(167),S=a.n(b),w=a(168),x=a.n(w),U=a(173),D=a.n(U),R=a(183),A=a.n(R),X=a(170),F=a.n(X),k=a(164),N=a.n(k),T=a(158),H=(a(178),a(160)),_=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={mobileOpen:!1},t.handleDrawerToggle=function(){t.setState(function(e){return{mobileOpen:!e.mobileOpen}})},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.theme,n=e.children,r=o.a.createElement("div",null,o.a.createElement("div",{className:t.toolbar}),o.a.createElement(h.a,null),o.a.createElement(S.a,null,["Balances","Recipients","Invite a friend!"].map(function(e,t){return o.a.createElement("div",{key:t},0===t?o.a.createElement(H.a,{to:"/"},o.a.createElement(x.a,{button:!0},o.a.createElement(D.a,{primary:e}))):1===t?o.a.createElement(H.a,{to:"/recipients"},o.a.createElement(x.a,{button:!0},o.a.createElement(D.a,{primary:e}))):o.a.createElement(H.a,{to:"/invite"},o.a.createElement(x.a,{button:!0},o.a.createElement(D.a,{primary:e}))))})),o.a.createElement(h.a,null),o.a.createElement(S.a,null,["About","FAQ","Legal"].map(function(e,t){return o.a.createElement("div",{key:t},0===t?o.a.createElement(H.a,{to:"/about"},o.a.createElement(x.a,{button:!0},o.a.createElement(D.a,{primary:e}))):1===t?o.a.createElement(H.a,{to:"/faq"},o.a.createElement(x.a,{button:!0},o.a.createElement(D.a,{primary:e}))):o.a.createElement(H.a,{to:"/legal"},o.a.createElement(x.a,{button:!0},o.a.createElement(D.a,{primary:e}))))})));return o.a.createElement("div",{className:t.root},o.a.createElement(p.a,null),o.a.createElement(u.a,{position:"fixed",className:t.appBar},o.a.createElement(F.a,null,o.a.createElement(C.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerToggle,className:t.menuButton},o.a.createElement(A.a,null)),o.a.createElement(N.a,{variant:"h6",color:"inherit",noWrap:!0},"Savvy.io Code Challenge"))),o.a.createElement("nav",{className:t.drawer},o.a.createElement(y.a,{smUp:!0,implementation:"css"},o.a.createElement(E.a,{container:this.props.container,variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:this.state.mobileOpen,onClose:this.handleDrawerToggle,classes:{paper:t.drawerPaper}},r)),o.a.createElement(y.a,{xsDown:!0,implementation:"css"},o.a.createElement(E.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},r))),o.a.createElement("main",{className:t.content},o.a.createElement("div",{className:t.toolbar}),o.a.createElement("div",{className:"content"},n)))},t}(o.a.Component);_.propTypes={classes:i.a.object.isRequired,container:i.a.object,theme:i.a.object.isRequired},t.a=Object(T.withStyles)(function(e){var t,a,n;return{root:{display:"flex"},drawer:(t={},t[e.breakpoints.up("sm")]={width:240,flexShrink:0},t),appBar:(a={marginLeft:240},a[e.breakpoints.up("sm")]={width:"calc(100% - 240px)"},a),menuButton:(n={marginRight:20},n[e.breakpoints.up("sm")]={display:"none"},n),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:3*e.spacing.unit}}},{withTheme:!0})(_)},163:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(56),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-index-js-56f3318bf8866cf8b0a8.js.map