import Home from '@/pages/home'
import Layout from '@/pages/layout'
import Button from '@/pages/button'
import Container from '@/pages/container'
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
    path: '/container',
    component: Container
  },
  {
    path: '*',
    redirect: '/home'
  }
]
export default routes
