import Home from '@/pages/home'
import Layout from '@/pages/layout'
import Button from '@/pages/button'
import Container from '@/pages/container'
import Radio from '@/pages/radio'
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
    path: '/radio',
    component: Radio
  },
  {
    path: '*',
    redirect: '/home'
  }
]
export default routes
