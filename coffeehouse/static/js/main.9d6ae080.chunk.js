(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(t,n,e){t.exports=e(174)},113:function(t,n,e){t.exports=e.p+"static/media/logo.16145580.png"},135:function(t,n){},137:function(t,n){},174:function(t,n,e){"use strict";e.r(n);var r=e(4),c=e.n(r),o=e(96),i=e.n(o),u=e(50),a=e(12),l=e(3),s=e.n(l),b=e(6),f=e(5),d=e(21);e(110);d.a.initializeApp({apiKey:"AIzaSyBaopEUsgXEr5djCqkDeNrGPpM_vKhPQFI",authDomain:"hackhw21.firebaseapp.com",projectId:"hackhw21",storageBucket:"hackhw21.appspot.com",messagingSenderId:"583442620722",appId:"1:583442620722:web:2f0c4919e57bdee40bb72b"});var p=Object(r.createContext)();function g(t){var n=t.children,e=function(){var t=Object(r.useState)(null),n=Object(f.a)(t,2),e=n[0],c=n[1],o=function(){var t=Object(b.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.auth().setPersistence(d.a.auth.Auth.Persistence.LOCAL);case 2:return t.next=4,d.a.auth().signInAnonymously();case 4:return n=t.sent,c(n.user),t.abrupt("return",n.user);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){var t=d.a.auth().onAuthStateChanged((function(t){c(t||!1)}));return function(){return t()}}),[]),Object(r.useEffect)((function(){o()}),[]),{user:e,signin:function(t,n){return d.a.auth().signInWithEmailAndPassword(t,n).then((function(t){return c(t.user),t.user}))},signup:function(t,n){return d.a.auth().createUserWithEmailAndPassword(t,n).then((function(t){return c(t.user),t.user}))},signinAnonymous:o,signout:function(){return d.a.auth().signOut().then((function(){c(!1)}))},sendPasswordResetEmail:function(t){return d.a.auth().sendPasswordResetEmail(t).then((function(){return!0}))},confirmPasswordReset:function(t,n){return d.a.auth().confirmPasswordReset(t,n).then((function(){return!0}))}}}();return c.a.createElement(p.Provider,{value:e},n)}var m=function(){return Object(r.useContext)(p)};var O=function(t){m().signinAnonymous;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){var n=function(t){for(var n="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZ".length,r=0;r<t;r++)n+="ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random()*e));return n}(6);t.history.push("/room/".concat(n))}},"Create Room"))},j=e(11),h=e(13),v=e(2),C=(e(113),e(52)),k=e(27),y=j.a.div({display:"flex",flexDirection:"row",alignItems:"center"}),w=j.a.div({display:"flex",flexDirection:"row",alignItems:"center"});var x=function(t){var n=t.hide;return Object(v.c)("div",{css:["border-color: #313130; border-bottom-width: 0.2px;",{display:"flex",top:"0px",left:"0px"}]},Object(v.c)("div",{css:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",padding:"1.25rem"}},Object(v.c)(y,null,Object(v.c)(k.a,{css:{width:"2rem",height:"2rem"}}),Object(v.c)("span",{css:{paddingLeft:"1rem",fontWeight:"900",fontSize:"1.875rem",lineHeight:"2.25rem"}},"Coffeehouse")),Object(v.c)(w,null,Object(v.c)("button",{onClick:n,css:{width:"2.5rem",height:"2.5rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",":focus":{outline:"2px solid transparent",outlineOffset:"2px"}}},Object(v.c)(C.a,{css:{width:"100%",height:"100%",display:"block"}})))))},E=e(97);var D=function(){Object(a.f)();var t=Object(E.a)(window.location.href),n=Object(f.a)(t,2),e=(n[0],n[1]),c=Object(r.useState)("Copy Link"),o=Object(f.a)(c,2),i=o[0],u=o[1];return Object(v.c)("div",{css:[{display:"flex"},"border-color: #313130; border-bottom-width: 0.2px;"]},Object(v.c)("div",{css:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",padding:"1.25rem"}},Object(v.c)("div",{css:{display:"flex",flexDirection:"column",justifyContent:"center"}},Object(v.c)("p",{css:{display:"inline-flex",fontSize:"0.75rem",lineHeight:"1rem"}},"Ready to start jamming with the boys? Send this link to your friends!"),Object(v.c)("a",{css:{display:"inline-block",fontSize:"0.75rem",lineHeight:"1rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgba(37, 99, 235, var(--tw-text-opacity))",paddingTop:"0.5rem"},href:window.location.href},window.location.href)),Object(v.c)("div",{css:{display:"flex",flexDirection:"column",alignItems:"center",marginLeft:"2.5rem",flexShrink:"0"}},Object(v.c)("button",{onClick:function(){e(),u("Copied!"),setTimeout((function(){return u("Copy Link")}),3e3)},css:{"--tw-bg-opacity":"1",backgroundColor:"rgba(107, 114, 128, var(--tw-bg-opacity))",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingRight:"1rem",paddingLeft:"0.75rem",borderRadius:"9999px",":focus":{outline:"2px solid transparent",outlineOffset:"2px"},":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(75, 85, 99, var(--tw-bg-opacity))"},transitionProperty:"background-color, border-color, color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",cursor:"pointer"}},Object(v.c)("span",{css:{display:"flex",flexDirection:"row",alignItems:"center"}},Object(v.c)(C.b,{css:{width:"1rem",height:"1rem"}}),Object(v.c)("p",{css:{fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"700",textTransform:"uppercase",marginLeft:"0.5rem"}},i))))))},S=e(1),A=e(99),F=e.n(A);function I(t){return"https://www.gravatar.com/avatar/".concat(F()(t),"?d=identicon")}var B=Object(r.createContext)({otherParticipants:[],self:null}),R=function t(n,e,r){Object(S.a)(this,t),this.id=n,this.status=e,this.displayName=r,this.profileUrl=I(this.id)};function G(){return Object(r.useContext)(B)}function P(t){var n=t.children,e=function(){var t=Object(r.useState)([]),n=Object(f.a)(t,2),e=n[0],c=n[1],o=Object(r.useState)(null),i=Object(f.a)(o,2),u=i[0],a=i[1],l=m().user;return Object(r.useEffect)((function(){l&&a(new R(l.uid,"online",l.displayName,I(l.uid)))}),[l]),{otherParticipants:e,updateParticipants:function(t){var n=t.map((function(t){return new R(t.peerID,"online","John Smith")}));c(n)},self:u}}();return c.a.createElement(B.Provider,{value:e},n)}var T=j.a.span((function(t){var n=t.status;return[{position:"relative",display:"inline-flex",borderRadius:"9999px",height:"0.75rem",width:"0.75rem"},"online"===n&&{"--tw-bg-opacity":"1",backgroundColor:"rgba(16, 185, 129, var(--tw-bg-opacity))"},"offline"===n&&{"--tw-bg-opacity":"1",backgroundColor:"rgba(239, 68, 68, var(--tw-bg-opacity))"}]}));function z(t){var n=t.profile;return Object(v.c)("div",{css:{display:"flex"}},Object(v.c)("div",{css:{display:"flex",flexDirection:"row",width:"100%",padding:"1.25rem",justifyContent:"space-between"}},Object(v.c)("div",{css:{display:"flex",flexDirection:"row"}},Object(v.c)("span",{css:{position:"relative",display:"inline-flex"}},Object(v.c)("img",{css:{display:"inline-flex",height:"3rem",width:"3rem",borderRadius:"9999px"},src:n.profileUrl,alt:"".concat(n.displayName," photo")}),Object(v.c)("span",{css:{display:"flex",position:"absolute",height:"0.75rem",width:"0.75rem",top:"0.25rem",right:"0.25rem",marginTop:"-0.25rem",marginRight:"-0.25rem"}},Object(v.c)(T,{status:n.status}))),Object(v.c)("div",{css:{display:"flex",flexDirection:"column",marginLeft:"1rem",justifyContent:"space-between"}},Object(v.c)("span",{css:{display:"inline-flex",fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"300",textTransform:"capitalize"}},n.status),Object(v.c)("span",{css:{display:"inline-flex",fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"700"}},"".concat(n.displayName).concat(n.roommaster?" (Roommaster)":"")))),Object(v.c)("div",{css:{display:"flex",paddingTop:"0.5rem",paddingBottom:"0.5rem"}},Object(v.c)("button",{css:{display:"flex",alignItems:"center",borderRadius:"9999px",fontWeight:"700",fontSize:"1.125rem",lineHeight:"1.75rem","--tw-border-opacity":"1",borderColor:"rgba(255, 255, 255, var(--tw-border-opacity))",borderWidth:"2px",paddingLeft:"1.25rem",paddingRight:"1.25rem",transitionProperty:"background-color, border-color, color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":focus":{outline:"2px solid transparent",outlineOffset:"2px"},":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(19, 17, 18, var(--tw-text-opacity))"}}},Object(v.c)("span",{css:{display:"inline-block",fontWeight:"700",letterSpacing:"-0.025em",fontSize:"0.875rem",lineHeight:"1.25rem",textTransform:"uppercase"}},"Kick")))))}function L(t){return Object(v.c)(z,t)}function M(t){var n=t.profiles,e=G().self;return console.log(e),Object(v.c)("div",{css:{display:"flex",flexDirection:"column"}},!!e&&Object(v.c)(L,{profile:e}),n.map((function(t){return Object(v.c)(z,{profile:t,key:t.id})})))}var N,H,W,J=function(){var t=G().otherParticipants;return Object(v.c)("div",{css:[{display:"flex"},"border-color: #313130; border-bottom-width: 0.2px;"]},Object(v.c)("div",{css:{display:"flex",flexDirection:"column",width:"100%"}},Object(v.c)("div",{css:["background-color: #1E1F1F;",{display:"flex",width:"100%",paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"1.25rem",paddingRight:"1.25rem"}]},Object(v.c)("h3",{css:{fontSize:"0.75rem",lineHeight:".75rem",fontWeight:"700",textTransform:"uppercase"}},"Participants")),Object(v.c)(M,{profiles:t})))},U=j.a.div((function(t){var n=t.visible;return[{"--tw-bg-opacity":"1",backgroundColor:"rgba(19, 17, 18, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",minHeight:"100vh",display:"flex",flexDirection:"column",overflow:"hidden"},Object(v.b)(N||(N=Object(h.a)(["width: 26.75rem; border-color: #313130; border-right-width: 0.2px;"]))),Object(v.b)(H||(H=Object(h.a)(["transition: margin-left 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s"]))),n?"":Object(v.b)(W||(W=Object(h.a)(["margin-left: -26.75rem;"])))]})),_=j.a.div((function(){return[{overflowY:"auto",display:"flex",flexDirection:"column"}]})),q=j.a.div((function(t){return[{zIndex:"50"},t.visible?{display:"none"}:""]}));function V(t){var n=t.show,e=t.visible;return Object(v.c)(q,{visible:e},Object(v.c)("div",{css:{position:"fixed",top:"2.5rem",left:"2.5rem",display:"flex",alignItems:"center",padding:"1.25rem",borderRadius:"9999px","--tw-bg-opacity":"0.9",backgroundColor:"rgba(19, 17, 18, var(--tw-bg-opacity))"}},Object(v.c)("button",{onClick:n,css:{":focus":{outline:"2px solid transparent",outlineOffset:"2px"},"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}},Object(v.c)(k.a,{css:{width:"2rem",height:"2rem"}}))))}var K,Y,X=function(){var t=Object(r.useState)(!0),n=Object(f.a)(t,2),e=n[0],c=n[1];return Object(v.c)(U,{visible:e},Object(v.c)(x,{hide:function(){return c(!1)}}),Object(v.c)(_,null,Object(v.c)(D,null),Object(v.c)(J,null)),Object(v.c)(V,{visible:e,show:function(){return c(!0)}}))},Z=e(7),Q=e(46),$=j.a.div((function(t){var n=t.letter;return[Object(v.b)(K||(K=Object(h.a)(["grid-area: "," / "," / "," / ",";"])),n,n,n,n),{height:"100%",width:"100%",transitionProperty:"all",transitionTimingFunction:"linear",transitionDuration:"200ms"}]})),tt=j.a.div((function(t){return Object(Q.a)(t),[Object(v.b)(Y||(Y=Object(h.a)(["transform: translateZ(1px) scaleX(-1);"]))),{height:"100%",width:"100%"}]}));var nt,et,rt=function(t){var n=t.peer,e=t.grid,c=Object(r.useRef)();return Object(r.useEffect)((function(){n.on("stream",(function(t){c.current.srcObject=t}))}),[]),Object(v.c)($,{letter:e},Object(v.c)(tt,null,Object(v.c)("video",{onContextMenu:function(t){return t.preventDefault()},ref:c,css:{width:"100%",objectFit:"cover",height:"100%"},playsInline:!0,autoPlay:!0})))},ct=j.a.div((function(t){return Object(Q.a)(t),[Object(v.b)(nt||(nt=Object(h.a)(["grid-area: A / A / A / A;"]))),{height:"100%",width:"100%",transitionProperty:"all",transitionTimingFunction:"linear",transitionDuration:"200ms"}]})),ot=j.a.div((function(t){return Object(Q.a)(t),[Object(v.b)(et||(et=Object(h.a)(["transform: translateZ(1px) scaleX(-1);"]))),{height:"100%",width:"100%"}]})),it=c.a.forwardRef((function(t,n){return Object(v.c)(ct,null,Object(v.c)(ot,null,Object(v.c)("video",{id:"selfAudio",onContextMenu:function(t){return t.preventDefault()},ref:n,css:{width:"100%",objectFit:"cover",height:"100%"},muted:!0,playsInline:!0,autoPlay:!0})))})),ut=e(63),at=e.n(ut),lt=e(100),st=e.n(lt);function bt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;switch(t){case 1:return'"A"';case 2:return'"B A"';case 3:return'"B A" "C C"';case 4:return'"B A" "D C"';case 5:return'"E B A" "D D C"';case 6:return'"E B A" "F D C"';case 7:return'"G E B A" "F D D C"';case 8:return'"G E B A" "H F D C"';default:throw new Error("Cannot have more than 8 people")}}function ft(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return t<3?1:2}function dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;switch(t){case 1:return 1;case 2:case 3:case 4:return 2;case 5:case 6:return 3;case 7:case 8:return 4;default:throw new Error("Cannot have more than 8 people")}}var pt=Object(r.createContext)();function gt(){return Object(r.useContext)(pt)}function mt(t){var n=t.children,e=function(){var t=Object(r.useState)(null),n=Object(f.a)(t,2),e=n[0],c=n[1],o=Object(r.useState)(!0),i=Object(f.a)(o,2),u=i[0],a=i[1],l=Object(r.useRef)([]),s=Object(r.useState)(0),b=Object(f.a)(s,2),d=b[0],p=b[1];function g(t,n){p(n),c(t)}return{uri:e,playerRunning:u,songEnded:function(t){l.current.shift(),l.current.length>0?(g(l.current[0],t),a(!0)):a(!1)},playSong:g,songqueue:l,startPlayingSong:d,setStartPlayingSong:p,queueSong:function(t){l.current.push(t)},setPlaying:a}}();return c.a.createElement(pt.Provider,{value:e},n)}var Ot,jt,ht,vt=e(30),Ct="ABCDEFGHIJ".split(""),kt=j.a.div((function(t){var n=t.num,e=void 0===n?1:n;return[{display:"grid",height:"100%",width:"100%"},Object(v.b)(Ot||(Ot=Object(h.a)(["grid-template-rows: repeat(",", calc(","vh));"])),ft(e),100/ft(e)),Object(v.b)(jt||(jt=Object(h.a)(["grid-template-columns: repeat(",", 1fr);"])),dt(e)),Object(v.b)(ht||(ht=Object(h.a)(["grid-template-areas: ",";"])),bt(e))]})),yt={video:{height:720,width:1280,frameRate:30},audio:!0};var wt,xt=function(t){var n=t.userVideo,e=Object(r.useState)([{}]),o=Object(f.a)(e,2),i=o[0],u=o[1],l=Object(r.useState)([]),s=Object(f.a)(l,2),b=s[0],d=s[1],p=Object(r.useRef)(),g=Object(r.useRef)([]),m=Object(a.g)().roomID,O=G(),j=(O.participants,O.updateParticipants),h=gt(),C=h.playSong,k=(h.songEnded,h.queueSong),y=h.songqueue,w=(new vt.f).toDestination(),x=(new vt.c).toDestination(),E=(new vt.a).toDestination(),D=(new vt.d).toDestination(),A=(new vt.b).toDestination(),F=(new vt.e).toDestination(),I=[w,x,E,D,A,F],B=[],R=[],P=function t(n,e,r){Object(S.a)(this,t);for(var c=0,o=0;o<I.length;o++)if(I[o]==r){c=o;break}this.note=n,this.time=e,this.synth=c};function T(t){return{text:t.sender+": "+t.message}}Object(r.useEffect)((function(){p.current=st.a.connect(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_HOST_SERVER||"24.205.76.29:64198"),navigator.mediaDevices.getUserMedia(yt).then((function(t){n.current.srcObject=t,p.current.emit("join room",m),p.current.on("all users",(function(n){var e=[];n.forEach((function(n){var r=function(t,n,e){var r=new at.a({initiator:!0,trickle:!1,stream:e});return r.on("signal",(function(e){p.current.emit("sending signal",{userToSignal:t,callerID:n,signal:e})})),r}(n,p.current.id,t);g.current.push({peerID:n,peer:r}),e.push({peerID:n,peer:r})})),d(e)})),p.current.on("user joined",(function(n){var e=function(t,n,e){var r=new at.a({initiator:!1,trickle:!1,stream:e});return r.on("signal",(function(t){p.current.emit("returning signal",{signal:t,callerID:n})})),r.signal(t),r}(n.signal,n.callerID,t);g.current.push({peerID:n.callerID,peer:e});var r={peer:e,peerID:n.callerID};d((function(t){return[].concat(Object(Z.a)(t),[r])}))})),p.current.on("receiving returned signal",(function(t){g.current.find((function(n){return n.peerID===t.id})).peer.signal(t.signal)})),p.current.on("user left",(function(t){var n=g.current.find((function(n){return n.peerID===t}));n&&n.peer.destroy();var e=g.current.filter((function(n){return n.peerID!==t}));g.current=e,d(e)})),p.current.on("linkFirst",(function(t){var n=JSON.parse(t);y.current.splice(0,0,n.url),C(n.url,n.time)})),p.current.on("linkEnd",(function(t){var n=JSON.parse(t);k(n.url),1==y.current.length&&C(n.url,n.time)})),p.current.on("receiving message",(function(t){var n=JSON.parse(t);u((function(t){return[].concat(Object(Z.a)(t),[T({sender:n.sender,message:n.message,isYou:!1})])}))})),p.current.on("noteLoop",(function(t){console.log(t),JSON.parse(t).forEach((function(t){R.includes(t)||R.push(t)})),R.push(JSON.parse(t))})),p.current.on("noteReset",(function(t){R=[]}))})).catch((function(t){console.log(t)}))}),[]),Object(r.useEffect)((function(){j(g.current)}),[b]);var z=Date.now(),L=0,M=0;return Object(v.c)(c.a.Fragment,null,Object(v.c)(c.a.Fragment,null,Object(v.c)((function(){setTimeout((function(){setInterval((function(){var t,n,e=Date.now()-z;for(Math.floor(e/1e3)>=4&&(z+=4e3,B=[],M=0),L=e,t=0;t<R.length;t++)for(n=0;n<R[t].length;n++)Math.abs(R[t][n].time-L)<10&&(console.dir("match"),I[R[t][n].synth].triggerAttackRelease(R[t][n].note,"32n"));parseInt(L/250)>M&&M++}),10)}),Date.now()%4e3);var t=function(t,n){var e=new P(t,L,n),r=!0;try{if(B.length>0){var c=vt.g(),o=10*parseInt(25-L/10%25);n.triggerAttackRelease(t,"32n",c+parseFloat(o)/1e3),250*Math.round((L+o)/250)==B[B.length-1].time&&(r=!1),e.time=250*Math.round((L+o)/250)}else{var i=vt.g(),u=10*parseInt(25-L/10%25);n.triggerAttackRelease(t,"32n",i+parseFloat(u)/1e3),e.time=250*Math.round((L+u)/250)}}catch(a){console.log("tone problem again")}r&&B.push(e)};return Object(v.c)("div",{style:{zIndex:"100000",position:"absolute",top:"350px",left:"30px"}},Object(v.c)("br",null),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){R.includes(B)||(R.push(B),p.current.emit("noteLoop",JSON.stringify(B)))}},"Loop this"),Object(v.c)("br",null),Object(v.c)("p",null,"Default:"),Object(v.c)("button",{onClick:function(){return t("D5",w)}},"D5"),Object(v.c)("button",{onClick:function(){return t("E5",w)}},"E5"),Object(v.c)("button",{onClick:function(){return t("F5",w)}},"F5"),Object(v.c)("button",{onClick:function(){return t("G5",w)}},"G5"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("G4",w)}},"G4"),Object(v.c)("button",{onClick:function(){return t("A4",w)}},"A4"),Object(v.c)("button",{onClick:function(){return t("B4",w)}},"B4"),Object(v.c)("button",{onClick:function(){return t("C5",w)}},"C5"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("C4",w)}},"C4"),Object(v.c)("button",{onClick:function(){return t("D4",w)}},"D4"),Object(v.c)("button",{onClick:function(){return t("E4",w)}},"E4"),Object(v.c)("button",{onClick:function(){return t("F4",w)}},"F4"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("F3",w)}},"F3"),Object(v.c)("button",{onClick:function(){return t("G3",w)}},"G3"),Object(v.c)("button",{onClick:function(){return t("A3",w)}},"A3"),Object(v.c)("button",{onClick:function(){return t("B3",w)}},"B3"),Object(v.c)("br",null),Object(v.c)("p",null,"FM:"),Object(v.c)("button",{onClick:function(){return t("D5",x)}},"D5"),Object(v.c)("button",{onClick:function(){return t("E5",x)}},"E5"),Object(v.c)("button",{onClick:function(){return t("F5",x)}},"F5"),Object(v.c)("button",{onClick:function(){return t("G5",x)}},"G5"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("G4",x)}},"G4"),Object(v.c)("button",{onClick:function(){return t("A4",x)}},"A4"),Object(v.c)("button",{onClick:function(){return t("B4",x)}},"B4"),Object(v.c)("button",{onClick:function(){return t("C5",x)}},"C5"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("C4",x)}},"C4"),Object(v.c)("button",{onClick:function(){return t("D4",x)}},"D4"),Object(v.c)("button",{onClick:function(){return t("E4",x)}},"E4"),Object(v.c)("button",{onClick:function(){return t("F4",x)}},"F4"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("F3",x)}},"F3"),Object(v.c)("button",{onClick:function(){return t("G3",x)}},"G3"),Object(v.c)("button",{onClick:function(){return t("A3",x)}},"A3"),Object(v.c)("button",{onClick:function(){return t("B3",x)}},"B3"),Object(v.c)("br",null),Object(v.c)("p",null,"AM:"),Object(v.c)("button",{onClick:function(){return t("D5",E)}},"D5"),Object(v.c)("button",{onClick:function(){return t("E5",E)}},"E5"),Object(v.c)("button",{onClick:function(){return t("F5",E)}},"F5"),Object(v.c)("button",{onClick:function(){return t("G5",E)}},"G5"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("G4",E)}},"G4"),Object(v.c)("button",{onClick:function(){return t("A4",E)}},"A4"),Object(v.c)("button",{onClick:function(){return t("B4",E)}},"B4"),Object(v.c)("button",{onClick:function(){return t("C5",E)}},"C5"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("C4",E)}},"C4"),Object(v.c)("button",{onClick:function(){return t("D4",E)}},"D4"),Object(v.c)("button",{onClick:function(){return t("E4",E)}},"E4"),Object(v.c)("button",{onClick:function(){return t("F4",E)}},"F4"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("F3",E)}},"F3"),Object(v.c)("button",{onClick:function(){return t("G3",E)}},"G3"),Object(v.c)("button",{onClick:function(){return t("A3",E)}},"A3"),Object(v.c)("button",{onClick:function(){return t("B3",E)}},"B3"),Object(v.c)("br",null),Object(v.c)("p",null,"Mono:"),Object(v.c)("button",{onClick:function(){return t("D5",D)}},"D5"),Object(v.c)("button",{onClick:function(){return t("E5",D)}},"E5"),Object(v.c)("button",{onClick:function(){return t("F5",D)}},"F5"),Object(v.c)("button",{onClick:function(){return t("G5",D)}},"G5"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("G4",D)}},"G4"),Object(v.c)("button",{onClick:function(){return t("A4",D)}},"A4"),Object(v.c)("button",{onClick:function(){return t("B4",D)}},"B4"),Object(v.c)("button",{onClick:function(){return t("C5",D)}},"C5"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("C4",D)}},"C4"),Object(v.c)("button",{onClick:function(){return t("D4",D)}},"D4"),Object(v.c)("button",{onClick:function(){return t("E4",D)}},"E4"),Object(v.c)("button",{onClick:function(){return t("F4",D)}},"F4"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("F3",D)}},"F3"),Object(v.c)("button",{onClick:function(){return t("G3",D)}},"G3"),Object(v.c)("button",{onClick:function(){return t("A3",D)}},"A3"),Object(v.c)("button",{onClick:function(){return t("B3",D)}},"B3"),Object(v.c)("br",null),Object(v.c)("p",null,"Duo:"),Object(v.c)("button",{onClick:function(){return t("D5",A)}},"D5"),Object(v.c)("button",{onClick:function(){return t("E5",A)}},"E5"),Object(v.c)("button",{onClick:function(){return t("F5",A)}},"F5"),Object(v.c)("button",{onClick:function(){return t("G5",A)}},"G5"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("G4",A)}},"G4"),Object(v.c)("button",{onClick:function(){return t("A4",A)}},"A4"),Object(v.c)("button",{onClick:function(){return t("B4",A)}},"B4"),Object(v.c)("button",{onClick:function(){return t("C5",A)}},"C5"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("C4",A)}},"C4"),Object(v.c)("button",{onClick:function(){return t("D4",A)}},"D4"),Object(v.c)("button",{onClick:function(){return t("E4",A)}},"E4"),Object(v.c)("button",{onClick:function(){return t("F4",A)}},"F4"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("F3",A)}},"F3"),Object(v.c)("button",{onClick:function(){return t("G3",A)}},"G3"),Object(v.c)("button",{onClick:function(){return t("A3",A)}},"A3"),Object(v.c)("button",{onClick:function(){return t("B3",A)}},"B3"),Object(v.c)("br",null),Object(v.c)("p",null,"Pluck:"),Object(v.c)("button",{onClick:function(){return t("D5",F)}},"D5"),Object(v.c)("button",{onClick:function(){return t("E5",F)}},"E5"),Object(v.c)("button",{onClick:function(){return t("F5",F)}},"F5"),Object(v.c)("button",{onClick:function(){return t("G5",F)}},"G5"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("G4",F)}},"G4"),Object(v.c)("button",{onClick:function(){return t("A4",F)}},"A4"),Object(v.c)("button",{onClick:function(){return t("B4",F)}},"B4"),Object(v.c)("button",{onClick:function(){return t("C5",F)}},"C5"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("C4",F)}},"C4"),Object(v.c)("button",{onClick:function(){return t("D4",F)}},"D4"),Object(v.c)("button",{onClick:function(){return t("E4",F)}},"E4"),Object(v.c)("button",{onClick:function(){return t("F4",F)}},"F4"),Object(v.c)("br",null),Object(v.c)("button",{onClick:function(){return t("F3",F)}},"F3"),Object(v.c)("button",{onClick:function(){return t("G3",F)}},"G3"),Object(v.c)("button",{onClick:function(){return t("A3",F)}},"A3"),Object(v.c)("button",{onClick:function(){return t("B3",F)}},"B3"))}),null),Object(v.c)((function(){var t={message:""};return Object(v.c)("form",{id:"chatEnter",onSubmit:function(n){var e;n.preventDefault(),"-help"==(e=t.message)?u((function(t){return[].concat(Object(Z.a)(t),[T({sender:"List of Commands",message:"-play [song title]\n-play [song title]\n-queue [song title]\n-skip",isYou:!1})])})):("-skip"==e?p.current.emit("skip",0):"-play "==e.toLowerCase().substring(0,6)?""!=e.substring(6)&&p.current.emit("getLink",JSON.stringify({search:e.substring(6),type:"linkFirst"})):"-queue "==e.toLowerCase().substring(0,7)&&""!=e.substring(7)&&p.current.emit("getLink",JSON.stringify({search:e.substring(6),type:"linkEnd"})),p.current.emit("sending message",e),u((function(t){return[].concat(Object(Z.a)(t),[T({sender:"You",message:e,isYou:!0})])})))}},Object(v.c)("input",{type:"text",onChange:function(n){t.message=n.target.value.trim()},placeholder:"Enter message"}))}),null),Object(v.c)("div",{css:{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}},i.map((function(t,n){return Object(v.c)("p",{key:n},t.text)})))),Object(v.c)(kt,{num:g.current.length+1},Object(v.c)(it,{ref:n}),g.current.map((function(t,n){return Object(v.c)(rt,{peer:t.peer,key:"".concat(t.peerID).concat(n),grid:Ct[n+1]})}))))},Et=e(101),Dt=j.a.div((function(){return[{alignSelf:"center",position:"absolute","--tw-bg-opacity":"0",backgroundColor:"rgba(19, 17, 18, var(--tw-bg-opacity))",transitionProperty:"background-color, border-color, color, fill, stroke",transitionTimingFunction:"linear",transitionDuration:"500ms",bottom:"0px",":hover":{"--tw-bg-opacity":"0.8"},zIndex:"50",borderRadius:"1rem",marginBottom:"2.5rem"},Object(v.b)(wt||(wt=Object(h.a)(["transform: translateZ(1px);"])))]})),St=j.a.div((function(){return[{display:"inline-block",position:"relative",paddingTop:"1.25rem",paddingBottom:"1.25rem",paddingLeft:"0.625rem",paddingRight:"0.625rem"}]})),At=c.a.forwardRef((function(t,n){return Object(v.c)(St,{css:{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}},Object(v.c)("span",{css:{display:"flex",paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"}},Object(v.c)("button",Object.assign({css:{":focus":{outline:"2px solid transparent",outlineOffset:"2px"}}},t,{ref:n}),t.children)))}));function Ft(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(r.useState)(t),e=Object(f.a)(n,2),c=e[0],o=e[1],i=function(){o(!c)};return[c,i]}var It=function(t){var n=t.userVideo,e=Ft(!1),c=Object(f.a)(e,2),o=c[0],i=c[1],u=Ft(!0),a=Object(f.a)(u,2),l=a[0],s=a[1],b=Ft(!1),d=Object(f.a)(b,2),p=d[0],g=d[1];return Object(r.useEffect)((function(){n.current&&n.current.srcObject&&n.current.srcObject.getAudioTracks()[0]&&(n.current.srcObject.getAudioTracks()[0].enabled=!o)}),[o]),Object(r.useEffect)((function(){n.current&&n.current.srcObject&&n.current.srcObject.getVideoTracks()[0]&&(n.current.srcObject.getVideoTracks()[0].enabled=l)}),[l]),Object(r.useEffect)((function(){var t=document.querySelectorAll("video, audio");[].forEach.call(t,(function(t){"selfAudio"!==t.id&&(t.muted=p)}))}),[p]),Object(v.c)(Dt,null,Object(v.c)(At,{onClick:i},o?Object(v.c)(k.d,{css:{width:"2rem",height:"2rem"}}):Object(v.c)(k.c,{css:{width:"2rem",height:"2rem"}})),Object(v.c)(At,{onClick:s},l?Object(v.c)(k.e,{css:{width:"2rem",height:"2rem"}}):Object(v.c)(k.f,{css:{width:"2rem",height:"2rem"}})),Object(v.c)(At,{onClick:g},p?Object(v.c)(Et.a,{css:{width:"2rem",height:"2rem"}}):Object(v.c)(k.b,{css:{width:"2rem",height:"2rem"}})))};var Bt=function(){var t=Object(r.useRef)();return Object(v.c)("div",{css:{display:"flex",flex:"1 1 0%",position:"relative",overflow:"hidden",height:"100%",flexDirection:"column",width:"100%","--tw-bg-opacity":"1",backgroundColor:"rgba(19, 17, 18, var(--tw-bg-opacity))"}},Object(v.c)(xt,{userVideo:t}),Object(v.c)(It,{userVideo:t}))},Rt=j.a.div({height:"100vh",width:"100vw",display:"flex",flexDirection:"row","--tw-bg-opacity":"1",backgroundColor:"rgba(19, 17, 18, var(--tw-bg-opacity))"});var Gt=function(){return c.a.createElement(Rt,null,c.a.createElement(P,null,c.a.createElement(Rt,null,c.a.createElement(X,null),c.a.createElement(Bt,null))))},Pt=e(102),Tt=e.n(Pt);var zt=function(){var t=gt(),n=t.uri,e=t.playerRunning,r=t.songEnded,o=t.setPlaying,i=(t.songqueue,t.startPlayingSong);return t.setStartPlayingSong,c.a.createElement(Tt.a,{url:n,playing:e,height:"0px",width:"0px",onReady:function(){return o(!1),void setTimeout((function(){o(!0)}),Math.max(i-Date.now(),0))},onEnded:r})};var Lt,Mt=function(){return c.a.createElement(u.a,null,c.a.createElement(a.c,null,c.a.createElement(a.a,{path:"/",exact:!0,component:O}),c.a.createElement(a.a,{path:"/room/:roomID"},c.a.createElement(mt,null,c.a.createElement(zt,null),c.a.createElement(Gt,null)))))},Nt=function(){return c.a.createElement(v.a,{styles:Object(v.b)(Lt||(Lt=Object(h.a)(['\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  :root {\n    -moz-tab-size: 4;\n    tab-size: 4;\n  }\n\n  html {\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    margin: 0;\n  }\n\n  body {\n    font-family: system-ui, -apple-system, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\';\n  }\n\n  hr {\n    height: 0;\n    color: inherit;\n  }\n\n  abbr[title] {\n    text-decoration: underline dotted;\n  }\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  code,\n  kbd,\n  samp,\n  pre {\n    font-family: ui-monospace, SFMono-Regular, Consolas, \'Liberation Mono\', Menlo, monospace;\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  table {\n    text-indent: 0;\n    border-color: inherit;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    margin: 0;\n  }\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  button,\n  [type=\'button\'],\n  [type=\'reset\'],\n  [type=\'submit\'] {\n    -webkit-appearance: button;\n  }\n\n  ::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  :-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n  legend {\n    padding: 0;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  ::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type=\'search\'] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px;\n  }\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n\n  blockquote,\n  dl,\n  dd,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  hr,\n  figure,\n  p,\n  pre {\n    margin: 0;\n  }\n\n  button {\n    background-color: transparent;\n    background-image: none;\n  }\n\n  button:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n\n  fieldset {\n    margin: 0;\n    padding: 0;\n  }\n\n  ol,\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  html {\n    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    line-height: 1.5;\n  }\n\n  body {\n    font-family: inherit;\n    line-height: inherit;\n  }\n\n  *,\n  ::before,\n  ::after {\n    box-sizing: border-box;\n    border-width: 0;\n    border-style: solid;\n    border-color: #e5e7eb;\n  }\n\n  hr {\n    border-top-width: 1px;\n  }\n\n  img {\n    border-style: solid;\n  }\n\n  textarea {\n    resize: vertical;\n  }\n\n  input::placeholder,\n  textarea::placeholder {\n    color: #9ca3af;\n  }\n\n  button,\n  [role="button"] {\n    cursor: pointer;\n  }\n\n  table {\n    border-collapse: collapse;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: inherit;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    padding: 0;\n    line-height: inherit;\n    color: inherit;\n  }\n\n  pre,\n  code,\n  kbd,\n  samp {\n    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  }\n\n  img,\n  svg,\n  video,\n  canvas,\n  audio,\n  iframe,\n  embed,\n  object {\n    display: block;\n    vertical-align: middle;\n  }\n\n  img,\n  video {\n    max-width: 100%;\n    height: auto;\n  }\n\n\n      @keyframes spin {\n          to { \n            transform: rotate(360deg);\n          }\n        }\n      @keyframes ping {\n          75%, 100% { \n            transform: scale(2); opacity: 0;\n          }\n        }\n      @keyframes pulse {\n          50% { \n            opacity: .5;\n          }\n        }\n      @keyframes bounce {\n          0%, 100% { \n            transform: translateY(-25%); animationTimingFunction: cubic-bezier(0.8,0,1,1);\n          }\n        \n          50% { \n            transform: none; animationTimingFunction: cubic-bezier(0,0,0.2,1);\n          }\n        }\n* {\n    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgba(59, 130, 246, 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n  }\n* {\n  --tw-shadow: 0 0 #0000; }\n'])))})};function Ht(){return c.a.createElement(Nt,null)}var Wt=e(64);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Wt.b,null,c.a.createElement(Wt.a,null,c.a.createElement("title",null,"Coffeehouse"),c.a.createElement("meta",{charset:"utf-8"}),c.a.createElement("meta",{name:"description",content:""})),c.a.createElement(Ht,null),c.a.createElement(g,null,c.a.createElement(Mt,null)))),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.9d6ae080.chunk.js.map