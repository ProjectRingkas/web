import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from '../views/Category.vue'
import Inventory from '../views/Inventory.vue'
import Bills from '../views/bill/Bills.vue'
import Vendors from '../views/Vendors.vue'
import COA from '../views/COA.vue'
import ManualTransaction from '../views/ManualTransaction.vue'
import Neraca from '../views/Neraca.vue'
import UntungRugi from '../views/UntungRugi.vue'

import Home from '../views/Home.vue'

import Invoice from '../views/invoice/Invoice.vue'
import CreateInvoice from '../views/invoice/Create.vue'

import Login from '../components/Login/Login'
import CreateBill from '../views/bill/Create.vue'

import Customer from '../views/customer/Customer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: Invoice
  },
  {
    path: '/invoice/create',
    name: 'CreateInvoice',
    component: CreateInvoice
  },
  {
    path: '/bill',
    name: 'Bills',
    component: Bills
  },
  {
    path: '/bill/create',
    name: 'CreateBill',
    component: CreateBill
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  },
  {
    path: '/bills',
    name: 'Bills',
    component: Bills
  },
  {
    path: '/vendors',
    name: 'Vendors',
    component: Vendors
  },
  {
    path: '/coa',
    name: 'COA',
    component: COA
  },
  {
    path: '/manualtransaction',
    name: 'ManualTransaction',
    component: ManualTransaction
  },
  {
    path: '/neraca',
    name: 'Neraca',
    component: Neraca
  },
  {
    path: '/untungrugi',
    name: 'UntungRugi',
    component: UntungRugi
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  const bypass = false;

  if (authRequired && !loggedIn && bypass) {
    return next('/login');
  }

  if (to.path == '/') return next('/login')

  next();
})

export default router
