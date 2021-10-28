<template>
  <div class="container-table">
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
                <router-link to="/bill/create" class="plus-create bg-success align-middle">
                <plus-icon class="icon-head"></plus-icon></router-link>
                <!-- <a href="./create" >
                </a> -->
                
              </b-col>
            </b-row>
          </div>
          <b-table responsive="sm" :fields="fields" :items="items" >
            <template #cell(status)="data">
              <b-badge
                pill
                :variant="data.value.variant"
              >
                {{ data.value.status }}
              </b-badge>
            </template>
            <template #cell(action)>
              <div class="">
                <b-dropdown
                variant="link"
                no-caret 
                >
                  <template #button-content>
                    <more-vertical-icon class="icon-head"></more-vertical-icon>
                  </template>
                  <b-dropdown-item v-b-modal.modal-lg href="#">Add Payment</b-dropdown-item>
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
                
              </div>
            </template>
          </b-table>
          <ModalPayment id="modal-lg" size="lg" title="Large Modal" />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ModalPayment from './ModalPayment.vue'
import {MoreVerticalIcon, PlusIcon}  from 'vue-feather-icons'
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
        'Customer',
        {
          key:'Total',
          tdClass: 'text-center',
          thClass: 'text-center'
        },
        { 
          key: 'status', 
          label: 'Status',
          tdClass: 'text-center',
          thClass: 'text-center' 
        },
        { 
          key: 'Date', 
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
      items:[
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
  }
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