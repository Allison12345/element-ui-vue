import Home from '@/pages/home'
import Layout from '@/pages/layout'
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/layout',
    component: Layout
  },
  {
    path: '*',
    redirect: '/home'
  }
]
export default routes
