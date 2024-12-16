"use strict";(self.webpackChunkeventbusforunity=self.webpackChunkeventbusforunity||[]).push([[840],{5185:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"getting-started/configure-registration-and-deregistration","title":"Customizing registration in MonoBehaviours","description":"This feature is specific for MonoBehaviours. For an example in pure C# see using eventbus outside of monobehaviours","source":"@site/docs/getting-started/configure-registration-and-deregistration.md","sourceDirName":"getting-started","slug":"/getting-started/configure-registration-and-deregistration","permalink":"/EventBusForUnity-docs/getting-started/configure-registration-and-deregistration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"documentationSidebar","previous":{"title":"Basic usage","permalink":"/EventBusForUnity-docs/getting-started/basic-usage"},"next":{"title":"Static [Listener] methods","permalink":"/EventBusForUnity-docs/getting-started/static-listeners"}}');var s=t(4848),r=t(8453);const o={sidebar_position:2},a="Customizing registration in MonoBehaviours",c={},l=[{value:"Explanation",id:"explanation",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"customizing-registration-in-monobehaviours",children:"Customizing registration in MonoBehaviours"})}),"\n",(0,s.jsxs)(n.p,{children:["This feature is specific for MonoBehaviours. For an example in pure ",(0,s.jsx)(n.code,{children:"C#"})," see ",(0,s.jsx)(n.a,{href:"/EventBusForUnity-docs/getting-started/using-eventbus-outside-of-monobehaviours",children:"using eventbus outside of monobehaviours"})]}),"\n",(0,s.jsxs)(n.p,{children:["See the below snippet for more info, pay attention in specific to the usage\nof ",(0,s.jsx)(n.code,{children:"IEventReceiver<T1, T2>"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'public class OnHelloWorldEvent\n{\n    public string Message;\n}\n\npublic partial class HelloWorldExample : MonoBehaviour, IEventReceiver<EventRegistrationAwake, EventDeregistrationOnApplicationQuit>\n{\n    [Listener]\n    private void OnHelloWorld(OnHelloWorldEvent evnt)\n    {\n        Debug.Log(evnt.Message);\n    }\n\n    private void Start()\n    {\n        EventBus.Send(new OnHelloWorldEvent()\n        {\n            Message = "Hello World"\n        });\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"explanation",children:"Explanation"}),"\n",(0,s.jsxs)(n.p,{children:["There are several classes available for customizing when registration and de-registration happens of your listener\nmethods. If you have a method already defined for these lifecycle methods (like ",(0,s.jsx)(n.code,{children:"Start()"})," for example) you don't need to change your code at all. Behind\nthe scenes the source generator will patch your ",(0,s.jsx)(n.code,{children:"Start()"})," method to register the listeners before your code is ran."]}),"\n",(0,s.jsx)(n.p,{children:"The available options are:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Registration:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EventRegistrationAwake"})," (when ",(0,s.jsx)(n.code,{children:"Awake()"})," runs in the lifecycle)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EventRegistrationOnEnable"})," (when ",(0,s.jsx)(n.code,{children:"OnEnable()"})," runs in the lifecycle)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EventRegistrationStart"})," (when ",(0,s.jsx)(n.code,{children:"Start()"})," runs in the lifecycle)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Deregistration"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EventDeregistrationOnApplicationQuit"})," (when ",(0,s.jsx)(n.code,{children:"OnApplicationQuit()"})," runs in the lifecycle)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EventDeregistrationOnDisable"})," (when ",(0,s.jsx)(n.code,{children:"OnDisable()"})," runs in the lifecycle)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EventDeregistrationOnDestroy"})," (when ",(0,s.jsx)(n.code,{children:"OnDestroy()"})," runs in the lifecycle)"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);