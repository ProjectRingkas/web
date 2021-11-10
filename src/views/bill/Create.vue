<template>
    <div class="container-invoice">
        <b-row>
            <b-col>
                <b-card class="container">
                <b-card-title>
                    <b-row>
                    <b-col>
                        <h5 class="card-title">Form Bill</h5>
                    </b-col>
                    </b-row>
                </b-card-title>
                <b-row>
                    <b-col cols="6" md="6" sm="12">
                        <b-form-group
                            label="Date"
                            label-for="bio-area" >
                            <b-form-datepicker
                            id="bio-area"
                            class="text-center mb-2"
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                            v-model="data.date"
                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="6" sm="12" md="6" >
                        <b-form-group
                            label="Vendor"
                            label-for="select-vendor" >
                            <b-form-select
                            id="select-vendor"
                            class="align-left-item mb-2" 
                            v-model="data.vendor_id" 
                            :options="opsVendors"
                            required
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6" sm="12" md="6" >
                        <b-form-group
                            label="Item"
                            label-for="select-item" >
                            <b-form-select
                            class="text-center mb-2"
                            @change="selectChanged"
                            id="item" 
                            v-model="data.product_id"
                            :options="opsItems"
                            required
                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="3" sm="6" md="3" >
                        <b-form-group
                            label="Amount"
                            label-for="amount" >
                            <b-form-input
                            id="amount"
                            class="align-left-item mb-2"
                            :model="data.transaction_price * data.quantity "
                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="3" sm="6" md="3" >
                        <b-form-group
                            label="Periodic"
                            label-for="periodic" >
                            <b-form-input
                            id="periodic"
                            v-model="data.periodic" 
                            class="align-left-item mb-2"
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col  cols="6" sm="12" md="6"  >
                        <b-form-group
                            label="Description"
                            label-for="description" >
                            <b-form-textarea
                            id="description"
                            placeholder="Enter something..."
                            rows="3"
                            max-rows="6"
                            class="align-left-item mb-2"
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="mt-2">
                    <!-- submit and reset -->
                    <b-col cols="12" class="text-left">
                        <b-button
                        type="submit"
                        variant="primary-local"
                        class="mr-1"
                        >
                        Submit
                        </b-button>
                        <b-button
                        type="reset"
                        variant="outline-secondary"
                        >
                        Reset
                        </b-button>
                    </b-col>
                </b-row>
                
                </b-card>
            </b-col>
        </b-row>
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
      
            axios.post('http://188.166.222.247:3000/api/bill/add', this.data)
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
        axios.get('http://188.166.222.247:3000/api/vendors/getall')
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
        axios.get('http://188.166.222.247:3000/api/items/type', { params: { type: 'bill' } })
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

<style>
    button.btn-primary-local {
        color: white;
        background-color: var(--sidebar-item-active); 
    }
    div.form-group {
        margin-bottom: 0.4rem;
    }
</style>