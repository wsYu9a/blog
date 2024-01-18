// 完整的 config.js 文件内容，可根据需要自行删减
module.exports = {
     // 语言  
     locales: {
       '/': {
         lang: 'zh-CN'
       }
     },
     theme: 'reco',
     title: 'Yu9',
     description: '个人知识库',
     head: [
       ['link', { rel: 'icon', href: '/logo.png' }],
       // 主题 移动端优化
       ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
     ],
     base: '/blog/',
     markdown: {
       lineNumbers: true // 代码块显示行号
     },
     plugins: [
        [
            "sakura",
            {
              num: 20, // 默认数量
              show: true, //  是否显示
              zIndex: -1, // 层级
              img: {
                replace: false, // false 默认图 true 换图 需要填写httpUrl地址
              },
        }],
        [
            "cursor-effects",
            {
              size: 4, // size of the particle, default: 2
              shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
              zIndex: 999999999, // z-index property of the canvas, default: 999999999
        }],
        //分页插件
        ['@vuepress-reco/vuepress-plugin-pagation', {
                perPage: 5  // 每页展示条数
        }],
        ['@vuepress-reco/vuepress-plugin-back-to-top']
     ],
     themeConfig: {
       // 主题模式 博客模式
       type: 'blog',
       author: 'Yu9',
       logo: '/logo.png',
       // 个人信息的头像
       authorAvatar: '/avatar.jpg',
       // 内置搜索
       search: true,
       searchMaxSuggestions: 10,
       // 子侧边栏
       subSidebar: 'auto',
       sidebarDepth: 1,
       lastUpdated: '更新时间',
       // 设置时区偏移量（8小时）
       timezoneOffset: 8 * 60 * 60 * 1000,
       // 博客配置
       blogConfig: {
         socialLinks: [
           {icon: 'reco-github', link: 'https://github.com/wsYu9a/blog'}
         ],
         tag: {
             location: 5, // 在导航栏菜单中所占的位置，默认4
             text: "Tag", // 默认文案 “标签”
          },
       },
       // 导航栏配置
       nav: [ 
         { text: '博客简介', link: '/profile', icon:''},
         { text: "Github", link: "https://github.com/wsYu9a/blog" },       
         { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
         { text: '关于Yu9', link: '/about'},
       ],
    //     sidebar: [
    //     {
    //       title: "欢迎学习",
    //       path: "/",
    //       collapsable: false,  // 是否折叠
    //       children: [{ title: "博客简介", path: "/" }],
    //     },
    //     {
    //       title: "基础篇",
    //       path: "/java/1",
    //       collapsable: true,
    //       children: [
    //         { title: "第一篇", path: "/java/1" },
    //         { title: "第二篇", path: "/java/2" },
    //       ]
    //     } 
    //   ]
  
     }
   };
   
   