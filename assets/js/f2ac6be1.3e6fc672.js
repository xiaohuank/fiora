(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(88)),a=n(90),c={id:"getting-start",title:"Getting Start",sidebar_label:"Getting Start"},s={unversionedId:"getting-start",id:"getting-start",isDocsHomePage:!1,title:"Getting Start",description:"fiora is an interesting chat application. It is developed based on node.js, mongodb, react and socket.io technologies",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Getting-Start.md",slug:"/getting-start",permalink:"/fiora/docs/getting-start",editUrl:"https://github.com/yinxin630/fiora/edit/master/docs/docs/Getting-Start.md",version:"current",sidebar_label:"Getting Start",sidebar:"docs",next:{title:"Install",permalink:"/fiora/docs/install"}},l=[{value:"Functions",id:"functions",children:[]},{value:"Screenshot",id:"screenshot",children:[]},{value:"Directory",id:"directory",children:[]},{value:"Contribution",id:"contribution",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"fiora is an interesting chat application. It is developed based on node.js, mongodb, react and socket.io technologies"),Object(o.b)("p",null,"The project started at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/yinxin630/chatroom-with-sails/commit/0a032372727550b8b4087f24ac299de03b677b9f"},"2015-11-04")),Object(o.b)("p",null,"Online address: ",Object(o.b)("a",{parentName:"p",href:"https://fiora.suisuijiang.com/"},"https://fiora.suisuijiang.com/"),Object(o.b)("br",{parentName:"p"}),"\n","Android / iOS app: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/yinxin630/fiora-app"},"https://github.com/yinxin630/fiora-app")),Object(o.b)("h2",{id:"functions"},"Functions"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Register an account and log in, it can save your data for a long time"),Object(o.b)("li",{parentName:"ol"},"Join an existing group or create your own group to communicate with everyone"),Object(o.b)("li",{parentName:"ol"},"Chat privately with anyone and add them as friends"),Object(o.b)("li",{parentName:"ol"},"Multiple message types, including text / emoticons / pictures / codes / files / commands, you can also search for emoticons"),Object(o.b)("li",{parentName:"ol"},"Push notification when you receive a new message, you can customize the notification ringtone, and it can also read the message out"),Object(o.b)("li",{parentName:"ol"},"Choose the theme you like, and you can set it as any wallpaper and theme color you like"),Object(o.b)("li",{parentName:"ol"},"Set up an administrator to manage users")),Object(o.b)("h2",{id:"screenshot"},"Screenshot"),Object(o.b)("img",{alt:"PC screenshot",src:Object(a.a)("img/screenshots/screenshot-pc.png"),style:{"max-width":"800px"}}),Object(o.b)("img",{alt:"Mobile screenshot",src:Object(a.a)("img/screenshots/screenshot-phone.png"),style:{"max-height":"667px"}}),Object(o.b)("h2",{id:"directory"},"Directory"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"|-- [.githubb]                // github actions\n|-- [.vscode]                 // vscode workspace config\n|-- [bin]                     // server scripts\n|-- [build]                   // webpack config\n|-- [client]                  // web client\n|-- [config]                  // application configs\n|-- [dist]                    // client buid output directory\n|-- [docs]                    // document\n|-- [public]                  // server static resources\n|-- [server]                  // server\n|-- [test]                    // unit test\n|-- [types]                   // typescript types\n|-- [utils]                   // util functions\n|-- .babelrc                  // babel config\n|-- .eslintignore             // eslint ignore list\n|-- .eslintrc                 // eslint config\n|-- .gitignore                // git ignore\n|-- .nodemonrc                // nodemon config\n|-- .prettierrc               // prettier config\n|-- Dockerfile                // docker file\n|-- LICENSE                   // fiora license\n|-- docker-compose.yaml       // docker compose config\n|-- jest.*.sj                 // jest config\n|-- package.json              // npm\n|-- tsconfig.json             // typescript config\n|-- yarn.lock                 // yarn\n...\n")),Object(o.b)("h2",{id:"contribution"},"Contribution"),Object(o.b)("p",null,"If you want to add functionality or fix bugs, please follow the process below:"),Object(o.b)("ol",{start:0},Object(o.b)("li",{parentName:"ol"},"Fork this repository and clone the fork post to the local"),Object(o.b)("li",{parentName:"ol"},"Installation dependencies ",Object(o.b)("inlineCode",{parentName:"li"},"yarn install")),Object(o.b)("li",{parentName:"ol"},"Modify the code and confirm it is bug free"),Object(o.b)("li",{parentName:"ol"},"Submit code, if eslint has reported error, please repair it and submit it again."),Object(o.b)("li",{parentName:"ol"},"Create a pull request")))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(16),i=n(94);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},94:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);