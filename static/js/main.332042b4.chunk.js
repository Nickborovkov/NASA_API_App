(this.webpackJsonpNASA_API_app=this.webpackJsonpNASA_API_app||[]).push([[2],{11:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(37),n=a.n(r),c=n.a.create({baseURL:"https://api.nasa.gov/"}),s="ZWGiTATMzPHjpsUJSj289aerwaSsLpikIiYBhaek",i={getAPOD:function(e){return c.get("planetary/apod?date=".concat(e,"&api_key=").concat(s))},getAPODwithInterval:function(e,t){return c.get("planetary/apod?start_date=".concat(e,"&end_date=").concat(t,"&api_key=").concat(s))},getNeows:function(e,t){return c.get("neo/rest/v1/feed?start_date=".concat(e,"&end_date=").concat(t,"&api_key=").concat(s))},getEarthObservation:function(e,t,a,r){return c.get("planetary/earth/assets?lon=".concat(e,"&lat=").concat(t,"&date=").concat(a,"&&dim=").concat(r,"&api_key=").concat(s))},getEarthImage:function(e){return c.get("EPIC/api/natural/date/".concat(e,"?api_key=").concat(s))},getMarsRoverPhotos:function(e,t,a){return c.get("mars-photos/api/v1/rovers/".concat(e,"/photos?earth_date=").concat(t,"&page=").concat(a,"&api_key=").concat(s))},searchNasaLibrary:function(e,t,a,r,c){return n.a.get("https://images-api.nasa.gov/search?q=".concat(e,"&media_type=").concat(t,"&page=").concat(c,"&year_start=").concat(a,"&year_end=").concat(r))}}},15:function(e,t,a){e.exports={navbar:"navbar_navbar__2w9JH",menu:"navbar_menu__g5rmb",link:"navbar_link__2bfat",linkActive:"navbar_linkActive__1NltO"}},19:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=new Date,n=String(r.getFullYear()),c=1===String(r.getMonth()+1).length?"0".concat(String(r.getMonth()+1)):String(r.getMonth()+1),s=1===String(r.getDate()-1).length?"0".concat(String(r.getDate()-1)):String(r.getDate()-1),i="".concat(n,"-").concat(c,"-").concat(s)},20:function(e,t,a){e.exports={starterPage:"helpers_starterPage__RBK4J",starterTitle:"helpers_starterTitle__3YFp4",starterSubtitle:"helpers_starterSubtitle__189By",page404:"helpers_page404__rDDNK",page404Title:"helpers_page404Title__OD_4I",page404Subtitle:"helpers_page404Subtitle__2AVJB"}},24:function(e,t,a){e.exports={header:"header_header__2r9U0",logo:"header_logo__1wqfa",title:"header_title__G_Dql",searchForm:"header_searchForm__xwtQD",searchInput:"header_searchInput__4LP3v",searchButton:"header_searchButton__r7oug"}},26:function(e,t,a){"use strict";a.d(t,"f",(function(){return g})),a.d(t,"e",(function(){return m})),a.d(t,"c",(function(){return y})),a.d(t,"d",(function(){return S})),a.d(t,"b",(function(){return x}));var r=a(7),n=a.n(r),c=a(10),s=a(3),i=a(11),o="nasa/nasaLibrary/SET_SEARCH_RESULT",u="nasa/nasaLibrary/SET_SEARCH_START",l="nasa/nasaLibrary/TOGGLE_FETCHING",d="nasa/nasaLibrary/SET_CURRENT_SEARCH",b="nasa/nasaLibrary/SET_TOTAL_PAGES",h="nasa/nasaLibrary/SET_MEDIA_TYPE",j="nasa/nasaLibrary/SET_START_YEAR",p="nasa/nasaLibrary/SET_END_YEAR",f="nasa/nasaLibrary/NEXT_PAGE",O="nasa/nasaLibrary/PREV_PAGE",v={result:null,currentSearch:null,searchStart:!1,mediaType:"image",yearStart:"2005",yearEnd:"2021",totalPages:"",page:1,isFetching:!1};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(s.a)(Object(s.a)({},e),{},{result:t.result});case d:return Object(s.a)(Object(s.a)({},e),{},{currentSearch:t.currentSearch});case u:return Object(s.a)(Object(s.a)({},e),{},{searchStart:t.searchStart});case l:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case h:return Object(s.a)(Object(s.a)({},e),{},{mediaType:t.mediaType});case j:return Object(s.a)(Object(s.a)({},e),{},{yearStart:t.yearStart});case p:return Object(s.a)(Object(s.a)({},e),{},{yearEnd:t.yearEnd});case b:return Object(s.a)(Object(s.a)({},e),{},{totalPages:Math.ceil(t.totalPages/100)});case f:return Object(s.a)(Object(s.a)({},e),{},{page:e.page+1});case O:return Object(s.a)(Object(s.a)({},e),{},{page:e.page-1});default:return e}};var _=function(e){return{type:o,result:e}},g=function(e){return{type:u,searchStart:e}},m=function(e){return{type:d,currentSearch:e}},A=function(e){return{type:l,isFetching:e}},y=function(){return{type:f}},S=function(){return{type:O}},x=function(e,t,a,r,s){return function(){var o=Object(c.a)(n.a.mark((function c(o){var u;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(_(null)),o(g(!0)),o(A(!0)),n.next=5,i.a.searchNasaLibrary(e,t,a,r,s);case 5:u=n.sent,o(A(!1)),o(_(u.data.collection.items)),o((c=u.data.collection.metadata.total_hits,{type:b,totalPages:c}));case 9:case"end":return n.stop()}var c}),c)})));return function(e){return o.apply(this,arguments)}}()}},32:function(e,t,a){e.exports={footer:"footer_footer__2RBC1",footerLink:"footer_footerLink__1Imo1",footerAuthor:"footer_footerAuthor__37GTQ"}},33:function(e,t,a){e.exports={preloader:"preloader_preloader__2QEln",title:"preloader_title__7s78g",icon:"preloader_icon__3Kgcc",preloaderAnimation:"preloader_preloaderAnimation__R1KAv"}},40:function(e,t,a){"use strict";a(1);var r=a(31),n=a(33),c=a.n(n),s=a(2);t.a=function(){return Object(s.jsxs)("div",{className:c.a.preloader,children:[Object(s.jsx)("h1",{className:c.a.title,children:"Loading, please wait..."}),Object(s.jsx)(r.b,{className:c.a.icon})]})}},42:function(e,t,a){"use strict";a.d(t,"d",(function(){return j})),a.d(t,"e",(function(){return p})),a.d(t,"b",(function(){return f})),a.d(t,"c",(function(){return O}));var r=a(7),n=a.n(r),c=a(10),s=a(3),i=a(11),o=a(19),u="NASA/apod/SET_APOD",l="NASA/apod/SET_APOD_WITH_INTERVAL",d="NASA/apod/SET_CURRENT_DATE",b="NASA/apod/SET_INTERVAL",h={apodArray:[],currentDate:o.a,intervalDateStart:o.a,intervalDateEnd:o.a};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),{},{apodArray:[t.apodArray]});case l:return Object(s.a)(Object(s.a)({},e),{},{apodArray:t.apodArray});case d:return Object(s.a)(Object(s.a)({},e),{},{currentDate:t.currentDate});case b:return Object(s.a)(Object(s.a)({},e),{},{intervalDateStart:t.start,intervalDateEnd:t.end});default:return e}};var j=function(e){return{type:d,currentDate:e}},p=function(e,t){return{type:b,start:e,end:t}},f=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.getAPOD(e);case 2:r=t.sent,a((n=r.data,{type:u,apodArray:n}));case 4:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e,t){return function(){var a=Object(c.a)(n.a.mark((function a(r){var c;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.getAPODwithInterval(e,t);case 2:c=a.sent,r((n=c.data,{type:l,apodArray:n}));case 4:case"end":return a.stop()}var n}),a)})));return function(e){return a.apply(this,arguments)}}()}},44:function(e,t,a){"use strict";a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return h}));var r=a(7),n=a.n(r),c=a(10),s=a(3),i=a(11),o=a(19),u="NASA/neows/SET_NEOWS",l="NASA/neows/SET_INTERVAL_DATE",d={neowsArray:"",intervalDateStart:o.a,intervalDateEnd:o.a};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),{},{neowsArray:t.neowsArray});case l:return Object(s.a)(Object(s.a)({},e),{},{intervalDateStart:t.start,intervalDateEnd:t.end});default:return e}};var b=function(e,t){return{type:l,start:e,end:t}},h=function(e,t){return function(){var a=Object(c.a)(n.a.mark((function a(r){var c;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.getNeows(e,t);case 2:c=a.sent,r((n=c.data.near_earth_objects,{type:u,neowsArray:n}));case 4:case"end":return a.stop()}var n}),a)})));return function(e){return a.apply(this,arguments)}}()}},45:function(e,t,a){"use strict";a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return h}));var r=a(7),n=a.n(r),c=a(10),s=a(3),i=a(11),o=a(19),u="NASA/earth/SET_EARTH_OBSERVATION",l="NASA/earth/SET_PARAMETERS",d={earthObservation:void 0,longitude:20,latitude:40,date:o.a,dimensions:.25};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),{},{earthObservation:t.earthObservation});case l:return Object(s.a)(Object(s.a)({},e),{},{longitude:t.lon,latitude:t.lat,date:t.date,dimensions:t.dim});default:return e}};var b=function(e,t,a,r){return{type:l,lon:e,lat:t,date:a,dim:r}},h=function(e,t,a,r){return function(){var s=Object(c.a)(n.a.mark((function c(s){var o;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.getEarthObservation(e,t,a,r);case 2:o=n.sent,s((c=o.data,{type:u,earthObservation:c}));case 4:case"end":return n.stop()}var c}),c)})));return function(e){return s.apply(this,arguments)}}()}},46:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return b}));var r=a(7),n=a.n(r),c=a(10),s=a(3),i=a(11),o="NASA/earthImage/SET_EARTH_IMAGE",u="NASA/earthImage/SET_EARTH_IMAGE_DATE",l={earthImage:void 0,date:"2015-06-13"};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(s.a)(Object(s.a)({},e),{},{earthImage:t.earthImage});case u:return Object(s.a)(Object(s.a)({},e),{},{date:t.date});default:return e}};var d=function(e){return{type:u,date:e}},b=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.getEarthImage(e);case 2:r=t.sent,a((n=r.data,{type:o,earthImage:n}));case 4:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}()}},47:function(e,t,a){"use strict";a.d(t,"e",(function(){return h})),a.d(t,"c",(function(){return j})),a.d(t,"d",(function(){return p})),a.d(t,"b",(function(){return f}));var r=a(7),n=a.n(r),c=a(10),s=a(3),i=a(11),o="nasa/marsRover/SET_MARS_ROVER_PHOTOS",u="nasa/marsRover/SET_MARS_ROVER_PARAMS",l="nasa/marsRover/NEXT_PAGE",d="nasa/marsRover/NEXT_PAGE",b={marsRoverPhotos:[],rover:"curiosity",date:"2012-08-06",page:1};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(s.a)(Object(s.a)({},e),{},{marsRoverPhotos:t.marsRoverPhotos});case u:return Object(s.a)(Object(s.a)({},e),{},{rover:t.rover,date:t.date});case l:return Object(s.a)(Object(s.a)({},e),{},{page:e.page+1});case d:return Object(s.a)(Object(s.a)({},e),{},{page:e.page-1});default:return e}};var h=function(e,t){return{type:u,rover:e,date:t}},j=function(){return{type:l}},p=function(){return{type:d}},f=function(e,t,a){return function(){var r=Object(c.a)(n.a.mark((function r(c){var s;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.getMarsRoverPhotos(e,t,a);case 2:s=r.sent,c((n=s.data.photos,{type:o,marsRoverPhotos:n}));case 4:case"end":return r.stop()}var n}),r)})));return function(e){return r.apply(this,arguments)}}()}},65:function(e,t,a){},66:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(27),c=a.n(n),s=(a(65),a(66),a(24)),i=a.n(s),o=a(22),u=a(41),l=a(26),d=a(58),b=a(2),h=function(){var e=Object(o.b)();return Object(b.jsx)("div",{className:i.a.searchForm,children:Object(b.jsx)(u.b,{initialValues:{search:""},validateOnBlur:!0,onSubmit:function(t,a){var r=a.resetForm;e(Object(l.e)(t.search)),e(Object(l.f)(!0)),r({values:""})},children:function(e){var t=e.values,a=e.handleBlur,r=e.handleChange,n=e.handleSubmit,c=e.isValid,s=e.dirty;return Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{className:i.a.searchInput,type:"text",name:"search",value:t.search,onChange:r,onBlur:a,placeholder:"Search in NASA archive"}),Object(b.jsx)("button",{className:i.a.searchButton,disabled:!c&&!s,onClick:n,children:Object(b.jsx)(d.a,{})})]})}})})},j=a.p+"static/media/mainIcon.eb082d71.png",p=function(){return Object(b.jsxs)("header",{className:i.a.header,children:[Object(b.jsx)("img",{className:i.a.logo,src:j,alt:"mainIcon"}),Object(b.jsx)("h1",{className:i.a.title,children:"NASA API app"}),Object(b.jsx)(h,{})]})},f=a(32),O=a.n(f),v=a(31),_=a(59),g=function(){return Object(b.jsxs)("div",{className:O.a.footer,children:[Object(b.jsxs)("a",{className:O.a.footerLink,href:"https://api.nasa.gov/index.html#browseAPI",target:"blank",children:["API provided by NASA open API ",Object(b.jsx)(_.a,{})]}),Object(b.jsxs)("a",{className:O.a.footerAuthor,href:"https://github.com/Nickborovkov",target:"blank",children:[Object(b.jsx)(v.a,{})," Made by Nick Borovkov"]})]})},m=a(15),A=a.n(m),y=a(17),S=function(){return Object(b.jsx)("div",{className:A.a.navbar,children:Object(b.jsxs)("nav",{className:A.a.menu,children:[Object(b.jsx)(y.b,{className:A.a.link,activeClassName:A.a.linkActive,to:"/apod",children:"Picture of the day"}),Object(b.jsx)(y.b,{className:A.a.link,activeClassName:A.a.linkActive,to:"/neows",children:"Near Earth Asteroids"}),Object(b.jsx)(y.b,{className:A.a.link,activeClassName:A.a.linkActive,to:"/earth",children:"Earth Observation"}),Object(b.jsx)(y.b,{className:A.a.link,activeClassName:A.a.linkActive,to:"/earthImage",children:"Satellite Earth Photos"}),Object(b.jsx)(y.b,{className:A.a.link,activeClassName:A.a.linkActive,to:"/marsRover",children:"Mars Rover Photos"})]})})},x=a(5),E=a(20),N=a.n(E),T=function(){return Object(o.c)((function(e){return e.library.searchStart}))?Object(b.jsx)(x.a,{to:"/nasaLibrary"}):Object(b.jsxs)("div",{className:N.a.starterPage,children:[Object(b.jsx)("h1",{className:N.a.starterTitle,children:"This App shows Earth data collected by NASA"}),Object(b.jsx)("p",{className:N.a.starterSubtitle,children:"Results may take some time to load due to long server response, please be patient"}),Object(b.jsx)("p",{className:N.a.starterSubtitle,children:"Made by Nick Borovkov"})]})},P=function(){return Object(o.c)((function(e){return e.library.searchStart}))?Object(b.jsx)(x.a,{to:"/nasaLibrary"}):Object(b.jsxs)("div",{className:N.a.page404,children:[Object(b.jsx)("h1",{className:N.a.page404Title,children:"Error"}),Object(b.jsx)("p",{className:N.a.page404Subtitle,children:"Results not found"})]})},R=a(40),k=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,252))})),w=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,254))})),I=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,255))})),D=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,253))})),L=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(9)]).then(a.bind(null,256))})),C=Object(r.lazy)((function(){return Promise.all([a.e(1),a.e(6)]).then(a.bind(null,250))})),M=function(){return Object(b.jsxs)("div",{className:"appWrapper",children:[Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:"appInner",children:[Object(b.jsx)(S,{}),Object(b.jsx)("div",{className:"appContent",children:Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)(R.a,{}),children:Object(b.jsxs)(x.d,{children:[Object(b.jsx)(x.b,{path:"/apod",render:function(){return Object(b.jsx)(k,{})}}),Object(b.jsx)(x.b,{path:"/neows",render:function(){return Object(b.jsx)(w,{})}}),Object(b.jsx)(x.b,{path:"/earth",render:function(){return Object(b.jsx)(I,{})}}),Object(b.jsx)(x.b,{path:"/earthImage",render:function(){return Object(b.jsx)(D,{})}}),Object(b.jsx)(x.b,{path:"/marsRover",render:function(){return Object(b.jsx)(L,{})}}),Object(b.jsx)(x.b,{path:"/nasaLibrary",render:function(){return Object(b.jsx)(C,{})}}),Object(b.jsx)(x.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(T,{})}}),Object(b.jsx)(x.b,{path:"*",render:function(){return Object(b.jsx)(P,{})}})]})})})]}),Object(b.jsx)(g,{})]})},B=function(e){e&&e instanceof Function&&a.e(11).then(a.bind(null,251)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))},F=a(34),G=a(60),H=a(42),V=a(44),z=a(45),J=a(46),U=a(47),Y=Object(F.b)({apod:H.a,neows:V.a,earth:z.a,earthImage:J.a,marsRover:U.a,library:l.a}),K=Object(F.c)(Y,Object(F.a)(G.a)),W=K;window.store=K,c.a.render(Object(b.jsx)(y.a,{children:Object(b.jsx)(o.a,{store:W,children:Object(b.jsx)(M,{})})}),document.getElementById("root")),B()}},[[91,3,4]]]);
//# sourceMappingURL=main.332042b4.chunk.js.map