<template>
  <div class="container-product">
    <b-row>
      <b-col>
        <b-card >
          <b-card-title>
            <b-row>
              <b-col lg="12" md="12" sm="12">
                <h5 class="card-title">List Product</h5>
              </b-col>
              <b-col>
                <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="table"
              ></b-pagination>
              </b-col>
              <b-col cols="6" md="6" sm="12" offset="2" offset-md="0" offset-sm="0" >
                <div class="d-flex align-items-center justify-content-end">
                  <b-form-input
                    class="d-inline-block mr-1"
                    placeholder="Search..."
                  />
                  <b-button variant="outline-info" to="/product/create" class="d-flex justify-content-center align-items-center textd-none" >
                    <plus-icon class="icon-head "></plus-icon>
                    <span class="textd-none">Add</span>
                </b-button>
                </div>
              </b-col>
            </b-row>
          </b-card-title>
          <div>
            <div class="overflow-auto">
            
            <b-table 
              :per-page="perPage" 
              :current-page="currentPage" 
              :items="list" 
              :busy="isBusy" 
              :fields="field" 
              id="table"
              class="list">
                <template #table-busy>
                    <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                    </div>
                </template>
                <!-- <template #cell(description)="data" >
                    <div class="col-1 text-truncate">{{ data.item.description }}</div>
                </template> -->
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
                    <b-dropdown-item href="#" @click="edit(data)">Edit</b-dropdown-item>
                    <b-dropdown-item href="#" @click="deleteData(data)">Delete</b-dropdown-item>
                  </b-dropdown>
                </div>
              </template>
            </b-table>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import service from '../../api/product.service'
import {MoreVerticalIcon, EyeIcon, PlusIcon}  from 'vue-feather-icons';
export default {
  name: "Product",
  components:{
    MoreVerticalIcon,
    EyeIcon,
    PlusIcon
  },
  methods:{
    set(data) {
      this.list = data;
    },
    deleteData( data ) {
      console.log(data)
    },
    edit( data ) {
      console.log(data)
    }
  },
  computed: {
    rows() {
      return this.list.length
    }
  },
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      field: [
        {
          key: 'name',
          sortable: true,
          class: ['head']
        },
        {
          key: 'category_description',
          label: 'category'
        },
        {
          key: 'supplier',
        },
        /* {
          key: 'description',
        }, */
        {
          key: 'action'
        }
      ],
      list:[ ],
      isBusy: true
    }
  },
  mounted() {
    // Request get all Customer
    service.getAllProduct().then( (response) => {
      //console.log(response)
      this.set(response.message);
      this.isBusy = false
    }).catch((err)=> {
      alert(err)
    })
  },
};
</script>
<style >
.pagination {
    font-size: 0.8rem;
    margin-bottom: 6px;
    margin-top: 6px;
}
</style>