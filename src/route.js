//route.js - We need to craate file under src
import Home from './views/Home.vue';
import Midia1 from './views/Midia1.vue';
import Midia from '../src/components/Midia.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:imdbID',
    name: 'Midia',
    component: Midia,
    props: true
  },
  {
    path: '/midia/:rota',
    name: 'Midia1',
    component: Midia1,
    props: true
  }
]
export default routes