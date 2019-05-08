单页面应用程序(SPA)通常使用一个web浏览器可以访问的索引文件，比如index.html，然后，在HTML5 History API的帮助下（react-router就是基于History API实现的），借助JavaScript处理应用程序中的导航。当用户单击刷新按钮或直接通过输入地址的方式访问页面时，会出现找不到页面的问题，因为这两种方式都绕开了History API，而我们的请求又找不到后端对应的路由，页面返回404错误。
connect-history-api-fallback中间件很好的解决了这个问题。具体来说，每当出现符合以下条件的请求时，它将把请求定位到你指定的索引文件(默认为/index.html)。

请求是Get请求
请求的Content-Type类型是text/html类型
不是直接的文件请求，即所请求的路径不包含.(点)字符
不匹配option参数中提供的模式
--------------------- 
用了connect-history-api-fallback中间件后所有的get请求都会变成index，所以get请求根本没有执行，设置rewrites就行了
    app.use(history({
    rewrites: [
      {
        from: /^\/api\/.*$/,
        to: function(context) {
            return context.parsedUrl.path
        }
      }
    ]
  }))
  设置了rewrites之后表示所有带api的get都代理到parsedUrl.path，其实就是原来的路径