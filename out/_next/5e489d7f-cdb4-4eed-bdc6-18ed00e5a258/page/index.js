
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([6],{337:function(e,t,l){e.exports=l(338)},338:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(0),o=a(n),r=l(57),u=a(r),c=l(56),f=a(c),i=l(60),d=l(12),s=l(62),m=l(27),p=l(61),b=l(13),x=i.appleStock,E=function(e){return new Date(e.date)},g=function(e){return e.close},k={top:60,bottom:60,left:80,right:80},h=750-k.left-k.right,_=400-k.top-k.bottom,v=(0,s.scaleTime)({range:[0,h],domain:(0,b.extent)(x,E)}),w=(0,s.scaleLinear)({range:[_,0],domain:[0,(0,b.max)(x,g)]});t.default=function(){return o.default.createElement(f.default,null,o.default.createElement(u.default,null),o.default.createElement("svg",{width:750,height:400},o.default.createElement(d.Group,{top:k.top,left:k.left},o.default.createElement(m.AreaClosed,{data:x,xScale:v,yScale:w,x:E,y:g,fill:"red"}),o.default.createElement(p.AxisLeft,{scale:w,top:0,left:0,label:"Close Price ($)",stroke:"#1b1a1e",tickTextFill:"#1b1a1e"}),o.default.createElement(p.AxisBottom,{scale:v,top:_,label:"Years",stroke:"#1b1a1e",tickTextFill:"#1b1a1e"}))))}}},[337]);
            return { page: comp.default }
          })
        