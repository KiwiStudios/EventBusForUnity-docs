"use strict";(self.webpackChunkeventbusforunity=self.webpackChunkeventbusforunity||[]).push([[237],{723:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"getting-started/dynamic-listener-registration","title":"Dynamic/Runtime Listener registration","description":"You might want to add a listener during runtime for a certain event. Have a look at the below snippet","source":"@site/docs/getting-started/dynamic-listener-registration.md","sourceDirName":"getting-started","slug":"/getting-started/dynamic-listener-registration","permalink":"/EventBusForUnity-docs/getting-started/dynamic-listener-registration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"documentationSidebar","previous":{"title":"Using the EventBus in pure C#","permalink":"/EventBusForUnity-docs/getting-started/using-eventbus-outside-of-monobehaviours"},"next":{"title":"Async usage","permalink":"/EventBusForUnity-docs/getting-started/async-usage"}}');var i=t(4848),r=t(8453);const o={sidebar_position:5},a="Dynamic/Runtime Listener registration",l={},c=[];function d(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"dynamicruntime-listener-registration",children:"Dynamic/Runtime Listener registration"})}),"\n",(0,i.jsx)(n.p,{children:"You might want to add a listener during runtime for a certain event. Have a look at the below snippet"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'using Assembly_CSharp.EventBusForUnity;\n\npublic class RuntimeListenerExample : MonoBehaviour\n{\n    public class RegisterHelloWorldEvent\n    {\n        public string Message;\n    }\n    \n    private void Start() \n    {\n        Action<RegisterHelloWorldEvent> listener = message =>\n        {\n            Debug.Log($"Message: {message.Message}");\n        };\n\n        EventBus.Register(listener);\n\n        EventBus.Send(new RegisterHelloWorldEvent()\n        {\n            Message = "Hello World"\n        });\n\n        EventBus.Deregister(listener);\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Of course, this also works outside a ",(0,i.jsx)(n.code,{children:"MonoBehaviour"})," component and can be called anywhere."]}),"\n",(0,i.jsxs)(n.p,{children:["When following this pattern it is important that what you pass to ",(0,i.jsx)(n.code,{children:"EventBus.Register()"})," is the same as ",(0,i.jsx)(n.code,{children:"EventBus.Deregister()"}),". For example if you do the below you will have a bad time:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'Action<RegisterHelloWorldEvent> listener = message =>\n{\n    Debug.Log($"Message: {message.Message}");\n};\n\nAction<RegisterHelloWorldEvent> listenerTwo = message =>\n{\n    Debug.Log($"Message: {message.Message}");\n};\n\nEventBus.Register(listener);\nEventBus.Deregister(listenerTwo); // won\'t work!\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);