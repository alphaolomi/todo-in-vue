// routes.js

import Home from './components/Home.vue';
import Welcome from './components/Welcome.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Project from './components/Project.vue';
import Projects from './components/Projects.vue';

const routes = [
    { path: '/', component: Welcome },
    { path: '/home', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/projects', component: Projects },
    { path: '/project/:id', component: Project },
];

export default routes;