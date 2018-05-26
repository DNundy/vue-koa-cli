## 运行方式

1. 安装开发依赖包

    `npm install` || `npm i`

2. 运行开发环境

    `npm run dev` || `npm start`

3. 运行开发环境

    `npm run prod`

4. 只运行服务器

    `npm run server`

5. 只打包前端前端代码

    `npm run build`



# 【tips】

1、

【Des】: DeprecationWarning: Tapable.plugin is deprecated. Use new API on .hooks instead

【Solve】: 由于使用extract-text-webpack-plugin插件，版本过低引起。

但是目前使用的的确是新版mini-css-extract-plugin。。。不懂，暂时忽略

2、

【Des】: 调试时控制台有时会输出如下格式的提示'Not rewriting' + method + url + 'because ...'

【Solve】: 由connect-history-api-fallback插件引起，可忽略

详细解释见：https://segmentfault.com/a/1190000007890379

/src/server/config/history.js

3、
【Des】: [copy - webpack - plugin] WARNING - unable to locate

【Solve】: 该警告表示输出的目的文件夹不存在，会自动生成，请忽略！

build/build.js