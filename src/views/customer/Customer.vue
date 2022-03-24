<template>
  <div class="container-customer">
    <b-row>
      <b-col>
        <b-card >
          <b-card-title>
            <b-row>
              <b-col>
                <h5 class="card-title">List Customer</h5>
              </b-col>
              <b-col cols="6" md="4" offset="2" >
                <div class="d-flex align-items-center justify-content-end">
                  <b-form-input
                    class="d-inline-block mr-1"
                    placeholder="Search..."
                  />
                  <b-button variant="outline-info" to="/customer/create" class="d-flex justify-content-center align-items-center textd-none" >
                    <plus-icon class="icon-head "></plus-icon>
                    <span class="textd-none">Add</span>
                </b-button>
                </div>
              </b-col>
            </b-row>
          </b-card-title>
          <div>
            <b-table :items="customers" :busy="isBusy" :fields="field" class="list">
              <template #table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
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
                    <b-dropdown-item href="#" @click="editCustomer(data)">Edit</b-dropdown-item>
                    <b-dropdown-item href="#" @click="deleteCustomer(data)">Delete</b-dropdown-item>
                  </b-dropdown>
                </div>
              </template>
            </b-table>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import service from '../../api/customer.service'
import {MoreVerticalIcon, EyeIcon, PlusIcon}  from 'vue-feather-icons';
export default {
  name: "Customer",
  components:{
    MoreVerticalIcon,
    EyeIcon,
    PlusIcon
  },
  methods:{
    setCustomer(data) {
      this.customers = data;
    },
    deleteCustomer( data ) {
      console.log(data)
    },
    editCustomer( data ) {
      console.log(data)
    }
  },
  data() {
    return {
      field: [
        {
          key: 'name',
          sortable: true,
          class: ['head']
        },
        {
          key: 'address',
        },
        {
          key: 'phone',
        },
        {
          key: 'description',
        },
        {
          key: 'action'
        }
      ],
      customers:[ ],
      isBusy: true
    }
  },
  mounted() {
    // Request get all Customer
    service.getAllCustomer().then( (response) => {
      //console.log(response)
      this.setCustomer(response.message);
      this.isBusy = false
    }).catch((err)=> {
      alert(err)
    })
  },
};
</script>
<style >
.table thead th {
  color:#A0AEC0;
  text-transform: uppercase;
  font-size: 15px;
}

.table tbody td {
  color:#2D3748;
}

.table.list {
  font-family: 'Montserrat', Helvetica, Arial, serif !default;
}

.textd-none {
  text-decoration-line: none;
}
</style>