!function(){function e(e){D.fill(e,renderTarget,renderTarget+131072)}function n(e,t,n){t|=0,n|=0,(e|=0)>0&&e<x&&t>0&&t<S&&(D[renderTarget+(t*x+e)]=n)}function r(e,t,r,o,a){var s,i,d=(o|=0)-(t|=0),c=(r|=0)-(e|=0);if(d<0?(d=-d,i=-1):i=1,c<0?(c=-c,s=-1):s=1,d<<=1,c<<=1,n(e,t,a),c>d)for(var u=d-(c>>1);e!=r;)u>=0&&(t+=i,u-=c),u+=d,n(e+=s,t,a);else for(u=c-(d>>1);t!=o;)u>=0&&(e+=s,u-=d),u+=c,n(e,t+=i,a)}function o(e,t,r,o){var a=-r,s=0,i=2-2*r;do{n(e-a,t+s,o),n(e-s,t-a,o),n(e+a,t-s,o),n(e+s,t+a,o),(r=i)<=s&&(i+=2*++s+1),(r>a||i>s)&&(i+=2*++a+1)}while(a<0)}function a(e,t,n,o){if(!(n<0)){e|=0,t|=0,o|=0;var a=-(n|=0),s=0,i=2-2*n;do{r(e-a,t-s,e+a,t-s,o),r(e-a,t+s,e+a,t+s,o),(n=i)<=s&&(i+=2*++s+1),(n>a||i>s)&&(i+=2*++a+1)}while(a<0)}}function s(e,t,n,o,a){x1=0|e,y1=0|t,x2=e+n|0,y2=t+o|0,r(x1,y1,x2,y1,a),r(x2,y1,x2,y2,a),r(x1,y2,x2,y2,a),r(x1,y1,x1,y2,a)}function d(e,t,n,o,a){x1=0|e,y1=0|t,x2=e+n|0,y2=t+o|0;var s=Math.abs(y2-y1);if(r(x1,y1,x2,y1,a),s>0)for(;--s;)r(x1,y1+s,x2,y1+s,a);r(x1,y2,x2,y2,a)}function c(e,t,n,o,a,s,i){r(e,t,n,o,i),r(n,o,a,s,i),r(a,s,e,t,i)}function u(e,t,n,r,o,a,s){var i=x,e=Math.round(16*e),n=Math.round(16*n),o=Math.round(16*o),t=Math.round(16*t),d=e-n,c=(r=Math.round(16*r))-t,u=n-o,f=(a=Math.round(16*a))-r,h=o-e,l=t-a,g=Math.max(Math.min(e,n,o)+15>>4,0),p=Math.min(Math.max(e,n,o)+15>>4,x),v=Math.max(Math.min(t,r,a)+15>>4,0),m=Math.min(Math.max(t,r,a)+15>>4,S);g&=-8,v&=-8;var w=-c*e-d*t,y=-f*n-u*r,M=-l*o-h*a;(c>0||0==c&&d>0)&&w++,(f>0||0==f&&u>0)&&y++,(l>0||0==l&&h>0)&&M++,w=w-1>>4,y=y-1>>4,M=M-1>>4;var b=0,T=0,E=0,A=0,C=0,K=0;d>=0?T-=7*d:b-=7*d,c>=0?T-=7*c:b-=7*c,u>=0?A-=7*u:E-=7*u,f>=0?A-=7*f:E-=7*f,h>=0?K-=7*h:C-=7*h,l>=0?K-=7*l:C-=7*l;for(var P=i-8,I=v;I<m;I+=8)for(var L=g;L<p;L+=8){var N=w+d*I+c*L,O=y+u*I+f*L,R=M+h*I+l*L;if(!(N<T||O<A||R<K)){var _=L+I*i;if(N>=b&&O>=E&&R>=C)for(k=0;k<8;k++){for(q=0;q<8;q++,_++)D[renderTarget+_]=s;_+=P}else for(var k=0;k<8;k++){for(var B=N,U=O,F=R,q=0;q<8;q++)(B|U|F)>=0&&(D[renderTarget+_]=s),B+=c,U+=f,F+=l,_++;N+=d,O+=u,R+=h,_+=P}}}}function h(e=0,t=0,n=16,r=16,o=0,a=0,s=!1,i=!1){for(var d=0;d<r;d++)for(var c=0;c<n;c++)a+d<S&&o+c<x&&a+d>-1&&o+c>-1&&(s&i?D[renderSource+((t+(r-d))*x+e+(n-c))]>0&&(D[renderTarget+((a+d)*x+o+c)]=pal[D[renderSource+((t+(r-d))*x+e+(n-c))]]):i&&!s?D[renderSource+((t+(r-d))*x+e+c)]>0&&(D[renderTarget+((a+d)*x+o+c)]=D[renderSource+((t+(r-d))*x+e+c)]):s&&!i?D[renderSource+((t+d)*x+e+(n-c))]>0&&(D[renderTarget+((a+d)*x+o+c)]=D[renderSource+((t+d)*x+e+(n-c))]):s||i||D[renderSource+((t+d)*x+e+c)]>0&&(D[renderTarget+((a+d)*x+o+c)]=pal[D[renderSource+((t+d)*x+e+c)]]))}function l(e=0,t=0,n=16,r=16,o=0,a=0,s=16,i=16,d=!1,c=!1){for(var u=n/s,f=r/i,h=0;h<i;h++)for(var l=0;l<s;l++)px=l*u|0,py=h*f|0,a+h<S&&o+l<x&&a+h>-1&&o+l>-1&&D[renderSource+((t+py)*x+e+px)]>0&&(D[renderTarget+((a+h)*x+o+l)]=D[renderSource+((t+py)*x+e+px)])}function g(e,t,n,r,o,a,s,i){i*=.0174533;var d=e+n/2,c=t+r/2,u=n*s/2*1.41421356237|5,f=r*s/2*1.41421356237|5,h=-u,l=u,g=-f,p=f,v=1/s,m=Math.cos(-i)*v,w=Math.sin(-i)*v;for(let e=g;e<p;e++)for(let t=h;t<l;t++){let s=d+Math.round(m*t+w*e),i=c+Math.round(-w*t+m*e),u=t+o|0,f=e+a|0;s>=0&&i>=0&&s<n&&i<r&&D[renderSource+(i*x+s)]>0&&(D[renderTarget+(f*x+u)]=D[renderSource+(i*x+s)])}}function p(){for(var e=131072;e--;)C[e]=colors[pal[D[e]]];T.data.set(A),ctx.putImageData(T,0,0)}function v(e){for(audioData=e.outputBuffer.getChannelData(0),inc=1/AC.sampleRate,samplesPerFrame=AC.sampleRate/60,i=0;i<audioData.length;i++)time+=inc,signal=0,beat=1.3*time,bar=beat/4,half=beat/2,pattern=bar/2,note=4*beat,env=Math.pow(1-beat%1,8),signal+=(oscSinus(50)+.1*oscNoise())*env*.3,env=Math.pow(1-beat%.5,16),signal+=oscNoise()*env*.1,env=Math.pow(1-beat%.25,16),signal+=oscNoise()*env*.05,env=Math.pow(1-half%1,10),signal+=oscNoise()*env*.15,env=Math.pow(1-note%1,3),f=m(bass[note%bass.length|0]),signal+=oscSquare(f)*env*.15,env=Math.pow(1-note%.5,3),f=m(bass[note%bass.length|0]),signal+=oscSquare(f)*env*.15,env=Math.pow(1-note%1,.5),f=m(notes[note%notes.length|0]+0),signal+=(oscSawtooth(f)+oscSawtooth(1.01*f)+oscSawtooth(1.02*f))*env*.05,env=Math.pow(1-note%1,1),f=m(notesb[note%notesb.length|0]),signal+=(oscSawtooth(f)+oscSawtooth(1.005*f)+oscSawtooth(1.0006*f))*env*.05,audioData[i]=signal}function m(e){return 0==e?0:.00390625*Math.pow(1.059463094,e+200)}function w(e){for(var t=e[0].length,r=0;r<t;r++){var o=[];o=M(e[0].charAt(r));for(var a=0;a<5;a++)for(var s=0;s<5;s++)1==o[5*a+s]&&(1==e[4]?n(e[1]+s*e[4]+(5*e[4]+e[3])*r,e[2]+a*e[4],e[5]):d(e[1]+s*e[4]+(5*e[4]+e[3])*r,e[2]+a*e[4],e[4],e[4],e[5]))}}function y(e){var t=5*e[7],n=e[0].split("\n"),r=n.slice(0),o=n.length,a=r.sort(function(e,t){return t.length-e.length})[0],s=a.length*t+(a.length-1)*e[3],i=o*t+(o-1)*e[4];e[5]||(e[5]="left"),e[6]||(e[6]="bottom");var d=e[1],c=e[2],u=e[1]+s,f=e[2]+i;"center"==e[5]?(d=e[1]-s/2,u=e[1]+s/2):"right"==e[5]&&(d=e[1]-s,u=e[1]),"center"==e[6]?(c=e[2]-i/2,f=e[2]+i/2):"bottom"==e[6]&&(c=e[2]-i,f=e[2]);for(var h=d+s/2,l=c+i/2,g=0;g<o;g++){var p=n[g],v=p.length*t+(p.length-1)*e[3],m=e[1],y=e[2]+(t+e[4])*g;"center"==e[5]?m=e[1]-v/2:"right"==e[5]&&(m=e[1]-v),"center"==e[6]?y-=i/2:"bottom"==e[6]&&(y-=i),w([p,m,y,e[3]||0,e[7]||1,e[8]])}return{sx:d,sy:c,cx:h,cy:l,ex:u,ey:f,width:s,height:i}}function M(e){return index=fontString.indexOf(e),fontBitmap.substring(25*index,25*index+25).split("")}const x=453,S=256;var b=document.getElementById("canvas");ctx=b.getContext("2d"),renderTarget=0,renderSource=131072,colors=[4278190080,4281606178,4282132549,4281416038,4282078863,4280709599,4284915929,4288332782,4281791227,4283491737,4281384554,4285436983,4281297227,4280568658,4281941042,4285808447,4286734384,4292963931,4294941539,4293184863,4294761419,4294967295,4290227611,4287069828,4285164137,4283586137,4287251062,4281479852,4284700633,4290411479,4283078543,4281364362],palDefault=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],pal=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],ctx.imageSmoothingEnabled=!1,ctx.mozImageSmoothingEnabled=!1,b.width=x,b.height=S;var T=ctx.getImageData(0,0,x,S),E=new ArrayBuffer(T.data.length),A=new Uint8Array(E),C=new Uint32Array(E),D=new Uint8ClampedArray(x*S*8);time=0,kick="1000100010001000",bass=[-35,0,-23,0,0,-35,0,0,-23,0],notes=[4,0,4,1,0,4,0,4,3,0,4,0,4,8,0,4,0,4,3,0,5,0,5,5,0,5,0,5,5,0,5,5,5,8,0,5,5,0,5,0],notesb=[13,1,8,6,11],oscSinus=(e=>Math.sin(e*time*Math.PI*2)),oscSawtooth=(e=>(e*time*2+1)%2-1),oscSquare=(e=>1-2*(e*time*2&1)),oscNoise=(e=>2*Math.random()-1),states={},init=(()=>{last=0,dt=0,now=0,t=0,moveX=0,speedFactor=.6,songTrigger=!1,state="menu",demostate=0,AC=new AudioContext,fontString="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_!@.'\"?/<()",fontBitmap="11111100011111110001100011111010001111101000111110111111000010000100000111111100100101000110001111101111110000111001000011111111111000011100100001000011111100001011110001111111000110001111111000110001111110010000100001001111111111000100001010010111101000110010111001001010001100001000010000100001111110001110111010110001100011000111001101011001110001011101000110001100010111011110100011001011100100000111010001100011001001111111101000111110100011000101111100000111000001111101111100100001000010000100100011000110001100010111010001100011000101010001001000110001101011010101110100010101000100010101000110001010100010000100001001111100010001000100011111001000110000100001000111001110100010001000100111111111000001001100000111110100101001011111000100001011111100001111000001111100111110000111101000101110111110000100010001000010001110100010111010001011100111010001011110000101110011101000110001100010111000000000000000000000111110010000100001000000000100111111000110111101011011101010111110101011111010100000000000000000000000100001100001000100000000000011011010011001000000000000111010001001100000000100000010001000100010001000000010001000100000100000100001000100001000010000010",SP=AC.createScriptProcessor(1024,0,1),SP.connect(AC.destination),SP.onaudioprocess=v,loop()}),stopCapture=(e=>{}),window.addEventListener("keyup",function(e){Key.onKeyup(e)},!1),window.addEventListener("mousedown",function(e){stopCapture(e)},!1),window.addEventListener("keydown",function(e){Key.onKeydown(e)},!1),window.addEventListener("blur",function(e){paused=!0},!1),window.addEventListener("focus",function(e){paused=!1},!1),loop=(e=>{let n=(new Date).getTime();dt=Math.min(1,(n-last)/1e3),t+=dt,states[state].render(),states[state].step(dt),last=n,p(),requestAnimationFrame(loop)}),states.gameover={step:function(e){Key.isDown(Key.r)&&(state="menu")},render:function(n){renderTarget=0,e(0),y(["GAME OVER",256,80+15*Math.sin(2.5*t),8+4*Math.cos(2.9*t),15+5*Math.sin(3.5*t),"center","top",9,27])}},states.menu={step:function(e){Key.isDown(Key.p)&&(state="game")},render:function(r){renderTarget=0,e(0);let o=t/3;for(let e=-128;e<128;e+=1)for(let t=-256;t<256;t+=2)n(256+t+256*Math.cos(4*(e/128+o))+e,256+e+128*Math.sin(4*(t/256+o))+t,t/8%32);y(["PROTOGAME",256,40+15*Math.sin(2.5*t),8+4*Math.cos(2.9*t),15+5*Math.sin(3.5*t),"center","top",9,21]),y(["PRESS P TO CONTINUE",256,230,2,2,"center","top",1,21])}},states.game={step(e){},render(i){renderTarget=0,e(1);let f=t/3;for(let e=-128;e<128;e+=1)for(let t=-256;t<256;t+=2)n(256+t+256*Math.cos(4*(e/128+f))+e,256+e+128*Math.sin(4*(t/256+f))+t,t/8%32);renderTarget=0,d(0,0,16,16,17),s(400,16,16,16),a(32,32,8,21),o(64,32,8,21),r(128,32,192,64,21),c(0,0,16,16,32,32),u(32,0,64,64,128,128,21),h(0,0,16,16),l(0,0,16,16,0,0,16,16),renderSource=0,d(256,0,256,256,1),g(0,128,128,256,400,128,1.5,45),y(["JS13K BOILERPLATE",256,20,2,2,"center","top",1,21])}},Key={_pressed:{},_released:{},LEFT:37,UP:38,RIGHT:39,DOWN:40,SPACE:32,a:65,w:87,s:83,d:68,z:90,x:88,f:70,p:80,r:82,isDown(e){return this._pressed[e]},justReleased(e){return this._released[e]},onKeydown(e){this._pressed[e.keyCode]=!0},onKeyup(e){this._released[e.keyCode]=!0,delete this._pressed[e.keyCode]},update(){this._released={}}},window.onload=init()}();