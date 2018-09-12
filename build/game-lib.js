function Controls({emit:t}){let e,i=0,s=!0;const a=t=>{i=0,e=setInterval(()=>{if(!t||!t.offsetParent)return void clearInterval(e);const a=parseInt(t.style.top);s&&a<.51*t.offsetParent.clientHeight&&(i++,t.style.top=`${a+i*px}px`)},50)},n=(n,o,h=10)=>u=>{n.classList.remove("hidden"),n.style.width=`${16*px}px`,n.style.height=`${16*px}px`,n.style.top=`${32*px}px`,n.style.left="20%",on(n,"touchstart",(a=>n=>{if(a){const n=a.offsetParent.offsetLeft+8*px,r=a.offsetParent.offsetTop+8*px,o=on(document.body,"touchmove",({changedTouches:e})=>{if(!a.offsetParent)return void off(document.body,"touchmove",o);s=!1,i=0;const{clientY:d,clientX:h}=e[0],u=Math.min(Math.max(0,h-n),a.offsetParent.clientWidth-16*px),l=Math.min(Math.max(0,d-r),.6*a.offsetParent.clientHeight-16*px);a.style.top=`${Math.round(l/px)*px}px`,a.style.left=`${Math.round(u/px)*px}px`,t("play")});on(document.body,"touchend",()=>{s=!0}),e=setInterval(()=>{if(!a.offsetParent)return void clearInterval(e);const t=parseInt(a.style.top);s&&t<.51*a.offsetParent.clientHeight&&(i++,a.style.top=`${t+i*px}px`)},50)}})(n)),a(n),t("spend",o.innerText),r.setAttribute("disabled",!0),r.classList.add("disabled"),d.setAttribute("disabled",!0),d.classList.add("disabled"),setTimeout(()=>{d.classList.remove("disabled"),r.classList.remove("disabled"),n.classList.add("hidden"),a(null)},1e3*h)},r=__("#ball"),o=__(".ball-toy");click(r,n(o,r));const d=__("#duck"),h=__(".duck-toy");click(d,n(h,d,20)),click(__("#bed"),e=>{t("upgrade")}),click(__("#feed"),e=>{t("consume")})}function DrawService(t){let e=0;t.on("char:update",t=>{this.char.state=t.asleep?"sleep":t.eating?"eat":t.sad?"sad":"idle",this.resetCharAnimation()}),t.on("react",t=>{this.queue.includes(t)||(this.queue.push(t.join("_")),setTimeout(()=>{this.queue.shift()},4e3))}),this.queue=[],this.init=(t=>(window.px=.01*t.c.width,this.char={sprite:"char_green.png",width:50*px,height:50*px,posX:.25*t.c.width,posY:.5*t.c.height-25*px,tiles:{lu:{u0:0,v0:0,u1:1,v1:1/7},ld:{u0:0,v0:1/7,u1:1,v1:2/7},ru:{u0:0,v0:0,u1:1,v1:1/7,f:1},rd:{u0:0,v0:1/7,u1:1,v1:2/7,f:1},sad:{u0:0,v0:2/7,u1:1,v1:3/7},eat1:{u0:0,v0:3/7,u1:1,v1:4/7},eat2:{u0:0,v0:4/7,u1:1,v1:5/7},eat3:{u0:0,v0:5/7,u1:1,v1:6/7},sleep:{u0:0,v0:6/7,u1:1,v1:1}},states:{idle:["lu","ld","lu","ld","ru","rd","ru","rd"],sad:["sad"],sleep:["sleep"],eat:["eat1","eat2","eat3","eat2","eat3","eat2","eat3","eat2","eat3","eat3","eat2","eat3"]}},this.icons={sprite:"mood_icons.png",width:10*px,height:10*px,posX:0,posY:t.c.height-20*px,tiles:{hunger:{offsetX:.1*t.c.width,offsetY:-30*px,u0:0,v0:0,u1:.5,v1:.5},sleep:{offsetX:.1*t.c.width,offsetY:-20*px,u0:.5,v0:0,u1:1,v1:.5},mood:{offsetX:.1*t.c.width,offsetY:-10*px,u0:0,v0:.5,u1:.5,v1:1},hungerBar:{offsetX:.2*t.c.width,offsetY:-30*px,u0:.8,v0:.8,u1:.9,v1:.9},sleepBar:{offsetX:.2*t.c.width,offsetY:-20*px,u0:.8,v0:.9,u1:.9,v1:1},moodBar:{offsetX:.2*t.c.width,offsetY:-10*px,u0:.9,v0:.8,u1:1,v1:.9}}},this.wifly={sprite:"wiflies.png",width:16*px,height:16*px,tiles:{0:{u0:0,v0:0,u1:.5,v1:1/3},1:{u0:.5,v0:0,u1:1,v1:1/3},2:{u0:0,v0:1/3,u1:.5,v1:2/3},3:{u0:.5,v0:1/3,u1:1,v1:2/3},dead0:{u0:0,v0:2/3,u1:.5,v1:1},dead1:{u0:.5,v0:2/3,u1:1,v1:1}},states:{flying:[0,1,2,3],dead:["dead0","dead1"]}},this.buzzard={sprite:"buzzard.png",width:16*px,height:16*px,tiles:{0:{u0:0,v0:0,u1:1,v1:.5},1:{u0:0,v0:.5,u1:1,v1:1},dead0:{u0:0,v0:2/3,u1:.5,v1:1},dead1:{u0:.5,v0:2/3,u1:1,v1:1}}},this.beds={sprite:"beds.png",width:64*px,height:32*px,posX:.5*t.c.width-32*px,posY:.5*t.c.height-6*px,tiles:{bed1:{u0:0,v0:0,u1:1,v1:.25},bed2:{u0:0,v0:.25,u1:1,v1:.5},bed3:{u0:0,v0:.5,u1:1,v1:.75},bed4:{u0:0,v0:.75,u1:1,v1:1}}},this.bubble={sprite:"bubble.png",width:32*px,height:32*px,posX:t.c.width-32*px,posY:.5*t.c.height-48*px},this.reactions={sprite:"reactions.png",width:10*px,height:10*px,posX:t.c.width-26*px,posY:.5*t.c.height-40*px,tiles:{smile:{u0:0,v0:0,u1:1,v1:1/8},laugh:{u0:0,v0:1/8,u1:1,v1:.25},sad:{u0:0,v0:.25,u1:1,v1:3/8},sleep:{u0:0,v0:3/8,u1:1,v1:.5},buzzard:{u0:0,v0:.5,u1:1,v1:5/8},wifly:{u0:0,v0:5/8,u1:1,v1:.75},heart:{u0:0,v0:.75,u1:1,v1:7/8},food:{u0:0,v0:7/8,u1:1,v1:1}}},this.char.state="idle",this.resetCharAnimation=(()=>{this.char.nextFrame=0,this.charInterval&&clearInterval(this.charInterval),this.charInterval=setInterval(()=>{const{nextFrame:t,tiles:e,state:i,states:s}=this.char;this.char.nextFrame=t+1,e[s[i][t+1]]||(this.char.nextFrame=0)},500)}),this.resetCharAnimation(),setInterval(()=>{e++},50),Promise.all([i(this.char,t),i(this.beds,t),i(this.icons,t),i(this.wifly,t),i(this.buzzard,t),i(this.bubble,t),i(this.reactions,t)])));const i=(t,e)=>new Promise((i,s)=>{const a=new Image;a.src=t.sprite,a.onload=(()=>{t.texture=TCTex(e.g,a,a.width,a.height),i()})});this.draw=((t,i)=>{if(!t)return;t.cls(),t.push(),t.trans(0,0),this.drawWiflies(t,i.wiflies),this.drawWiflies(t,i.deadWiflies,!0);const{tiles:a,state:n,states:r,nextFrame:o}=this.char;if(this.drawBed(t,i.bedLevel),s(t,this.char,r[n][o]),this.queue.length>0){const i=Math.ceil(e/6)%2*px,[a,n]=this.queue[0].split("_");t.trans(0,i),s(t,this.bubble),s(t,this.reactions,a),t.trans(10*px,0),s(t,this.reactions,n),t.trans(-10*px,0),t.trans(0,-i)}this.drawMoodBars(t,i),this.drawBuzzards(t,i.buzzards),t.pop(),t.flush()});const s=(t,e,i="")=>{const{tiles:s={}}=e;e.tiles&&!s[i]&&console.error(`Frame ${i} doesn't exit`);const{u0:a=0,v0:n=0,u1:r=1,v1:o=1,offsetX:d=0,offsetY:h=0,f:u}=s[i]||{};u&&(t.trans(t.c.width,0),t.scale(-1,1)),t.img(e.texture,e.posX+d,e.posY+h,e.width,e.height,a,n,r,o),u&&(t.scale(-1,1),t.trans(-t.c.width,0))};this.drawMoodBars=((t,e)=>{s(t,this.icons,"hunger"),s(t,this.icons,"sleep"),s(t,this.icons,"mood"),s(t,{...this.icons,width:.7*t.c.width*e.hunger},"hungerBar"),s(t,{...this.icons,width:.7*t.c.width*e.sleep},"sleepBar"),s(t,{...this.icons,width:.7*t.c.width*e.mood},"moodBar")}),this.drawWiflies=((t,i,a)=>{i.forEach(({x:i,y:n},r)=>{const o=a?`dead${e%2}`:(r+e)%4;s(t,{...this.wifly,posX:i*t.c.width,posY:n*t.c.height*.4},o)})}),this.drawBuzzards=((t,i)=>{i.forEach(({x:i=0,y:a=0,halt:n,mirror:r},o)=>{r&&(t.trans(t.c.width,0),t.scale(-1,1));const d=n?0:e%2;s(t,{...this.buzzard,posX:i*t.c.width,posY:a*t.c.height},d),r&&(t.scale(-1,1),t.trans(-t.c.width,0))})}),this.drawBed=((t,e=0)=>{e>0&&s(t,this.beds,`bed${e}`)})}function Game(t){this.state={hunger:1,sleep:1,mood:1,moodBuffer:0,buzzards:[],wiflies:[],deadWiflies:[],asleep:!1,hungry:!1,sad:!1,eating:!1,bedLevel:0,money:0},window.getState=(()=>this.state),window.getProps=(()=>this.hadSound);const e=()=>0===this.state.bedLevel?0:100*this.state.bedLevel+99,i=()=>{this.state.wiflies.push({x:.8*Math.random()+.1,y:.2*Math.random()+.1})},s=()=>{const t=this.state.deadWiflies.length;__("#food span").innerText=t,t<1?__("#feed").setAttribute("disabled",!0):__("#feed").removeAttribute("disabled")},a=()=>{const t=this.state.wiflies.shift();t.isDead=!0,t.pos=1.1+(t.x-.5)**2,this.state.deadWiflies.push(t),s()};let n;const r=()=>{const{wiflies:t,deadWiflies:e}=this.state;navigator.onLine&&t.length<15&&i(),(!navigator.onLine||Math.random()>.7)&&t.length>0&&a();const s=Math.ceil(navigator.onLine?2e4*Math.random():2e3*Math.random());n=setTimeout(r,s)},o=()=>{const{wiflies:t,deadWiflies:e,buzzards:i}=this.state;this.state.wiflies=t.map(u),this.state.deadWiflies=e.map(u),this.state.buzzards=i.map(h).filter(d).sort((t,e)=>t.y>e.y),navigator.onLine?__("#signal #meter").style.height="100%":__("#signal #meter").style.height="5%"},d=t=>!(!this.hadSound&&t.x>1)||Math.random>1,h=t=>{const{x:e=0,halt:i}=t,s=i?0:.015;return{...t,halt:Math.random()<.1?!i:i,x:e>1.1?-.1:e+s}},u=t=>{const{x:e,y:i,d:s=0,isDead:a,pos:n}=t;if(a)return newDirection=Math.PI/2,{...t,y:i<n?i+.08:i};{let a=(s+Math.random())%(2*Math.PI);const n={x:.02*Math.cos(a),y:.02*Math.sin(a)};return{...t,x:e+n.x<.1||e+n.x>.9?e-n.x:e+n.x,y:i+n.y<.1||i+n.y>.9?i-n.y:i+n.y,d:a}}},l=()=>{const{asleep:e,buzzards:i,eating:s,hunger:a,mood:n,sad:r,sleep:o,wiflies:d,moodBuffer:h}=this.state;o<.5&&!s&&this.setState("asleep",!0);let u=0;d.length>3&&(e?(this.setState("asleep",!1),t.emit("react",["wifly","sleep"])):t.emit("react",["wifly","sad"]),u-=d.length-3,u*=.003,u/=1+this.state.bedLevel,this.incState("mood",u)),this.incState("mood",.003*i.length),h&&(t.emit("react",["laugh","heart"]),this.incState("mood",h),this.state.moodBuffer=0),i.length>2&&e?(t.emit("react",["buzzard","sleep"]),this.setState("asleep",!1)):i.length>0&&t.emit("react",["buzzard","smile"]),(!e&&o<.2||n<.2||a<.2)&&this.setState("sad",!0),this.incState("sleep",e?.006*(3+this.state.bedLevel):-.006),e&&1===o&&(this.setState("asleep",!1),this.setState("sad",!1)),this.incState("hunger",e?-.0024:s?.08:-.008),a<.3&&t.emit("react",["food","sad"]),r||t.emit("earn"),n>.75&&t.emit("earn"),n>.95&&t.emit("earn"),.01===n&&.01===a&&t.emit("die")};this.setState=((e,i)=>{this.state[e]!==i&&(this.state[e]=i,t.emit("char:update",this.state))}),this.incState=((t,e)=>{const i=this.state[t]+e;this.state[t]=i<=.01?.01:i>=1?1:i});const c=()=>{this.state.buzzards.push({x:-0,y:.55+.07*Math.random(),mirror:Math.random()>.5})},f=()=>{this.hadSound&&this.state.buzzards.length<5&&c(),this.hadSound=!1},p=()=>{__("#money span").innerText=`${this.state.money}€`;const t=this.state.money;t>50?__("#ball").removeAttribute("disabled"):__("#ball").setAttribute("disabled",!0),t>75?__("#duck").removeAttribute("disabled"):__("#duck").setAttribute("disabled",!0),this.state.bedLevel>3&&(__("#bed").setAttribute("disabled",!0),__("#bed").className="disabled"),t>e()?__("#bed").removeAttribute("disabled"):__("#bed").setAttribute("disabled",!0)};this.init=(()=>{r(),this.intervals=[setInterval(o,100),setInterval(l,1e3),setInterval(f,2e3)],o(),t.on("die",()=>{this.intervals.map(clearInterval),clearTimeout(n),__("body").className="dead",t.emit("char:update",{asleep:!0})}),t.on("upgrade",()=>{this.state.bedLevel<4&&(this.state.money-=e(),this.state.bedLevel++,__("#bed span").innerText=`-${e()}`,p())}),t.on("sound",()=>{this.hadSound=!0}),t.on("earn",()=>{this.state.money++,p()}),t.on("consume",()=>{const{deadWiflies:t,eating:e,sleeping:i}=this.state;if(!i&&!e&&t.length>=1){const e=Math.max(Math.min(t.length,5),1);this.setState("deadWiflies",t.splice(e)),this.setState("eating",!0),s(),setTimeout(()=>{this.setState("eating",!1)},1e3*e)}}),t.on("spend",t=>{this.state.money-=Math.abs(t)}),t.on("play",()=>{this.state.moodBuffer+=.003})})}function Microphone(){let t,e,i,s,a,n,r=0,o=0;const d=()=>{e.getByteTimeDomainData(s);for(var t=0;t<i;t++)dataPoint=s[t]-128,a+=dataPoint**2,n++;requestAnimationFrame(d)},h=()=>{r=Math.round(a/n)||0,a=0,n=0,highest=0,o=Math.round(.5*o+.5*r),__("#meter").style.height=r<100?`${r}%`:`${Math.min(100,100*r/(1.5*o))}%`};this.getLevel=(()=>r),this.hadSoundSpike=(()=>r>1.5*o),t=new window.AudioContext,(e=t.createAnalyser()).fftSize=2048,i=e.frequencyBinCount,s=new Uint8Array(i),e.getByteTimeDomainData(s),navigator.mediaDevices.getUserMedia({audio:!0}).then(i=>{t.createMediaStreamSource(i).connect(e),d(),setInterval(h,500)})}function Events(t){var e={},i=[];(t=t||this).on=function(i,s,a){return(e[i]=e[i]||[]).push([s,a]),t},t.emit=function(s){for(var a,n=e[s]||i,r=n.length>0?n.slice(0,n.length):n,o=0;a=r[o++];)a[0].apply(a[1],i.slice.call(arguments,1));return t}}!function(){function t(t,e,i){var s=t.createShader(i);return t.shaderSource(s,e),t.compileShader(s),s}function e(e,i,s){var a=e.createProgram(),n=t(e,i,35633),r=t(e,s,35632);return e.attachShader(a,n),e.attachShader(a,r),e.linkProgram(a),a}function i(t,e,i,s){var a=t.createBuffer();return t.bindBuffer(e,a),t.bufferData(e,i,s),a}window.TCShd=t,window.TCPrg=e,window.TCBuf=i,window.TCTex=function(t,e,i,s){var a=t.createTexture();return t.bindTexture(3553,a),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071),t.texParameteri(3553,10240,9728),t.texParameteri(3553,10241,9728),t.texImage2D(3553,0,6408,6408,5121,e),t.bindTexture(3553,null),a.width=i,a.height=s,a},window.TC=function(t){var s,a,n,r=t.getContext("webgl"),o=t.width,d=t.height,h=e(r,["precision lowp float;","attribute vec2 a, b;","attribute vec4 c;","varying vec2 d;","varying vec4 e;","uniform mat4 m;","uniform vec2 r;","void main(){","gl_Position=m*vec4(a,1.0,1.0);","d=b;","e=c;","}"].join("\n"),["precision lowp float;","varying vec2 d;","varying vec4 e;","uniform sampler2D f;","void main(){","gl_FragColor=texture2D(f,d)*e;","}"].join("\n")),u=r.bufferSubData.bind(r),l=r.drawElements.bind(r),c=r.bindTexture.bind(r),f=r.clear.bind(r),p=r.clearColor.bind(r),v=new ArrayBuffer(873760),m=new Float32Array(v),b=new Uint32Array(v),x=new Uint16Array(131064),g=i(r,34963,x.byteLength,35044),w=i(r,34962,v.byteLength,35048),y=0,_=new Float32Array([1,0,0,1,0,0]),A=new Float32Array(100),M=0,S=Math.cos,z=Math.sin,B=null,L=null;r.blendFunc(770,771),r.enable(3042),r.useProgram(h),r.bindBuffer(34963,g);for(var P=indexB=0;P<65532;P+=6,indexB+=4)x[P+0]=indexB,x[P+1]=indexB+1,x[P+2]=indexB+2,x[P+3]=indexB+0,x[P+4]=indexB+3,x[P+5]=indexB+1;return u(34963,0,x),r.bindBuffer(34962,w),s=r.getAttribLocation(h,"a"),a=r.getAttribLocation(h,"b"),n=r.getAttribLocation(h,"c"),r.enableVertexAttribArray(s),r.vertexAttribPointer(s,2,5126,0,20,0),r.enableVertexAttribArray(a),r.vertexAttribPointer(a,2,5126,0,20,8),r.enableVertexAttribArray(n),r.vertexAttribPointer(n,4,5121,1,20,16),r.uniformMatrix4fv(r.getUniformLocation(h,"m"),0,new Float32Array([2/o,0,0,0,0,-2/d,0,0,0,0,1,1,-1,1,0,0])),r.activeTexture(33984),L={g:r,c:t,col:4294967295,bkg:function(t,e,i){p(t,e,i,1)},cls:function(){f(16384)},trans:function(t,e){_[4]=_[0]*t+_[2]*e+_[4],_[5]=_[1]*t+_[3]*e+_[5]},scale:function(t,e){_[0]=_[0]*t,_[1]=_[1]*t,_[2]=_[2]*e,_[3]=_[3]*e},rot:function(t){var e=_[0],i=_[1],s=_[2],a=_[3],n=z(t),r=S(t);_[0]=e*r+s*n,_[1]=i*r+a*n,_[2]=e*-n+s*r,_[3]=i*-n+a*r},push:function(){A[M+0]=_[0],A[M+1]=_[1],A[M+2]=_[2],A[M+3]=_[3],A[M+4]=_[4],A[M+5]=_[5],M+=6},pop:function(){M-=6,_[0]=A[M+0],_[1]=A[M+1],_[2]=A[M+2],_[3]=A[M+3],_[4]=A[M+4],_[5]=A[M+5]},img:function(t,e,i,s,a,n,r,o,d){var h=e,f=i,p=e+s,x=i+a,g=e,w=i+a,A=e+s,M=i,S=_[0],z=_[1],P=_[2],T=_[3],I=_[4],X=_[5],Y=0,C=L.col;(t!=B||y+1>=10922)&&(u(34962,0,v),l(4,6*y,5123,0),y=0,B!=t&&c(3553,B=t)),Y=20*y,m[Y++]=h*S+f*P+I,m[Y++]=h*z+f*T+X,m[Y++]=n,m[Y++]=r,b[Y++]=C,m[Y++]=p*S+x*P+I,m[Y++]=p*z+x*T+X,m[Y++]=o,m[Y++]=d,b[Y++]=C,m[Y++]=g*S+w*P+I,m[Y++]=g*z+w*T+X,m[Y++]=n,m[Y++]=d,b[Y++]=C,m[Y++]=A*S+M*P+I,m[Y++]=A*z+M*T+X,m[Y++]=o,m[Y++]=r,b[Y++]=C,++y>=10922&&(u(34962,0,v),l(4,6*y,5123,0),y=0)},flush:function(){0!=y&&(u(34962,0,m.subarray(0,20*y)),l(4,6*y,5123,0),y=0)}}}}(),window.__=(t=>document.querySelector(t)),window.on=((t,e,i)=>t.addEventListener(e,i)),window.off=((t,e,i)=>t.removeEventListener(e,i)),window.click=((t,e)=>on(t,"click",e));