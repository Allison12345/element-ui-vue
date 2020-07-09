export const submenuList = [
  {
    groupIndex: 1,
    iconClass: 'el-icon-message',
    menuTitle: '导航一',
    itemGroup: [
      {
        groupTitle: '分组一',
        items: [
          { itemIndex: '1-1', label: '选项1' },
          { itemIndex: '1-2', label: '选项2' }
        ]
      },
      {
        groupTitle: '分组二',
        items: [{ itemIndex: '1-3', label: '选项3' }]
      }
    ],
    submenuGroup: [
      {
        menuTitle: '选项4',
        groupIndex: '1-4',
        itemGroup: [
          {
            items: [
              { itemIndex: '1-4-1', label: '选项4' },
              { itemIndex: '1-4-2', label: '选项5' }
            ]
          }
        ]
      }
    ]
  },
  {
    groupIndex: 2,
    iconClass: 'el-icon-menu',
    menuTitle: '导航二',
    itemGroup: [
      {
        groupTitle: '分组一',
        items: [
          { itemIndex: '2-1', label: '选项1' },
          { itemIndex: '2-2', label: '选项2' }
        ]
      },
      {
        groupTitle: '分组二',
        items: [{ itemIndex: '2-3', label: '选项3' }]
      }
    ],
    submenuGroup: [
      {
        menuTitle: '选项4',
        groupIndex: '2-4',
        itemGroup: [
          {
            items: [
              { itemIndex: '2-4-1', label: '选项4' },
              { itemIndex: '2-4-2', label: '选项5' }
            ]
          }
        ]
      }
    ]
  },
  {
    groupIndex: 3,
    iconClass: 'el-icon-setting',
    menuTitle: '导航三',
    itemGroup: [
      {
        groupTitle: '分组一',
        items: [
          { itemIndex: '3-1', label: '选项1' },
          { itemIndex: '3-2', label: '选项2' }
        ]
      },
      {
        groupTitle: '分组二',
        items: [{ itemIndex: '3-3', label: '选项3' }]
      }
    ],
    submenuGroup: [
      {
        menuTitle: '选项4',
        groupIndex: '3-4',
        itemGroup: [
          {
            items: [
              { itemIndex: '3-4-1', label: '选项4' },
              { itemIndex: '3-4-2', label: '选项5' }
            ]
          }
        ]
      }
    ]
  }
]
export const DropdownList = [
  { iconClass: 'el-icon-setting', dropdownItems: ['查看', '新增', '删除'] }
]
const item = {
  date: '2016-05-02',
  name: '吴川平',
  address: '上海市普陀区金沙江路 1518 弄'
}
export const tableData = Array(20).fill(item)
