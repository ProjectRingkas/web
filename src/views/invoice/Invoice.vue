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
          <b-table responsive="sm" :busy="isBusy" :fields="fields" :items="invoices" class="no-top-line">
            <template #table-busy>
              <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>
            <template #cell(order.status)="data">
              <b-badge
                pill
                :variant="data.value.variant"
                class="badge-local"
              >
                {{ data.value.status }}
              </b-badge>
            </template>
            <template #cell(action)="data">
              <div class="">
                <b-dropdown
                variant="link"
                no-caret 
                toggle-class="px-1 py-0"
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
          <ModalPayment ref="payment" id="modal-lg" size="lg" title="Add Payment" />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import ModalPayment from '../ModalPayment.vue'
import {MoreVerticalIcon, PlusIcon}  from 'vue-feather-icons';
import service from '../../api/invoice.service';

export default {
  name: "Invoice",
  components:{
    MoreVerticalIcon,
    PlusIcon,
    ModalPayment
  },
  data(){
    return {
      isBusy: true,
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
      //console.log(data);
      this.$refs.payment.setInvoice(data.item.order);
    }
  },
  mounted() {
    // Request get all invoice order
    service.getAll().then( (result) => {
      //console.log(result, 'result')
      if( result.error ) alert('Error')
      this.setInvoices(result.message)
      this.isBusy = false
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