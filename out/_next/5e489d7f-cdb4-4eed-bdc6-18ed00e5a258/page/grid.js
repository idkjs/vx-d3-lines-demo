
          window.__NEXT_REGISTER_PAGE('/grid', function() {
            var comp = module.exports=webpackJsonp([7],{335:function(e,t,l){e.exports=l(336)},336:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){return e<=300?3:300<e&&e<=600?5:10}function r(e){return e<=300?2:300<e&&e<=400?5:10}Object.defineProperty(t,"__esModule",{value:!0});var o=l(0),u=a(o),c=l(57),f=a(c),i=l(56),d=a(i),s=l(124),m=l(60),p=l(12),h=l(62),x=l(27),k=l(61),b=l(13),E=m.appleStock,g=[E,function(){var e=m.appleStock,t=[];return e.map(function(e){var l=e.date,a=e.close+100;return t.push({date:l,close:a})}),t}()],w=g.reduce(function(e,t){return e.concat(t)},[]),y=function(e){return new Date(e.date)},S=function(e){return e.close},v={top:60,bottom:60,left:80,right:80},T=750-v.left-v.right,_=400-v.top-v.bottom,L=(0,h.scaleTime)({range:[0,T],domain:(0,b.extent)(w,y)}),P=(0,h.scaleLinear)({range:[_,0],domain:[0,(0,b.max)(w,S)]});t.default=function(){return u.default.createElement(d.default,null,u.default.createElement(f.default,null),u.default.createElement("svg",{width:750,height:400},u.default.createElement("rect",{x:0,y:0,width:750,height:400,fill:"#ffffff",rx:14}),u.default.createElement(s.Grid,{top:v.top,left:v.left,xScale:L,yScale:P,stroke:"#242424",width:T,height:_,numTicksRows:n(400),numTicksColumns:r(750)}),g.map(function(e,t){return u.default.createElement(p.Group,{key:"lines-"+t,top:v.top,left:v.left},u.default.createElement(x.LinePath,{data:e,xScale:L,yScale:P,x:y,y:S,strokeWidth:1}),u.default.createElement(k.AxisLeft,{scale:P,top:0,left:0,label:"Close Price ($)",stroke:"#1b1a1e",tickTextFill:"#1b1a1e"}),u.default.createElement(k.AxisBottom,{scale:L,top:_,label:"Years",stroke:"#1b1a1e",tickTextFill:"#1b1a1e"}))})))}}},[335]);
            return { page: comp.default }
          })
        