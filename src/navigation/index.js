export default [{
    title: 'Home',
    route: '/home',
    icon: 'Home',
  },
  {
    title: 'Sales',
    icon: 'ShoppingCart',
    children: [{
        title: 'Invoice',
        route: '/invoice'
      },
      {
        title: 'Customer',
        route: '/customer'
      }
    ]
  },
  {
    title: 'Service & Product',
    icon: 'Archive',
    children: [{
        title: 'Product',
        route: '/product'
      },
      {
        title: 'Inventory',
        route: '/inventory'
      }
    ]
  },
  {
    title: 'Purchase',
    icon: 'DollarSign',
    children: [{
        title: 'Bill',
        route: '/bill'
      },
      {
        title: 'Vendor',
        route: '/vendor'
      }
    ]
  },
  {
    title: 'Transaction',
    icon: 'Activity',
    children: [{
        title: 'Code of Account',
        route: '/coa',
        icon: 'HomeIcon',
        iconSrc: '../assets/img/icons/icon3.svg'
      },
      {
        title: 'Manual Transaction',
        route: '/manualtransaction',
        icon: 'HomeIcon',
        iconSrc: '../../assets/img/icons/icon3.svg'
      }
    ]
  },
  {
    title: 'Report',
    icon: 'FileText',
    children: [{
        title: 'Profit & Loss',
        route: '/profitloss',
        icon: 'HomeIcon',
        iconSrc: '../assets/img/icons/icon3.svg'
      },
      {
        title: 'Balance Sheet',
        route: '/balancesheet',
        icon: 'HomeIcon',
        iconSrc: '../../assets/img/icons/icon3.svg'
      }
    ]
  },
]