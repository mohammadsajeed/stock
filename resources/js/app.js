require('./bootstrap');

require('alpinejs');


import Vue from 'vue';
import App from './App.vue'
import  router from './Router'

const app = new Vue({
    el:'#app',
    router,

    render : h=>h(App)
});