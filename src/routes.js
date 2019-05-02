// routes.js

import Home from './components/Home.vue';
import Welcome from './components/Welcome.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

import AddProject from './components/AddProject.vue';
import Project from './components/Project.vue';
import Projects from './components/Projects.vue';

import Redirect from './components/Redirect.vue';
import Error from './components/404.vue';


const routes = [
    { path: '/', component: Welcome ,name: 'welcome'},
    { path: '/home', component: Home ,name: 'home'},

    { path: '/register', component: Register,name: 'register' },
    { path: '/login', component: Login ,name: 'login'},

    { path: '/projects/create', component: AddProject ,name:'add_project'},
    { path: '/project/:id', component: Project ,name:'project'},
    { path: '/projects', component: Projects ,name:'projects'},

    { path: '/redirect', component: Redirect, name: 'redirect' },
    { path: '/404', component: Error, name: '404' },
];

export default routes;