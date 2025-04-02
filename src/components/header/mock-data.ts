interface MenuItemsProps {
  name: string;
  url: string;
  id: string;
}

const MenuItems: MenuItemsProps[] = [
  {
    id: 'desktop-item',
    name: 'Desktop',
    url: '#'
  },
  {
    id: 'notebook-item',
    name: 'Notebook',
    url: '#'
  },
  {
    id: 'netbook-item',
    name: 'Netbook',
    url: '#'
  },
  {
    id: 'servidores-item',
    name: 'Servidores',
    url: '#'
  }
]

export { MenuItems,  }