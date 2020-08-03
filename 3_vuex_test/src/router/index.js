import Vue from 'vue'
import VueRouter from 'vue-router'

import NewComponent from "../views/NewComponent";
import HelloWorld from "../components/HelloWorld";
import UserComponent from "../views/user/UserComponent";
import UserProfileComponent from "../views/user/UserProfileComponent";
import UserPostComponent from "../views/user/UserPostComponent";

//router
import firstRoute from './firstRoute'
import secondRoute from './secondRoute'

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
        },
        {
            path: '/first',
            component: UserComponent,
            children: [
                {
                    path: 'profile',
                    component: UserProfileComponent
                },
                {
                    path: 'post',
                    component: UserPostComponent
                }
            ]
        }
    ]
})

export default router;
