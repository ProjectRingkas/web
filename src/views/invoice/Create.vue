<template>
  <div class="container-create">
    <div>
      <b-card
        header="Bussiness address and contact details"
        header-tag="header"
        tag="article"
        style="max-width: 100%"
        class="shadow-sm mb-2"
        id="test"
      >
        <b-row class="px-2 py-2"
        >
          <b-col>
            <img
              src="https://picsum.photos/600/300/?image=25"
              alt=""
              height="124px"
              width="276px"
            />
          </b-col>
          <b-col>
            <b-form-group>
              <b-form-input
                style="text-align: right; width: 377px"
                class="align-right-item mb-2"
                placeholder="Invoice"
              ></b-form-input>
              <b-form-input
                style="text-align: right; width: 377px"
                class="align-right-item mb-2"
                placeholder="Summary (e.g. project name, description invoice)t"
              ></b-form-input>
              <b-form-textarea
                rows="3"
                style="text-align: right; width: 377px"
                class="align-right-item mb-2"
                no-resize
                :placeholder="'Address, Line 1 Factory. \n United States'"
              >
              </b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <div>
      <b-card tag="article" style="max-width: 100%" class="shadow-sm px-3 mb-2">
        <b-row class="pt-2">
        <b-col cols="2">
          <b-row>
              <b-col align-self="start">Select Customer</b-col>
          </b-row>
          <b-row>
            <b-col>
                <b-form-select class="form-select" v-model="selected" :options="options"></b-form-select>
              </b-col>
          </b-row>
        </b-col>
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
                  placeholder="Form"
                ></b-form-datepicker
              ></b-col>
            </b-row>
            <b-row>
              <b-col align-self="start">Payment Due</b-col>
              <b-col
                ><b-form-datepicker
                  style="text-align: left; width: 277px"
                  class="align-right-item mb-2"
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
              <b-col class="text-center" cols="1">
                ...
              </b-col>
          </b-row>

          <b-row  v-for="(item, index) in items" :key="item.id">
            <b-col cols="4">
               <b-form-select class="form-select" v-model="item.name" :options="options"></b-form-select>
            </b-col>
            <b-col>
              <b-form-input
                v-model="item.qty"
                type="number"
              ></b-form-input>
            </b-col>
            <b-col>
              <b-form-input
                v-model="item.price"
                type="number"
              ></b-form-input>
            </b-col>
            <b-col >
              <p class="align-right">$ {{ item.price * item.qty }}</p>
            </b-col>
            <b-col cols="1" class="text-center mx-0">
              <a @click="removeitem(index)"><b-icon class="btn" icon="trash" style="color: #7952b3;" ></b-icon></a>
            </b-col>
          </b-row>

          <b-row class="text-sm-center pt-2">
            <b-col cols="12">
              <div @click="additem()" class="btn btn-outline-secondary" style="width:100%;">Add Item</div>
            </b-col>
            
          </b-row>
          
          <b-row>
            <p class="align-right">Total: {{ items.reduce((old, obj) =>{ old += (obj.price * obj.qty); return old; },0) }}</p>
          </b-row>

        <h6>Notes / Terms</h6>
        <b-textarea
          rows="3"
          no-resize
          placeholder="Enter a note for this invoice"
        ></b-textarea>
        <div style="margin-top: 122px"></div>
      </b-card>
    </div>

    <b-row class="align-right">
      <b-col><b-button variant="outline-dark">Save Invoice</b-button></b-col>
    </b-row>

  </div>
</template>

<script>

export default {
  name: "invoice",
  data() {
    return {
      selected: null,
      options: [
        { value: 1, text: "Please select an option" },
        { value: 2, text: "This is First option" },
        { value: 3, text: "Selected Option" },
      ],
      price: "",
      quantity: "",
      items:[{
            name: "",
            qty: 0,
            price: 0,
            totalprice: 0
        }]
    };
  },
  methods: {
    amount() {
      console.log("price");
    },
    additem(){
          this.items.push({
            name: "",
            qty: 0,
            price: 0,
            totalprice: 0
        });
      },
      removeitem(index){
          this.items.splice(index, 1)
      },
  },
};
</script>

<style scoped>
.form-control:disabled {
  background-color: white !important;
}

.card-header {
  background-color: rgba(16, 110, 232, 0.3) !important;

  border-radius: 8px 8px 0px 0px !important;
  height: 33px;
  padding-left: 18px !important;
  padding-top: 8px !important;
  padding-bottom: 7px !important;
  font-size: 12px;
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
</style>