"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[445],{9548:function(e,n,a){a.d(n,{sF:function(){return u},C$:function(){return s},s8:function(){return i},wd:function(){return l},ZI:function(){return o}});var r=a(8372),t=a(3329),l=function(e){var n=e.form,a=n.values,l=n.touched,i=n.errors,o=n.handleChange,s=n.handleBlur;return(0,t.jsx)(r.Z,{id:"name",type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",label:"Username*",value:a.name,onChange:o,onBlur:s,helperText:l.name?i.name:"",error:l.name&&Boolean(i.name),margin:"dense",variant:"outlined",fullWidth:!0})},i=function(e){var n=e.form,a=n.values,l=n.touched,i=n.errors,o=n.handleChange,s=n.handleBlur;return(0,t.jsx)(r.Z,{id:"email",type:"email",name:"email",title:"Must be a regular email",label:"Email*",value:a.email,onChange:o,onBlur:s,helperText:l.email?i.email:"",error:l.email&&Boolean(i.email),margin:"dense",variant:"outlined",fullWidth:!0})},o=function(e){var n=e.form,a=n.values,l=n.touched,i=n.errors,o=n.handleChange,s=n.handleBlur;return(0,t.jsx)(r.Z,{id:"password",type:"password",name:"password",title:"Password must be digits and letters",label:"Password*",value:a.password,onChange:o,onBlur:s,helperText:l.password?i.password:"",error:l.password&&Boolean(i.password),margin:"dense",variant:"outlined",fullWidth:!0})},s=function(e){var n=e.form,a=n.values,l=n.touched,i=n.errors,o=n.handleChange,s=n.handleBlur;return(0,t.jsx)(r.Z,{id:"number",type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",label:"Phone number*",value:a.number,onChange:o,onBlur:s,helperText:l.number?i.number:"",error:l.number&&Boolean(i.number),margin:"dense",variant:"outlined",size:"small",fullWidth:!0})},u=function(e){var n=e.form,a=n.values,l=n.touched,i=n.errors,o=n.handleChange,s=n.handleBlur;return(0,t.jsx)(r.Z,{id:"name",type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",label:"Name*",value:a.name,onChange:o,onBlur:s,helperText:l.name?i.name:"",error:l.name&&Boolean(i.name),margin:"dense",variant:"outlined",size:"small",fullWidth:!0})}},3528:function(e,n,a){a.d(n,{u:function(){return d},e:function(){return u}});var r,t=a(168),l=a(6088),i=a(8966),o=(0,l.Z)(i.gy)(r||(r=(0,t.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 999;\n"]))),s=a(3329),u=function(){return(0,s.jsx)(o,{height:"30",width:"30",color:"#1976d2",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:"",visible:!0})},d=function(){return(0,s.jsx)(i.g4,{height:"40",width:"40",color:"#1976d2",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:"",visible:!0})}},6243:function(e,n,a){a.d(n,{EI:function(){return l},Jj:function(){return t},uh:function(){return r}});var r={py:4,px:2,display:"flex",flexDirection:"column",alignItems:"center"},t={m:1,bgcolor:"#1976d2"},l={fontSize:"16px",width:"200px",height:"40px",marginTop:2,"&:hover":{color:"white",backgroundColor:"#1976d2"}}},8445:function(e,n,a){a.r(n),a.d(n,{default:function(){return w}});var r=a(6907),t=a(5705),l=a(9434),i=a(403),o=a(4554),s=a(3044),u=a(890),d=a(6151),m=a(9273),h=a(6727),c=h.Ry().shape({name:h.Z_().required("Name required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Invalid name"),email:h.Z_().required("Email required").email("Invalid email").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email"'),password:h.Z_().min(8).required("Password required").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"Invalid password. It must contain letters and numbers only.")}),p=a(9548),f=a(6351),x=a(3528),g=a(6243),v=a(3329),b=function(){var e=(0,l.v9)(f.xU),n=(0,l.I0)();return(0,v.jsxs)(o.Z,{sx:g.uh,children:[(0,v.jsx)(s.Z,{sx:g.Jj,children:(0,v.jsx)(i.Z,{})}),(0,v.jsx)(u.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,v.jsx)(t.J9,{initialValues:{name:"",email:"",password:""},validationSchema:c,onSubmit:function(e,a){n((0,m.y1)(e)),a.resetForm()},children:(0,v.jsxs)(t.l0,{style:{textAlign:"center"},children:[(0,v.jsx)(t.gN,{component:p.wd}),(0,v.jsx)(t.gN,{component:p.s8}),(0,v.jsx)(t.gN,{component:p.ZI}),(0,v.jsx)(d.Z,{disabled:e,type:"submit",variant:"outlined",sx:g.EI,children:e?(0,v.jsx)(x.u,{}):"Sign Up"})]})})]})},w=function(){return(0,v.jsxs)(r.B6,{children:[(0,v.jsx)(r.ql,{children:(0,v.jsx)("title",{children:"Sign Up"})}),(0,v.jsx)(b,{})]})}}}]);
//# sourceMappingURL=445.669841f3.chunk.js.map