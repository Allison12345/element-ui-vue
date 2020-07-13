import Home from '@/pages/home'
import Layout from '@/pages/layout'
import Button from '@/pages/button'
import Container from '@/pages/container'
import Radio from '@/pages/radio'
import Checkbox from '@/pages/checkbox'
import MyInput from '@/pages/my-input'
import InputNumber from '@/pages/input-number'
import Select from '@/pages/select'
import Upload from '@/pages/upload'
import Form from '@/pages/form'
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
    path: '/checkbox',
    component: Checkbox
  },
  {
    path: '/input',
    component: MyInput
  },
  {
    path: '/inputNumber',
    component: InputNumber
  },
  {
    path: '/select',
    component: Select
  },
  {
    path: '/upload',
    component: Upload
  },
  {
    path: '/form',
    component: Form
  },
  {
    path: '*',
    redirect: '/home'
  }
]
export default routes
