## vue-swiper API文档
https://www.swiper.com.cn/api/index.html

## 跨域的几种实现方式

1. nginx代理
这种方式本地和线上的开发方式都比较简单；本地不需要添加.env.dev和.env.prod配置，以及config.js文件，只需要关系vue.config.js然后做环境地阿里即可；不同的环境，设置不同的代理域名

2. CORS解决跨域
这种方式不需要配置nginx；但是本地需要维护多套环境，根据process.env.NODE_DEV来切换开发和线上环境地址；config中做切换；

线上nginx配置：
location /api/ {
  proxy_pass http://mall-pre.springboot.cn/;
}
线上nginx配置的时候，代理域名后面需要加/,这样在请求的时候会去掉/api，否则请求的时候会包含/api

## 申请加入蓝湖查看小米商城设计稿
在问答区或者课程qq群里进行申请，并附上邮箱地址，前提是必须注册蓝湖帐号

## swiper中文文档
https://www.swiper.com.cn/

## Css3动画库
https://daneden.github.io/animate.css/

## 微信扫码支付开发文档
https://pay.weixin.qq.com/wiki/doc/api/index.html

https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=6_5