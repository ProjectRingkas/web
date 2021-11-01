<template>
  <div class="container-customer">
    <b-row>
      <b-col>
        <b-card >
          <b-card-title>
            <b-row>
              <b-col>
                <h4>List Invoice</h4>
              </b-col>
              <b-col cols="6" md="4" offset="2" >
                <div class="d-flex align-items-center justify-content-end">
                  <b-form-input
                    v-model="searchQuery"
                    class="d-inline-block mr-1"
                    placeholder="Search..."
                  />
                  <b-button variant="light" to="/invoice/create" class="d-flex justify-content-center align-items-center textd-none" >
                  
                    <plus-icon class="icon-head "></plus-icon>
                    <span class="textd-none">Add</span>
                  
                </b-button>
                </div>
              </b-col>
            </b-row>
          </b-card-title>
          <div>
            <b-table :items="customers" :fields="field" class="list">
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
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {MoreVerticalIcon, EyeIcon, PlusIcon}  from 'vue-feather-icons';
export default {
  name: "Customer",
  components:{
    MoreVerticalIcon,
    EyeIcon,
    PlusIcon
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
      customers:[
        {
          name: 'CV. Maju Bersama',
          address: 'Kav 9.1 Lawang Kabupaten Malang',
          phone: '+62781234567890',
          description: 'Vendor Teknik'
        },
        {
          name: 'CV. Maju Bersama',
          address: 'Kav 9.1 Lawang Kabupaten Malang',
          phone: '+62781234567890',
          description: 'Vendor Teknik'
        },
        {
          name: 'CV. Maju Bersama',
          address: 'Kav 9.1 Lawang Kabupaten Malang',
          phone: '+62781234567890',
          description: 'Vendor Teknik'
        }
      ]
    }
  }
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