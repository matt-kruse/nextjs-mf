This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Console Error

```
error - Error: Shared module react doesn't exist in shared scope default
    at ensureExistence (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:347:68)
    at C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:425:13
    at C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:410:20
    at webpack/sharing/consume/default/react (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:462:74)
    at __webpack_require__.m.<computed> [as webpack/sharing/consume/default/react] (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:470:54)
    at __webpack_require__ (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:139:42)
    at C:\workspace\nextjs-mf\.next\server\app\page.js:12203:21
    at (sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/cjs/react-server-dom-webpack-server.edge.development.js (C:\workspace\nextjs-mf\.next\server\app\page.js:14765:7)
    at __webpack_require__ (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:139:42)
    at (sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.edge.js (C:\workspace\nextjs-mf\.next\server\app\page.js:14780:22)
    at __webpack_require__ (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:139:42)
    at (sc_server)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.js&appDir=C%3A%5Cworkspace%5Cnextjs-mf%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cworkspace%5Cnextjs-mf&isDev=true&tsconfigPath=tsconfig.json&assetPrefix=&nextConfigOutput=! (C:\workspace\nextjs-mf\.next\server\app\page.js:457:114)
    at __webpack_require__ (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:139:42)
    at __webpack_exec__ (C:\workspace\nextjs-mf\.next\server\app\page.js:15964:52)
    at C:\workspace\nextjs-mf\.next\server\app\page.js:15965:28
    at Object.<anonymous> (C:\workspace\nextjs-mf\.next\server\app\page.js:15968:3)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Module.require (node:internal/modules/cjs/loader:1061:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at Object.requirePage (C:\workspace\nextjs-mf\node_modules\next\dist\server\require.js:134:12)
    at C:\workspace\nextjs-mf\node_modules\next\dist\server\load-components.js:51:73
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Object.loadComponentsImpl [as loadComponents] (C:\workspace\nextjs-mf\node_modules\next\dist\server\load-components.js:51:26)
    at async DevServer.findPageComponentsImpl (C:\workspace\nextjs-mf\node_modules\next\dist\server\next-server.js:667:36) {
  digest: undefined
}
wait  - compiling /_error (client and server)...
event - compiled client and server successfully in 287 ms (621 modules)
initializing internal-module-hoist for: webpack-runtime
Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
TypeError: Cannot read properties of null (reading 'useContext')
    at Object.useContext (C:\workspace\nextjs-mf\.next\server\pages\_document.js:44024:21)
    at Html (C:\workspace\nextjs-mf\.next\server\pages\_document.js:933:104)
    at renderWithHooks (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8367:16)
    at renderIndeterminateComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8441:15)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8676:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at finishClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8397:3)
    at renderClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8405:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8673:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderContextProvider (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8640:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8754:11)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderContextProvider (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8640:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8754:11)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at retryTask (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9302:5)
    at performWork (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9369:7)
    at C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9739:12
    at scheduleWork (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:78:3)
    at startWork (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9738:3)
    at C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9841:5
    at new Promise (<anonymous>)
    at Object.renderToReadableStream (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9790:10)
    at renderToString (C:\workspace\nextjs-mf\node_modules\next\dist\server\render.js:63:55)
    at C:\workspace\nextjs-mf\node_modules\next\dist\server\render.js:886:112
    at NextTracerImpl.trace (C:\workspace\nextjs-mf\node_modules\next\dist\server\lib\trace\tracer.js:65:20)
    at Object.renderToHTML (C:\workspace\nextjs-mf\node_modules\next\dist\server\render.js:886:57)
    at async doRender (C:\workspace\nextjs-mf\node_modules\next\dist\server\base-server.js:936:34)
    at async cacheEntry1.responseCache.get.incrementalCache.incrementalCache (C:\workspace\nextjs-mf\node_modules\next\dist\server\base-server.js:1059:28)
    at async C:\workspace\nextjs-mf\node_modules\next\dist\server\response-cache\index.js:83:36
TypeError: Cannot read properties of null (reading 'useContext')
    at Object.useContext (C:\workspace\nextjs-mf\.next\server\pages\_document.js:44024:21)
    at Html (C:\workspace\nextjs-mf\.next\server\pages\_document.js:933:104)
    at renderWithHooks (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8367:16)
    at renderIndeterminateComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8441:15)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8676:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at finishClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8397:3)
    at renderClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8405:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8673:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderContextProvider (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8640:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8754:11)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderContextProvider (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8640:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8754:11)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at retryTask (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9302:5)
    at performWork (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9369:7)
    at C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9739:12
    at scheduleWork (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:78:3)
    at startWork (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9738:3)
    at C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9841:5
    at new Promise (<anonymous>)
    at Object.renderToReadableStream (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9790:10)
    at renderToString (C:\workspace\nextjs-mf\node_modules\next\dist\server\render.js:63:55)
    at C:\workspace\nextjs-mf\node_modules\next\dist\server\render.js:886:112
    at NextTracerImpl.trace (C:\workspace\nextjs-mf\node_modules\next\dist\server\lib\trace\tracer.js:65:20)
    at Object.renderToHTML (C:\workspace\nextjs-mf\node_modules\next\dist\server\render.js:886:57)
    at async doRender (C:\workspace\nextjs-mf\node_modules\next\dist\server\base-server.js:936:34)
    at async cacheEntry1.responseCache.get.incrementalCache.incrementalCache (C:\workspace\nextjs-mf\node_modules\next\dist\server\base-server.js:1059:28)
    at async C:\workspace\nextjs-mf\node_modules\next\dist\server\response-cache\index.js:83:36
No ModuleFederationPlugin(s) found.
initializing internal-module-hoist for: webpack-runtime
Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
TypeError: Cannot read properties of null (reading 'useContext')
    at Object.useContext (C:\workspace\nextjs-mf\.next\server\pages\_document.js:44024:21)
    at Head (C:\workspace\nextjs-mf\.next\server\pages\_error.js:378:34)
    at renderWithHooks (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8367:16)
    at renderIndeterminateComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8441:15)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8676:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderNode (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9020:12)
    at renderChildrenArray (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8972:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8880:7)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderNode (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9020:12)
    at renderHostElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8351:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8682:5)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at finishClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8397:3)
    at renderClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8405:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8673:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at finishClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8397:3)
    at renderClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8405:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8673:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderIndeterminateComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8495:7)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8676:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderNode (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9020:12)
    at renderChildrenArray (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8972:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8880:7)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8702:9)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderNode (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9020:12)
    at renderChildrenArray (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8972:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8880:7)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8702:9)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderContextProvider (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8640:3)    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8754:11)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderContextProvider (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8640:3)    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8754:11)
TypeError: Cannot read properties of null (reading 'useContext')
    at Object.useContext (C:\workspace\nextjs-mf\.next\server\pages\_document.js:44024:21)
    at Head (C:\workspace\nextjs-mf\.next\server\pages\_error.js:378:34)
    at renderWithHooks (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8367:16)
    at renderIndeterminateComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8441:15)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8676:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderNode (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9020:12)
    at renderChildrenArray (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8972:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8880:7)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderNode (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9020:12)
    at renderHostElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8351:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8682:5)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at finishClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8397:3)
    at renderClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8405:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8673:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at finishClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8397:3)
    at renderClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8405:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8673:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderIndeterminateComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8495:7)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8676:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderNode (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9020:12)
    at renderChildrenArray (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8972:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8880:7)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8702:9)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderNode (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9020:12)
    at renderChildrenArray (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8972:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8880:7)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8702:9)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderContextProvider (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8640:3)    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8754:11)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderContextProvider (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8640:3)    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8754:11)
warn  - Fast Refresh had to perform a full reload. Read more: https://nextjs.org/docs/messages/fast-refresh-reload
error - Error: Shared module react doesn't exist in shared scope default
    at ensureExistence (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:347:68)
    at C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:425:13
    at C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:410:20
    at webpack/sharing/consume/default/react (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:462:74)
    at __webpack_require__.m.<computed> [as webpack/sharing/consume/default/react] (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:470:54)
    at __webpack_require__ (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:139:42)
    at C:\workspace\nextjs-mf\.next\server\app\page.js:12203:21
    at (sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/cjs/react-server-dom-webpack-server.edge.development.js (C:\workspace\nextjs-mf\.next\server\app\page.js:14765:7)
    at __webpack_require__ (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:139:42)
    at (sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.edge.js (C:\workspace\nextjs-mf\.next\server\app\page.js:14780:22)
    at __webpack_require__ (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:139:42)
    at (sc_server)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.js&appDir=C%3A%5Cworkspace%5Cnextjs-mf%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cworkspace%5Cnextjs-mf&isDev=true&tsconfigPath=tsconfig.json&assetPrefix=&nextConfigOutput=! (C:\workspace\nextjs-mf\.next\server\app\page.js:457:114)
    at __webpack_require__ (C:\workspace\nextjs-mf\.next\server\webpack-runtime.js:139:42)
    at __webpack_exec__ (C:\workspace\nextjs-mf\.next\server\app\page.js:15964:52)
    at C:\workspace\nextjs-mf\.next\server\app\page.js:15965:28
    at Object.<anonymous> (C:\workspace\nextjs-mf\.next\server\app\page.js:15968:3)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Module.require (node:internal/modules/cjs/loader:1061:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at Object.requirePage (C:\workspace\nextjs-mf\node_modules\next\dist\server\require.js:134:12)
    at C:\workspace\nextjs-mf\node_modules\next\dist\server\load-components.js:51:73
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Object.loadComponentsImpl [as loadComponents] (C:\workspace\nextjs-mf\node_modules\next\dist\server\load-components.js:51:26)
    at async DevServer.findPageComponentsImpl (C:\workspace\nextjs-mf\node_modules\next\dist\server\next-server.js:667:36) {
  digest: undefined
}
initializing internal-module-hoist for: webpack-runtime
Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
TypeError: Cannot read properties of null (reading 'useContext')
    at Object.useContext (C:\workspace\nextjs-mf\.next\server\pages\_document.js:44024:21)
    at Html (C:\workspace\nextjs-mf\.next\server\pages\_document.js:933:104)
    at renderWithHooks (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8367:16)
    at renderIndeterminateComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8441:15)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8676:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at finishClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8397:3)
    at renderClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8405:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8673:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderContextProvider (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8640:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8754:11)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderContextProvider (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8640:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8754:11)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at retryTask (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9302:5)
    at performWork (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9369:7)
    at C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9739:12
    at scheduleWork (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:78:3)
    at startWork (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9738:3)
    at C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9841:5
    at new Promise (<anonymous>)
    at Object.renderToReadableStream (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9790:10)
    at renderToString (C:\workspace\nextjs-mf\node_modules\next\dist\server\render.js:63:55)
    at C:\workspace\nextjs-mf\node_modules\next\dist\server\render.js:886:112
    at NextTracerImpl.trace (C:\workspace\nextjs-mf\node_modules\next\dist\server\lib\trace\tracer.js:65:20)
    at Object.renderToHTML (C:\workspace\nextjs-mf\node_modules\next\dist\server\render.js:886:57)
    at async doRender (C:\workspace\nextjs-mf\node_modules\next\dist\server\base-server.js:936:34)
    at async cacheEntry1.responseCache.get.incrementalCache.incrementalCache (C:\workspace\nextjs-mf\node_modules\next\dist\server\base-server.js:1059:28)
    at async C:\workspace\nextjs-mf\node_modules\next\dist\server\response-cache\index.js:83:36
TypeError: Cannot read properties of null (reading 'useContext')
    at Object.useContext (C:\workspace\nextjs-mf\.next\server\pages\_document.js:44024:21)
    at Html (C:\workspace\nextjs-mf\.next\server\pages\_document.js:933:104)
    at renderWithHooks (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8367:16)
    at renderIndeterminateComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8441:15)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8676:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at finishClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8397:3)
    at renderClassComponent (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8405:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8673:7)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderContextProvider (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8640:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8754:11)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at renderContextProvider (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8640:3)
    at renderElement (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8754:11)
    at renderNodeDestructiveImpl (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8843:11)
    at renderNodeDestructive (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:8815:14)
    at retryTask (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9302:5)
    at performWork (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9369:7)
    at C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9739:12
    at scheduleWork (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:78:3)
    at startWork (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9738:3)
    at C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9841:5
    at new Promise (<anonymous>)
    at Object.renderToReadableStream (C:\workspace\nextjs-mf\node_modules\next\dist\compiled\react-dom\cjs\react-dom-server.browser.development.js:9790:10)
    at renderToString (C:\workspace\nextjs-mf\node_modules\next\dist\server\render.js:63:55)
    at C:\workspace\nextjs-mf\node_modules\next\dist\server\render.js:886:112
    at NextTracerImpl.trace (C:\workspace\nextjs-mf\node_modules\next\dist\server\lib\trace\tracer.js:65:20)
    at Object.renderToHTML (C:\workspace\nextjs-mf\node_modules\next\dist\server\render.js:886:57)
    at async doRender (C:\workspace\nextjs-mf\node_modules\next\dist\server\base-server.js:936:34)
    at async cacheEntry1.responseCache.get.incrementalCache.incrementalCache (C:\workspace\nextjs-mf\node_modules\next\dist\server\base-server.js:1059:28)
    at async C:\workspace\nextjs-mf\node_modules\next\dist\server\response-cache\index.js:83:36
```
