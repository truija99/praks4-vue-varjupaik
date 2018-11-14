import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Varjupaigas from './views/Varjupaigas.vue';
import Kaotatud from './views/Kaotatud.vue';
import Toetajatele from './views/Toetajatele.vue';
import Meist from './views/Meist.vue';
import Kontakt from './views/Kontakt.vue';
import Kassid from './views/Kassid.vue';
import Koerad from './views/Koerad.vue';
import Cat from './views/Cat.vue';
import Dog from './views/Dog.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/varjupaigas',
      name: 'varjupaigas',
      component: Varjupaigas,
    },
    {
      path: '/kaotatud',
      name: 'kaotatud',
      component: Kaotatud,
    },
    {
      path: '/toetajatele',
      name: 'toetajatele',
      component: Toetajatele,
    },
    {
      path: '/meist',
      name: 'meist',
      component: Meist,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt,
    },
    {
      path: '/kassid',
      name: 'kassid',
      component: Kassid,
    },
    {
      path: '/koerad',
      name: 'koerad',
      component: Koerad,
    },
    {
      path: '/cat',
      name: 'cat',
      component: Cat,
    },
    {
      path: '/dog',
      name: 'dog',
      component: Dog,
    },
  ],
});
