import Vue from 'vue';
import Vuex from 'vuex';
import index from './module/index';
import details from './module/details';
import color from './module/color';
import quotation from './module/quotation';
import Login from './module/Login';

import createLogger from 'vuex/dist/logger';
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        index,
        details,
        color,
        quotation,
        Login
    },
    plugins:[createLogger()]
})