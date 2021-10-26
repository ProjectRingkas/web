export default [
    {
      title: 'Home',
      route: '/home',
      icon: 'Home',
    },
    {
      title: 'Sales',
      icon: 'ShoppingCart',
      children: [
        {
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
      children: [
        {
            title: 'Inventory',
            route: '/inventory'
        },
        {
            title: 'Customer',
            route: '/customer'
        }
      ]
    },
    {
      title: 'Purchase',
      icon: 'DollarSign',
      children: [
        {
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
      children: [
        {
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
      children: [
        {
            title: 'Laba Rugi',
            route: '/labarugi',
            icon: 'HomeIcon',
            iconSrc: '../assets/img/icons/icon3.svg'
        },
        {
            title: 'Neraca',
            route: '/neraca',
            icon: 'HomeIcon',
            iconSrc: '../../assets/img/icons/icon3.svg'
        }
      ]
    },
  ]
  