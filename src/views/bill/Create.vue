<template>
    <div class="container-invoice">
        <b-card
        header="Bussiness address and contact details"
        header-tag="header"
        tag="article"
        style="max-width: 100%"
        class="shadow-sm mb-2"
        id="test"
        >
        <b-form @submit.prevent>
            <b-row>
              <b-col>
                <b-card-title>List Invoice</b-card-title>
              </b-col>
            </b-row>
                <b-row class="py-2">
                    <b-col sm="3">
                        <label for="date">Date:</label>
                    </b-col>
                    <b-col sm="3">
                        <b-form-input
                            id="date"
                            type="date"
                            placeholder=""
                            v-model="data.date"
                            required
                        ></b-form-input>
                    </b-col>
                    <b-col sm="3">
                        <label for="periodic">Periodic:</label>
                    </b-col>
                    <b-col sm="3">
                        <b-form-select 
                            id="periodic" 
                            v-model="data.periodic" 
                            required>
                            <option value="month">Month</option>
                            <option value="year">Year</option>
                        </b-form-select>
                    </b-col>
                </b-row>

                <b-row class="py-2">
                    <b-col sm="3">
                        <label for="vendor">Select Vendor:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-select 
                            id="vendor" 
                            v-model="data.vendor_id" 
                            :options="opsVendors"
                            required
                        ></b-form-select>
                    </b-col>
                </b-row>

                <b-row class="py-2">
                    <b-col sm="3">
                        <label for="item">Select Item:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-select 
                            @change="selectChanged"
                            id="item" 
                            v-model="data.product_id"
                            :options="opsItems"
                            required>
                        </b-form-select>
                    </b-col>
                </b-row>

                <b-row class="py-2">
                    <b-col sm="3">
                        <label for="amount">Transaction Amount:</label>
                    </b-col>
                    <b-col sm="9">
                        <p class="align-right">$ {{ data.transaction_price * data.quantity }}</p>
                    </b-col>
                </b-row>

                <b-row class="py-2">
                    <b-col sm="3">
                        <label for="description">Description:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-textarea
                            id="description"
                            placeholder="Enter something..."
                            rows="3"
                            max-rows="6"
                        ></b-form-textarea>
                        </b-col>
                </b-row>
                            <!-- submit and reset -->
                            
            <b-col offset-md="4">
                <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    type="submit"
                    variant="primary"
                    class="mr-1" >
                Submit
                </b-button>
                <b-button
                    v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                    type="reset"
                    variant="outline-secondary" >
                Reset
                </b-button>
            </b-col>
        </b-form>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            show: true,
            opsVendors: [],
            opsItems: [],
            items: [],
            data: {
                vendor_id: '',
                date: null,
                type: '',
                periodic: '',
                description: '',
                product_id: '',
                transaction_price: 0,
                quantity: 1,
                discount: "0",
            }
        }
    },
    methods: {
        onSubmit() {
            console.log(this.data);
      
            axios.post('http://localhost:3000/api/bill/add', this.data)
                .then(response => {
                    console.log(response);
                    if (response.data.status == 200) {
                        alert(response.data.message);
                        this.$router.push('/bill');
                    }
                })
                .catch((err) => {
                    console.log(err.response);
                    alert(err.response.data.message);
                })
        },
        onReset: () => {

        },
        setItems(options, data) {
            this.opsItems = options;
            this.items = data;
        },
        setVendor(options) {
            this.opsVendors = options;
        },
        selectChanged(item_id){
            console.log(item_id)
            this.items.forEach(item => {
                if (item.id == item_id) this.data.transaction_price = item.price;
            });
        }
    },
    mounted() {
        // Request vendor list
        axios.get('http://localhost:3000/api/vendors/getall')
            .then(response => {
                console.log(response.data)
                var objOptions = response.data.data.map( (row)=> {
                    return {
                        'value': row.id,
                        'text': row.name
                    }
                })
                this.setVendor(objOptions);
            })
            .catch((err) => {
                console.log(err.response);
            })

        // Request bill items list
        axios.get('http://localhost:3000/api/items/type', { params: { type: 'bill' } })
            .then(response => {
                console.log(response.data)
                var objOptions = response.data.data.map( (row)=> {
                    return {
                        'value': row.id,
                        'text': row.name
                    }
                })
                this.setItems(objOptions, response.data.data);
            })
            .catch((err) => {
                console.log(err.response);
            })
    },
}
</script>

<style scoped>
</style>