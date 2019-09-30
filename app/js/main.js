import Vue from "vue"
import App from "./App.vue"
import router from "./router"
//全局加载vant组件
import './plugins/vant'

Vue.config.productionTip = false

new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
