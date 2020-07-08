import Page from './page'
import Cells from './cells'
import Cell from './cell'
import Icon from './icon'
import HomePane from './home-pane'

const components = [Page, Cells, Cell, Icon, HomePane]
const install = Vue => {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.component(component.name, component))
}

export default {
  install
}
