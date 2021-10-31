<template>
  
  <div class="container-invoice">
    <!-- content -->
    <b-row>
      <b-col>
        <b-card class="container">
          <div class="card-header">
            <b-row>
              <b-col>
                <b-card-title>List Invoice</b-card-title>
              </b-col>
              <b-col class="text-right">
                <router-link to="/invoice/create" class="plus-create bg-success align-middle">
                <plus-icon class="icon-head"></plus-icon></router-link>
                <!-- <a href="./create" >
                </a> -->
                
              </b-col>
            </b-row>
          </div>
          <b-table responsive="sm" :fields="fields" :items="invoices" >
            <template #cell(order.status)="data">
              <b-badge
                pill
                :variant="data.value.variant"
              >
                {{ data.value.status }}
              </b-badge>
            </template>
            <template #cell(action)="data">
              <div class="">
                <b-dropdown
                variant="link"
                no-caret 
                >
                  <template #button-content>
                    <more-vertical-icon class="icon-head"></more-vertical-icon>
                  </template>
                  <b-dropdown-item v-b-modal.modal-lg @click="showAddPayment(data)">Add Payment</b-dropdown-item>
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
                
              </div>
            </template>
          </b-table>
          <ModalPayment ref="payment" id="modal-lg" size="lg" title="Large Modal" />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import ModalPayment from '../ModalPayment.vue'
import {MoreVerticalIcon, PlusIcon}  from 'vue-feather-icons';
import axios from 'axios';

export default {
  name: "Invoice",
  components:{
    MoreVerticalIcon,
    PlusIcon,
    ModalPayment
  },
  data(){
    return {
      fields:[
        {
          key:'order.customer[0].name',
          label: 'Customer',
        },
        {
          key:'order.total_price',
          label: 'Total',
          tdClass: 'text-center',
          thClass: 'text-center'
        },
        { 
          key: 'order.status',
          label: 'Status',
          tdClass: 'text-center',
          thClass: 'text-center' 
        },
        { 
          key: 'order.date', 
          label: 'Date',
          tdClass: 'text-center',
          thClass: 'text-center' 
        },
        { 
          key: 'action', 
          label: 'Action',
          tdClass: 'text-center',
          thClass: 'text-center' 
        }
      ],
      invoices:[]
    }
  },
  methods: {
    setInvoices(data) {
      this.invoices = data;
    },
    showAddPayment(data) {
      console.log(data);
      this.$refs.payment.setInvoice(data.item.order);
    }
  },
  mounted() {
    // Request get all invoice order
    axios
      .get('http://localhost:3000/api/invoice/getall')
      .then(response => {
        console.log(response.data)
        response.data.data.forEach(data => {
          if (data.order.status == "Pending") data.order.status = { status: 'Pending', variant: 'warning' };
          else if (data.order.status == "Partially Paid") data.order.status = { status: 'Partially Paid', variant: 'primary' };
          else if (data.order.status == "Fully Paid") data.order.status = { status: 'Fully Paid', variant: 'success' };

          data.order.date = data.order.date.substring(0, data.order.date.indexOf('T'));
          data.order.type = 'orders';
        });
        console.log(response.data.data)
        this.setInvoices(response.data.data)
      })
      .catch((err) => {
        console.log(err.response);
        this.setInvoices([
          {
            order: {
              customer:[ {
                'name': 'Test'
              } ]
            }
          }
        ])
      })
  },
}
</script>

<style>
  div.card-header {
    background: white;
    border-bottom: none;
    padding-left: 5px;
  }

  .card-header h4 {
    font-weight: bold;
    font-size: 20px;
  }

  table th {
    font-weight: 600;
    border-top: none !important;
  }

  a.plus-create {
   text-decoration: none;
   color: white; 
   border-radius: 50%;
  }
   a.plus-create .icon-head {
     margin-bottom: 5px;
   }
  
</style>