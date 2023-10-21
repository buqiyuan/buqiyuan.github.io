const t=function(){for(var t={keys:[],mouse:{left:!1,right:!1,middle:!1,x:0,y:0}},s=0;s<230;s++)t.keys.push(!1);document.addEventListener("keydown",(function(s){t.keys[s.keyCode]=!0})),document.addEventListener("keyup",(function(s){t.keys[s.keyCode]=!1})),document.addEventListener("mousedown",(function(s){0==s.button&&(t.mouse.left=!0),1==s.button&&(t.mouse.middle=!0),2==s.button&&(t.mouse.right=!0)})),document.addEventListener("mouseup",(function(s){0==s.button&&(t.mouse.left=!1),1==s.button&&(t.mouse.middle=!1),2==s.button&&(t.mouse.right=!1)})),document.addEventListener("mousemove",(function(s){t.mouse.x=s.clientX,t.mouse.y=s.clientY})),document.addEventListener("touchstart",(function(s){t.mouse.x=s.touches[0].clientX,t.mouse.y=s.touches[0].clientY}));var e=document.createElement("canvas");e.id="thousand-legger",document.body.appendChild(e),e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight,e.style.position="fixed",e.style.zIndex="-1",e.style.opacity="0.38",e.style.left="0px",e.style.top="0px";var h,i=e.getContext("2d");class n{constructor(t,s,e,h,i){this.isSegment=!0,this.parent=t,"object"==typeof t.children&&t.children.push(this),this.children=[],this.size=s,this.relAngle=e,this.defAngle=e,this.absAngle=t.absAngle+e,this.range=h,this.stiffness=i,this.updateRelative(!1,!0)}updateRelative(t,s){if(this.relAngle=this.relAngle-2*Math.PI*Math.floor((this.relAngle-this.defAngle)/2/Math.PI+.5),s&&(this.relAngle=Math.min(this.defAngle+this.range/2,Math.max(this.defAngle-this.range/2,(this.relAngle-this.defAngle)/this.stiffness+this.defAngle))),this.absAngle=this.parent.absAngle+this.relAngle,this.x=this.parent.x+Math.cos(this.absAngle)*this.size,this.y=this.parent.y+Math.sin(this.absAngle)*this.size,t)for(var e=0;e<this.children.length;e++)this.children[e].updateRelative(t,s)}draw(t){if(i.beginPath(),i.moveTo(this.parent.x,this.parent.y),i.lineTo(this.x,this.y),i.stroke(),t)for(var s=0;s<this.children.length;s++)this.children[s].draw(!0)}follow(t){var s=this.parent.x,e=this.parent.y,h=Math.pow(Math.pow(this.x-s,2)+Math.pow(this.y-e,2),.5);if(this.x=s+this.size*(this.x-s)/h,this.y=e+this.size*(this.y-e)/h,this.absAngle=Math.atan2(this.y-e,this.x-s),this.relAngle=this.absAngle-this.parent.absAngle,this.updateRelative(!1,!0),t)for(var i=0;i<this.children.length;i++)this.children[i].follow(!0)}}class a{constructor(t,s,e,h){this.end=t,this.length=Math.max(1,s),this.creature=h,this.speed=e,h.systems.push(this),this.nodes=[];for(var i=t,n=0;n<s;n++)if(this.nodes.unshift(i),!(i=i.parent).isSegment){this.length=n+1;break}this.hip=this.nodes[0].parent}moveTo(t,s){this.nodes[0].updateRelative(!0,!0);for(var e=Math.pow(Math.pow(t-this.end.x,2)+Math.pow(s-this.end.y,2),.5),h=Math.max(0,e-this.speed),i=this.nodes.length-1;i>=0;i--){var n=this.nodes[i],a=Math.atan2(n.y-s,n.x-t);n.x=t+h*Math.cos(a),n.y=s+h*Math.sin(a),t=n.x,s=n.y,h=n.size}for(i=0;i<this.nodes.length;i++){(n=this.nodes[i]).absAngle=Math.atan2(n.y-n.parent.y,n.x-n.parent.x),n.relAngle=n.absAngle-n.parent.absAngle;for(var o=0;o<n.children.length;o++){var r=n.children[o];this.nodes.includes(r)||r.updateRelative(!0,!1)}}}update(){this.moveTo(t.mouse.x,t.mouse.y)}}class o extends a{constructor(t,s,e,h){super(t,s,e,h),this.goalX=t.x,this.goalY=t.y,this.step=0,this.forwardness=0,this.reach=.9*Math.pow(Math.pow(this.end.x-this.hip.x,2)+Math.pow(this.end.y-this.hip.y,2),.5);var i=this.creature.absAngle-Math.atan2(this.end.y-this.hip.y,this.end.x-this.hip.x);i-=2*Math.PI*Math.floor(i/2/Math.PI+.5),this.swing=-i+(2*(i<0)-1)*Math.PI/2,this.swingOffset=this.creature.absAngle-this.hip.absAngle}update(t,s){if(this.moveTo(this.goalX,this.goalY),0==this.step)Math.pow(Math.pow(this.end.x-this.goalX,2)+Math.pow(this.end.y-this.goalY,2),.5)>1&&(this.step=1,this.goalX=this.hip.x+this.reach*Math.cos(this.swing+this.hip.absAngle+this.swingOffset)+(2*Math.random()-1)*this.reach/2,this.goalY=this.hip.y+this.reach*Math.sin(this.swing+this.hip.absAngle+this.swingOffset)+(2*Math.random()-1)*this.reach/2);else if(1==this.step){var e=Math.atan2(this.end.y-this.hip.y,this.end.x-this.hip.x)-this.hip.absAngle,h=Math.pow(Math.pow(this.end.x-this.hip.x,2)+Math.pow(this.end.y-this.hip.y,2),.5)*Math.cos(e),i=this.forwardness-h;this.forwardness=h,i*i<1&&(this.step=0,this.goalX=this.hip.x+(this.end.x-this.hip.x),this.goalY=this.hip.y+(this.end.y-this.hip.y))}}}class r{constructor(t,s,e,h,i,n,a,o,r,l,d){this.x=t,this.y=s,this.absAngle=e,this.fSpeed=0,this.fAccel=h,this.fFric=i,this.fRes=n,this.fThresh=a,this.rSpeed=0,this.rAccel=o,this.rFric=r,this.rRes=l,this.rThresh=d,this.children=[],this.systems=[]}follow(t,s){var e=Math.pow(Math.pow(this.x-t,2)+Math.pow(this.y-s,2),.5),h=Math.atan2(s-this.y,t-this.x),i=this.fAccel;if(this.systems.length>0){for(var n=0,a=0;a<this.systems.length;a++)n+=0==this.systems[a].step;i*=n/this.systems.length}this.fSpeed+=i*(e>this.fThresh),this.fSpeed*=1-this.fRes,this.speed=Math.max(0,this.fSpeed-this.fFric);var o=this.absAngle-h;o-=2*Math.PI*Math.floor(o/(2*Math.PI)+.5),Math.abs(o)>this.rThresh&&e>this.fThresh&&(this.rSpeed-=this.rAccel*(2*(o>0)-1)),this.rSpeed*=1-this.rRes,Math.abs(this.rSpeed)>this.rFric?this.rSpeed-=this.rFric*(2*(this.rSpeed>0)-1):this.rSpeed=0,this.absAngle+=this.rSpeed,this.absAngle-=2*Math.PI*Math.floor(this.absAngle/(2*Math.PI)+.5),this.x+=this.speed*Math.cos(this.absAngle),this.y+=this.speed*Math.sin(this.absAngle),this.absAngle+=Math.PI;for(a=0;a<this.children.length;a++)this.children[a].follow(!0,!0);for(a=0;a<this.systems.length;a++)this.systems[a].update(t,s);this.absAngle-=Math.PI,this.draw(!0)}draw(t){if(i.beginPath(),i.arc(this.x,this.y,4,Math.PI/4+this.absAngle,7*Math.PI/4+this.absAngle),i.moveTo(this.x+4*Math.cos(7*Math.PI/4+this.absAngle),this.y+4*Math.sin(7*Math.PI/4+this.absAngle)),i.lineTo(this.x+4*Math.pow(2*Math.cos(this.absAngle),.5),this.y+4*Math.pow(2*Math.sin(this.absAngle),.5)),i.lineTo(this.x+4*Math.cos(Math.PI/4+this.absAngle),this.y+4*Math.sin(Math.PI/4+this.absAngle)),i.stroke(),t)for(var s=0;s<this.children.length;s++)this.children[s].draw(!0)}}var l=Math.floor(1+12*Math.random());function d(){var t=window.getComputedStyle(document.body,null).color||"black";e.style.backgroundColor="transparent",i.strokeStyle=t}return d(),window.addEventListener("resize",d),function(s,a,l){for(var d=s,c=h=new r(window.innerWidth/2,window.innerHeight/2,0,10*d,2*d,.5,16,.5,.085,.5,.3),p=0;p<6;p++){c=new n(c,4*d,0,6.283/3,1.1);for(var g=-1;g<=1;g+=2)for(var f=new n(c,3*d,g,.1,2),u=0;u<3;u++)f=new n(f,.1*d,.1*-g,.1,2)}for(p=0;p<a;p++){if(p>0)for(g=0;g<6;g++){c=new n(c,4*d,0,1.571,1.5);for(u=-1;u<=1;u+=2){f=new n(c,3*d,1.571*u,.1,1.5);for(var M=0;M<3;M++)f=new n(f,3*d,.3*-u,.1,2)}}for(g=-1;g<=1;g+=2){f=new n(c,12*d,.785*g,0,8);f=new n(f,16*d,.785*-g,6.28,1),f=new n(f,16*d,1.571*g,3.1415,2);for(u=0;u<4;u++)new n(f,4*d,1.571*(u/3-.5),.1,4);new o(f,3,12*d,h,4)}}for(p=0;p<l;p++){c=new n(c,4*d,0,6.283/3,1.1);for(g=-1;g<=1;g+=2)for(f=new n(c,3*d,g,.1,2),u=0;u<3;u++)f=new n(f,3*d*(l-p)/l,.1*-g,.1,2)}setInterval((function(){i.clearRect(0,0,e.width,e.height),h.follow(t.mouse.x,t.mouse.y)}),33)}(8/Math.sqrt(l),l,Math.floor(4+Math.random()*l*8)),{canvas:e}}();export{t as default};
