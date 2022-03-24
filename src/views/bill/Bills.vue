<template>
  <div class="container-table">
    <!-- content -->
    <b-row>
      <b-col>
        <b-card class="">
          <b-card-title>
            <b-row>
              <b-col>
                <h5 class="card-title">List Bill</h5>
              </b-col>
              <b-col cols="6" md="4" offset="2" >
                <div class="d-flex align-items-center justify-content-end">
                  <b-form-input
                    class="d-inline-block mr-1"
                    placeholder="Search..."
                  />
                  <b-button variant="outline-info" to="/bill/create" class="d-flex justify-content-center align-items-center textd-none" >
                    <plus-icon class="icon-head "></plus-icon>
                    <span class="textd-none">Add</span>
                </b-button>
                </div>
              </b-col>
            </b-row>
          </b-card-title>
          <div>
          <b-table responsive="sm" :fields="fields" :busy="isBusy" :items="bills" >
            <template #table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
            </template>
            <template #cell(bill.status)="data">
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
                  <div class="btn btn-link px-1 py-0"> 
                    <eye-icon class="icon-head"/>
                  </div>
                  <b-dropdown
                  right 
                  variant="link"
                  no-caret 
                  toggle-class="px-1 py-0"
                  >
                    <template #button-content >
                      <more-vertical-icon class="icon-head"></more-vertical-icon>
                    </template>
                    <b-dropdown-item v-b-modal.modal-lg @click="showAddPayment(data)">Add Payment</b-dropdown-item>
                    <b-dropdown-item href="#">Edit</b-dropdown-item>
                    <b-dropdown-item href="#">Delete</b-dropdown-item>
                  </b-dropdown>
                </div>
              </template>
          </b-table>
          </div>
          <BillPayment ref="payment"  id="modal-lg" size="lg" title="Payment" />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BillPayment from '../modal/BillPayment.vue'
import {MoreVerticalIcon, EyeIcon, PlusIcon}  from 'vue-feather-icons'
import service from '../../api/bill.service'

export default {
  name: "Invoice",
  components:{
    MoreVerticalIcon,
    PlusIcon,
    EyeIcon,
    BillPayment
  },
  data(){
    return {
      isBusy: true,
      fields:[
        {
          key:'bill.vendor[0].name',
          label: 'Vendor',
        },
        {
          key:'bill.bill_item[0].name',
          label: 'Item',
          tdClass: 'text-center',
          thClass: 'text-center'
        },
        {
          key:'bill.bill_item[0].transaction_price',
          label: 'Total',
          tdClass: 'text-center',
          thClass: 'text-center'
        },
        { 
          key: 'bill.status', 
          label: 'Status',
          tdClass: 'text-center',
          thClass: 'text-center' 
        },
        { 
          key: 'bill.date', 
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
      bills:[]
    }
  },
  methods: {
    setBill(data) {
      this.bills = data;
    },
    showAddPayment(data) {
      this.$refs.payment.setInvoice(data.item.bill);
    }
  },
  mounted() {
    // Request get all bill
    service.getAll().then( (response) => {
      this.setBill(response.message);
      this.isBusy = false
    }).catch((err)=> {
      alert(err)
    })
  },
}
</script>

<style>
  span.badge-local {
    font-size: 100%;
    font-weight: 500;
  }
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
  
</style>