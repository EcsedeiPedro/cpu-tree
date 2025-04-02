interface MenuItemsProps {
  name: string;
  url: string;
  id: string;
}

const MenuItems: MenuItemsProps[] = [
  {
    id: 'desktop-item',
    name: 'Desktop',
    url: '/cpu-desktop'
  },
  {
    id: 'notebook-item',
    name: 'Notebook',
    url: '/cpu-notebook'
  },
  {
    id: 'netbook-item',
    name: 'Netbook',
    url: '/cpu-netbook'
  },
  {
    id: 'servidores-item',
    name: 'Servidores',
    url: '/cpu-server'
  }
]

export { MenuItems,  }