/**
 * Vue Router
 *
 * @library
 *
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import Router from 'vue-router'
import Meta from 'vue-meta'
import data from '../store/state.js'
// Routes
import paths from './paths'

function route (path, view, name) {
  return {
    name: name || view,
    path,
    component: (resovle) => import(
      `@/views/${view}.vue`
    ).then(resovle)
  }
}

// Create a new router
const router = new Router({
  mode: 'history',
  routes: paths.map(path => route(path.path, path.view, path.name)).concat([
    { path: '*', redirect: '/dashboard2' }
  ]),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})


const isLoggedIn = false

router.beforeEach((to, from, next) => {
    if(to.path != '/login') {
        var check = ''
        check = localStorage.getItem('checklogin')
        if(check == '' || check == undefined) {
            console.log('login');
            // console.log(data.test != undefined);

            console.log(localStorage.getItem('checklogin'));
            // console.log(data.test);
            // logger('There is a token, resume. (' + to.path + ')');
            next('login');
        } else {
            console.log('user ok');
              console.log(localStorage.getItem('checklogin'));
            // logger('There is no token, redirect to login. (' + to.path + ')');
            next();
        }
    } else {
        // logger('You\'re on the login page');
        next(); // This is where it should have been
    }
    // next(); - This is in the wrong place
});

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   // const publicPages = ['/login', '/register'];
//   // const authRequired = !publicPages.includes(to.path);
//   const loggedIn = '';
//
//   if (loggedIn == '') {
//     return next('/login');
//   }
//
//   next();
// })

Vue.use(Meta)

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.GOOGLE_ANALYTICS) {
  Vue.use(VueAnalytics, {
    id: process.env.GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development'
    }
  })
}

export default router
