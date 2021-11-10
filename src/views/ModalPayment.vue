<template>
    <b-modal :id="id" :size="size" :title="title">
        <b-form @submit.prevent="addPayment">
            <b-row>
            <b-col cols="12">
                <b-form-group
                label="Payment Date"
                label-for="h-payment-date"
                label-cols-md="4"
                >
                <b-form-input
                    id="h-payment-date"
                    type="date"
                    placeholder=""
                    v-model="data.date"
                />
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group
                label="Credit Type"
                label-for="h-credit-type"
                label-cols-md="4"
                >
                <b-form-select v-model="data.coa_credit_id" id="credit-type" class="form-select" :options="opsCredit"></b-form-select>
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group
                label="Debit Type"
                label-for="h-debit-type"
                label-cols-md="4"
                >
                <b-form-select v-model="data.coa_debit_id" id="debit-type" class="form-select" :options="opsDebit"></b-form-select>
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group
                label="Amount"
                label-for="h-amount"
                label-cols-md="4"
                >
                <b-form-input
                    id="h-amount"
                    type="number"
                    placeholder="1000"
                    v-model="data.amount"
                />
                </b-form-group>
            </b-col>
            <!-- <b-col cols="12">
                <b-form-group
                label="Payment Type"
                label-for="h-payment-type"
                label-cols-md="4"
                >
                <b-form-select id="payment-type" class="form-select" :options="options"></b-form-select>
                </b-form-group>
            </b-col> -->
            <b-col cols="12">
                <b-form-group
                label="Description"
                label-for="h-description"
                label-cols-md="4"
                >
                <b-form-textarea
                id="h-description"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                    v-model="data.description"
                    ></b-form-textarea>
                </b-form-group>
            </b-col>
            <!-- submit and reset -->
            <b-col offset-md="4">
                <b-button
                type="submit"
                variant="primary"
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
        </b-form>
    </b-modal> 
</template>

<script>
import axios from 'axios';

export default {
    props:['id', 'size', 'title'],
    data() {
        return {
            opsCredit : [],
            opsDebit : [],
            invoice: null,
            data: {
                date: null,
                type: '',
                type_id: '',
                coa_credit_id: '',
                coa_debit_id: '',
                amount: '',
                description: ''
            }
        }
    },
    methods: {
        setInvoice(data) {
            this.invoice = data;
            // console.log(this.invoice);
        },
        addPayment() {
            this.data.type = this.invoice.type;
            this.data.type_id = this.invoice.id;
            // console.log(this.data);

            axios.post('http://188.166.222.247:3000/api/payment/add', this.data)
                .then(response => {
                    console.log(response);
                    if (response.data.status == 200) {
                        alert(response.data.message);
                        window.location.reload();
                    }
                })
                .catch((err) => {
                    console.log(err.response);
                    alert(err.response.data.message);
                })
        },
        setCOACredit(data) {
            this.opsCredit = data;
        },
        setCOADebit(data) {
            this.opsDebit = data;
        }
    },
    mounted() {
        // Request coa credit list
        axios.get('http://188.166.222.247:3000/api/coa/get', { params: { saldo_category: 'kredit' } })
            .then(response => {
                console.log(response.data)
                var objOptions = response.data.data.map( (row)=> {
                    return {
                        'value': row.number_id,
                        'text': row.name
                    }
                })
                this.setCOACredit(objOptions)
            })
            .catch((err) => {
                console.log(err.response);
            })
        
        // Request coa credit list
        axios.get('http://188.166.222.247:3000/api/coa/get', { params: { saldo_category: 'debit' } })
            .then(response => {
                console.log(response.data)
                var objOptions = response.data.data.map( (row)=> {
                    return {
                        'value': row.number_id,
                        'text': row.name
                    }
                })
                this.setCOADebit(objOptions)
            })
            .catch((err) => {
                console.log(err.response);
            })
    },
}
</script>

<style>

</style>