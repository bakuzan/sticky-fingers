import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const routerInstance = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/history',
      name: 'history',
      component: () =>
        import(/* webpackChunkName: "history" */ './views/History.vue')
    }
  ]
});

const PAGE_TITLES = new Map([
  ['default', 'Sticky Fingers'],
  ['home', 'Sudoku'],
  ['history', 'Game history']
]);

routerInstance.afterEach((toRoute) => {
  const pageTitle = PAGE_TITLES.get(toRoute.name || '');

  window.document.title = pageTitle
    ? `${pageTitle} | Sticky Fingers`
    : (PAGE_TITLES.get('default') as string);
});

export default routerInstance;
