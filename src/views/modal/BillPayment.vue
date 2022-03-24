<template>
    <b-modal :id="id" :size="size" :title="title" hide-footer>
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
                    :placeholder=this.total_price.toString()
                    :max="this.total_price * 1"
                    step="0.0001"
                    v-model="data.amount"
                />
                </b-form-group>
            </b-col>
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
import service from '../../api/bill.service';

export default {
    props:['id', 'size', 'title'],
    data() {
        return {
            opsCredit : [],
            opsDebit : [],
            invoice: null,
            total_price:0,
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
            this.total_price = data.total_price;
        },
        addPayment() {
            this.data.type = this.invoice.type;
            this.data.type_id = this.invoice.id;
            // console.log(this.data);

            service.addPayment(this.data).then( (result) => {
                if( result.error ) alert('Error ' + result.message.response.data.message)
                else {
                    alert('Success')
                    window.location.reload();
                }
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
        service.getCOA().then( (result) => {
            if( result.error ) alert('Error')
            this.setCOADebit(result.message.debit)
            this.setCOACredit(result.message.credit)
        })
    },
}
</script>

<style>

</style>