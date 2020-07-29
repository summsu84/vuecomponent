import Vue from 'vue'
import VueRouter from 'vue-router'

import NewComponent from "../views/NewComponent";
import HelloWorld from "../components/HelloWorld";

Vue.use(VueRouter);

// export
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/hello',
            component: HelloWorld
        },
        {
            path: '/new',
            component: NewComponent
        }
    ]
})

export default router;