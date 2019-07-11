import VueRouter from 'vue-router'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Albums from './pages/Albums.vue'
import Photos from './pages/Photos.vue'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Albums
        },
        {
            path: '/reg',
            component: Register
        },
        {
            path: '/login',
            component: Login
        },
        {
            name:'Photos',
            path: '/photos',
            component: Photos
        }
    ],
    mode: "history"
});

