<template>
  <div class="container-invoice">
    <!-- content -->
    <b-row>
      <b-col>
        <b-card class="">
          <b-card-title>
            <b-row>
              <b-col>
                <h5 class="card-title">List Invoice</h5>
              </b-col>
              <b-col cols="6" md="4" offset="2" >
                <div class="d-flex align-items-center justify-content-end">
                  <b-form-input
                    class="d-inline-block mr-1"
                    placeholder="Search..."
                  />
                  <b-button variant="outline-info" to="/invoice/create" class="d-flex justify-content-center align-items-center textd-none" >
                    <plus-icon class="icon-head "></plus-icon>
                    <span class="textd-none">Add</span>
                </b-button>
                </div>
              </b-col>
            </b-row>
          </b-card-title>
          <b-table responsive="sm" :fields="fields" :items="invoices" class="no-top-line">
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
    /* border-top: none !important; */
  }

  a.plus-create {
   text-decoration: none;
   color: white; 
   border-radius: 50%;
  }
   a.plus-create .icon-head {
     margin-bottom: 5px;
   }

   div.no-top-line table tr th {
     border-top: none;
   } 
  
</style>