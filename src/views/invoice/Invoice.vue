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
                <a href="/invoice/create" class="plus-create bg-success align-middle">
                  <plus-icon class="icon-head"></plus-icon>
                  <!-- <span>Create</span> -->
                </a>
                
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
            <template #cell(action)>
              <div class="btn btn-sm">
                <more-vertical-icon class="icon-head"></more-vertical-icon>
              </div>
            </template>
          </b-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {MoreVerticalIcon, PlusIcon}  from 'vue-feather-icons';
import axios from 'axios';

export default {
  name: "Invoice",
  components:{
    MoreVerticalIcon,
    PlusIcon
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
      invoices:[
        {
          Customer: 'Dodit',
          Total: '12.000.000,-',
          status: { status: 'Paid', variant: 'success' },
          Date: '12 November 2021'
        },
        {
          Customer: 'Dodit M',
          Total: '12.000.000,-',
          status: { status: 'Partially Paid', variant: 'warning' },
          Date: '12 November 2021'
        },
        {
          Customer: 'Dodit',
          Total: '12.000.000,-',
          status: { status: 'Paid', variant: 'success' },
          Date: '12 November 2021'
        }
      ]
    }
  },
  methods: {
    setInvoices(data) {
      this.invoices = data;
    },
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
        });
        console.log(response.data.data)
        this.setInvoices(response.data.data)
      })
      .catch((err) => {
        console.log('errrrr',err)
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