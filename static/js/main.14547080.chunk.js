(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/not-found.a7b0cdeb.jpg"},17:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(13),o=a.n(l);a(22);function c(){return n.a.createElement("header",{className:"box-container flex flex-center"},n.a.createElement("label",{htmlFor:"",className:"title"},"React Weather Forecast by H Enterprise"))}var s=a(9),m=a(11),i=a.n(m),u=a(14),p=a(7),f=a.n(p);Screen.propTypes={setResponse:f.a.func.isRequired};var b=n.a.memo((function(e){var t=e.setResponse,a=Object(r.useState)(""),l=Object(s.a)(a,2),o=l[0],c=l[1],m=Object(r.useRef)(null);return Object(r.useEffect)((function(){""!==o?function(){var e=Object(u.a)(i.a.mark((function e(){var a,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://api.openweathermap.org/data/2.5/weather","?q=").concat(o,"&appid=").concat("e6b205d333774054ad121b8593948621"),e.next=3,fetch(a);case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,t(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():t({})}),[o,t]),n.a.createElement("form",{className:"search flex flex-center"},n.a.createElement("input",{type:"text",className:"app-text-field border-box pleft10 pright10 mright15 flex-grow-1",placeholder:"City to search",ref:m}),n.a.createElement("button",{className:"app-button-blue no-border font12 size-100x30 mright15",onClick:function(e){e.preventDefault(),""!==m.current.value.trim()&&c(m.current.value)}},"Search"),n.a.createElement("button",{className:"app-button-gray no-border font12 size-100x30",onClick:function(e){e.preventDefault(),m.current.value="",c("")}},"Clear"))})),d=(a(26),a(34)),h=a(35),E=a(33);var g=n.a.memo((function(e){var t=e.coord,a=t.lat,r=t.lon;return n.a.createElement(d.a,{center:[a,r],zoom:10},n.a.createElement(h.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.a.createElement(E.a,{position:[a,r]}))}));Screen.propTypes={setResponse:f.a.object.isRequired};var N=n.a.memo((function(e){var t=e.values,a=t.name,r=t.main;return n.a.createElement("aside",{className:"weather-container grid font14"},n.a.createElement("label",{htmlFor:"",className:"font-bold result-name"},"The weather in ",a," City is"),n.a.createElement("p",{className:"grid-justify-self-center"},n.a.createElement("label",{className:"font50 blue",htmlFor:""},parseFloat(r.temp-273.15,10).toFixed(0)," \u2103")),n.a.createElement("p",{className:"grid-justify-self-center"},n.a.createElement("label",{htmlFor:"",className:"font-bold"},"Max: "),n.a.createElement("label",{className:"mright25",htmlFor:""},parseFloat(r.temp_max-273.15,10).toFixed(2)," \u2103"),n.a.createElement("label",{htmlFor:"",className:"font-bold"},"Min: "),n.a.createElement("label",{htmlFor:""},parseFloat(r.temp_min-273.15,10).toFixed(2)," \u2103")),n.a.createElement("p",{className:"font-bold red"},"Additional Information"),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"",className:"font-bold"},"Pressure: "),n.a.createElement("label",{htmlFor:""},r.pressure," pci")),n.a.createElement("p",null,n.a.createElement("label",{htmlFor:"",className:"font-bold"},"Humidity: "),n.a.createElement("label",{htmlFor:""},r.humidity," %")),n.a.createElement("p",{className:"font10 grid-align-self-end"},n.a.createElement("label",{htmlFor:"",className:"font-bold"},"Visit "),n.a.createElement("a",{className:"blue",href:"https://openweathermap.org/",target:"_blank",rel:"noopener noreferrer"},"openweathermap.org"),n.a.createElement("label",{htmlFor:"",className:"font-bold"}," for mor information")))})),x=a(16),v=a.n(x);function F(){return n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{className:"full-width",src:v.a,alt:""}),n.a.createElement("h1",null,"City not found, try again..."))}var y=n.a.memo((function(e){var t=e.response;return 0===Object.keys(t).length?null:200!==t.cod?n.a.createElement(F,null):n.a.createElement("section",{className:"info-container grid"},n.a.createElement(g,{coord:t.coord}),n.a.createElement(N,{values:t}))}));function w(){var e=Object(r.useState)({}),t=Object(s.a)(e,2),a=t[0],l=t[1];return n.a.createElement("main",{className:"searcher-grid grid mleft-auto mright-auto mtop25"},n.a.createElement(b,{setResponse:l}),n.a.createElement(y,{response:a}))}function j(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,null),n.a.createElement(w,null))}a(29),a(30);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.14547080.chunk.js.map