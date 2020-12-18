const path = require('path')

module.exports = {
  // eslint语法检测关闭
  lintOnSave: false,
 
  // 路径别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@',path.join(__dirname,'./src'))
      .set('Assets',path.join(__dirname,'./src/assets'))
      .set('Comp',path.join(__dirname,'./src/components'))
      .set('IF',path.join(__dirname,'./src/interface'))
      .set('Pages',path.join(__dirname,'./src/pages'))
      .set('Router',path.join(__dirname,'./src/router'))
      .set('Utils',path.join(__dirname,'./src/utils'))
  },

  // devServer
  devServer: {
    // proxy 反向代理
    open: true,
    port: 9000,
    proxy:{
      '/test':{
        target: 'https://elm.cangdu.org',
        changeOrigin:true
      },
      '/ajax': {
        target: 'https://m.maoyan.com',
        changeOrigin: true 
      },
      '/api':{
        target: 'http://www.qinqin.net',
        changeOrigin: true,
        //路径重写  ^表示匹配路径中的第一个
        pathRewrite: {
          '^/api': '' // 去掉
        }
      }
    }
  },

  // css rem
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 设计稿宽度的1/10，一般为75
          require('postcss-px2rem')({
            remUnit: 37.5
          }),
        ]
      }
    }
  }
}