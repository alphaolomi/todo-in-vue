// routes.js

import Home from './components/Home.vue';
import Welcome from './components/Welcome.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Project from './components/Project.vue';
import Projects from './components/Projects.vue';
import Redirect from './components/Redirect.vue';


const routes = [
    { path: '/', component: Welcome ,name: 'welcome'},
    { path: '/home', component: Home ,name: 'home'},
    { path: '/register', component: Register,name: 'register' },
    { path: '/login', component: Login ,name: 'login'},
    { path: '/project/:id', component: Project ,name:'project'},
    { path: '/projects', component: Projects ,name:'projects'},
    { path: '/redirect', component: Redirect, name: 'redirect' },
];

export default routes;