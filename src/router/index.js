import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import Project from '@/views/ProjectView';
import About from '@/views/AboutView';
import Skill from '@/views/SkillView';
import Education from '@/views/EducationView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  },
  {
    path: '/education',
    name: 'Education',
    component: Education,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
