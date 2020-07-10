import Page from './page'
import Cells from './cells'
import Cell from './cell'
import Icon from './icon'
import HomePane from './home-pane'
import MenuItem from './menu/menu-item'
import MenuItemGroup from './menu/menu-item-group'
import Submenu from './menu/submenu'
import Dropdown from './menu/dropdown'
import MyTable from './menu/my-table'
import MySelect from './select'

const components = [
  Page,
  Cells,
  Cell,
  Icon,
  HomePane,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Dropdown,
  MyTable,
  MySelect
]
const install = Vue => {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.component(component.name, component))
}

export default {
  install
}
