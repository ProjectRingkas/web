<template>
  <div class="container-create">
    <b-row>
      <b-col>
        <b-card class="mb-2 p-4">
          <b-row class="py-2">
            <b-col>
              <img
                src="https://picsum.photos/600/300/?image=25"
                alt=""
                height="124px"
                width="276px"
              />
            </b-col>
            <b-col>
                <b-form-select class="form-select" v-model="data.customer_id" :options="opsCustomers"></b-form-select>
              </b-col>
          </b-row>
        
          <b-col offset-md="3" cols="7">
            <b-row>
              <b-col align-self="start">Invoice Number</b-col>
              <b-col>
                <b-form-input
                  style="text-align: right; width: 377px"
                  class="align-right-item mb-2"
                  v-model="data.invoice_number"
                ></b-form-input>
                <b-form-input
                  style="text-align: right; width: 377px"
                  class="align-right-item mb-2"
                  v-model="data.order_number"
                ></b-form-input>
                <b-form-datepicker 
                  style="text-align: right; width: 377px"
                  class="align-right-item mb-2"
                  placeholder="Form"
                  v-model="data.date"
                ></b-form-datepicker ></b-col>
            </b-row>
            <b-row>
              <b-col align-self="start">Payment Due</b-col>
              <b-col
                ><b-form-datepicker
                  style="text-align: left; width: 277px"
                  class="align-right-item mb-2"
                  placeholder="Form"
                  v-model="data.due"
                ></b-form-datepicker
              ></b-col>
            </b-row>
          </b-col>
          <b-row>
            <b-col offset-md="3" cols="7">
              <b-row>
                <b-col align-self="start">Invoice Number</b-col>
                <b-col>
                  <b-form-input
                    style="text-align: right; width: 277px"
                    class="align-right-item mb-2"
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col align-self="start">P.O/S.O Number</b-col>
                <b-col>
                  <b-form-input
                    style="text-align: right; width: 277px"
                    class="align-right-item mb-2"
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col align-self="start">Invoice Date</b-col>
                <b-col
                  ><b-form-datepicker
                    style="text-align: left; width: 277px"
                    class="align-right-item mb-2"
                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                    placeholder="Form"
                    v-model="date"
                  ></b-form-datepicker
                ></b-col>
              </b-row>
              <b-row>
                <b-col align-self="start">Payment Due</b-col>
                <b-col
                  ><b-form-datepicker
                    style="text-align: left; width: 277px"
                    class="align-right-item mb-2"
                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                    placeholder="Form"
                  ></b-form-datepicker
                ></b-col>
              </b-row>
            </b-col>
          </b-row>
            <b-row class="pt-5 pb-2">
                <b-col cols="4" class="text-center">
                  Item name
                </b-col>
                <b-col class="text-center">
                  Quantity
                </b-col>
                <b-col class="text-center">
                  Price
                </b-col>
                <b-col class="text-center">
                  Amount
                </b-col>
                <b-col class="text-center" cols="2">
                  Action
                </b-col>
            </b-row>

            <b-row  v-for="(item, index) in items" :key="index">
              <b-col cols="4">
                <b-form-select @change="selectChanged(index, item.product_id)" class="form-select" v-model="item.product_id" :options="opsProducts"></b-form-select>
              </b-col>
              <b-col cols="2">
                <b-form-input
                  v-model="item.quantity"
                  type="number"
                ></b-form-input>
              </b-col>
              <b-col cols="2">
                <b-form-input
                  v-model="item.price"
                  type="number"
                ></b-form-input>
              </b-col>
              <b-col cols="2">
                <p class="align-right">$ {{ (item.price * item.quantity).toFixed(2) }}</p>
              </b-col>
              <b-col cols="2" class="text-center mx-0">
                <a @click="removeitem(index)"><b-icon class="btn" icon="trash" style="color: #7952b3;" ></b-icon></a>
              </b-col>
            </b-row>

            <b-row class="text-sm-center pt-2">
              <b-col cols="12">
                <div @click="additem()" class="btn btn-sm btn-outline-secondary" style="width:100%;">Add Item</div>
              </b-col>
            </b-row>
            
          
          <b-row>
            <p class="align-right">Total: {{ (items.reduce((old, obj) =>{ old += (obj.price * obj.quantity); return old; },0)).toFixed(2) }}</p>
          </b-row>

        <h6>Notes / Terms</h6>
        <b-textarea
          rows="3"
          no-resize
          placeholder="Enter a note for this invoice"
          v-model="data.description"
        ></b-textarea>
        <div style="margin-top: 122px"></div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "invoice",
  data() {
    return {
      data: {
        invoice_number : '',
        order_number : '',
        customer_id: '',
        date: null,
        due: null,
        items: [],
        description: '',
      },
      opsCustomers: [],
      opsProducts: [],
      products: [],
      price: "",
      quantity: "",
      items:[{
        product_id: 0,
        quantity: 0,
        price: 0,
        discount: 0,
      }]
    };
  },
  methods: {
    amount() {
      console.log("price");
    },
    additem(){
        this.items.push({
          product_id: 0,
          quantity: 0,
          price: 0,
          discount: 0,
      });
    },
    removeitem(index){
      this.items.splice(index, 1)
    },
    setProducts(options, data) {
      this.opsProducts = options;
      this.products = data;
    },
    setCustomers(options) {
      this.opsCustomers = options;
    },
    selectChanged(index, product_id){
      this.products.forEach(product => {
        if (product.id == product_id) this.items[index]['price'] = product.price;
      });
    },
    saveInvoice() {
      this.data.items = JSON.stringify(this.items);
      
      axios.post('http://localhost:3000/api/invoice/add', this.data)
        .then(response => {
            console.log(response);
            if (response.data.status == 200) {
              alert(response.data.message);
              this.$router.push('/invoice');
            }
        })
        .catch((err) => {
            console.log(err.response);
            alert(err.response.data.message);
        })
    }
  },
  mounted() {
    // Request products list
    axios.get('http://localhost:3000/api/items/getall')
      .then(response => {
        console.log(response.data)
        var objOptions = response.data.data.map( (row)=> {
          return {
            'value': row.id,
            'text': row.name
          }
        })
        this.setProducts(objOptions, response.data.data)
      })
      .catch((err) => {
        console.log(err.response);
      })
    
    // Request customers list
    axios.get('http://localhost:3000/api/customers/getall')
      .then(response => {
        console.log(response.data)
        var objOptions = response.data.data.map( (row)=> {
          return {
            'value': row.id,
            'text': row.name
          }
        })
        this.setCustomers(objOptions)
      })
      .catch((err) => {
        console.log(err.response);
      })
  },
};
</script>

<style scoped>
.form-control:disabled {
  background-color: white !important;
}

.card-body {
  padding: 0px !important;
}

.card {
  border-radius: 8px 8px 8px 8px !important;
}
.align-right-item {
  margin-left: auto;
  margin-right: 0px;
}
.align-right {
  text-align: right;
}

input.form-control  {
  font-size: 0.9rem;
} 
</style>