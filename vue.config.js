module.exports = {
    //baseUrl 从 Vue CLI 3.3 起已弃用，请使用publicPath
    // 项目基础路径
    publicPath: '',

    // 输出的路径
    outputDir: "dist",

    //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: "",

    // 项目唯一页面决定于路径
    indexPath: 'index.html',

    // 它支持webPack-dev-server的所有选项   跨域设置
    devServer: {
        proxy: "http://localhost:3000",
    }

};