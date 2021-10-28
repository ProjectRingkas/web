<template>
    <b-modal :id="id" :size="size" :title="title">
        <b-form @submit.prevent>
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
                />
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
                />
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group
                label="Payment Type"
                label-for="h-payment-type"
                label-cols-md="4"
                >
                <b-form-select id="payment-type" class="form-select" :options="options"></b-form-select>
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
export default {
    props:['id', 'size', 'title'],
    data() {
        return {
            options : [
                { id: '10001', value: 'Bank Mandiri'}
            ]
        }
    }
}
</script>

<style>

</style>