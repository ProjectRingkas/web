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
          <b-table responsive="sm" :fields="fields" :items="bills" >
            <template #cell(status)="data">
              <b-badge class="badge-local" pill :variant="data.value.variant" >
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
                    <b-dropdown-item @click="showAddPayment(data)">Add Payment</b-dropdown-item>
                    <b-dropdown-item href="#">Edit</b-dropdown-item>
                    <b-dropdown-item href="#">Delete</b-dropdown-item>
                  </b-dropdown>
                </div>
              </template>
          </b-table>
          </div>
          <ModalPayment ref="payment"  id="modal-lg" size="lg" title="Large Modal" />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ModalPayment from '../ModalPayment.vue'
import axios from 'axios';
import {MoreVerticalIcon, EyeIcon, PlusIcon}  from 'vue-feather-icons'
export default {
  name: "Invoice",
  components:{
    MoreVerticalIcon,
    PlusIcon,
    EyeIcon,
    ModalPayment
  },
  data(){
    return {
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
      console.log(data);
      this.$refs.payment.setInvoice(data.item.bill);
    }
  },
  mounted() {
    // Request get all bill
    axios
      .get('http://188.166.222.247:3000/api/bill/getall')
      .then(response => {
        console.log(response.data)
        response.data.data.forEach(data => {
          if (data.bill.status == "Pending") data.bill.status = { status: 'Pending', variant: 'warning' };
          else if (data.bill.status == "Partially Paid") data.bill.status = { status: 'Partially Paid', variant: 'primary' };
          else if (data.bill.status == "Fully Paid") data.bill.status = { status: 'Fully Paid', variant: 'success' };

          data.bill.date = data.bill.date.substring(0, data.bill.date.indexOf('T'));
          data.bill.type = 'bills';
        });
        console.log(response.data.data);
        this.setBill(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
        this.setBill([
          {
            bill: {
              vendor:[ {
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