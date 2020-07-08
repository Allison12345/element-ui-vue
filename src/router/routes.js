import Home from '@/pages/home'
import Layout from '@/pages/layout'
import Button from '@/pages/button'
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
    path: '/button',
    component: Button
  },
  {
    path: '*',
    redirect: '/home'
  }
]
export default routes
