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
                            id="select-item"
                            class="text-center mb-2"
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
                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="3" sm="6" md="3" >
                        <b-form-group
                            label="Periodic"
                            label-for="periodic" >
                            <b-form-input
                            id="periodic"
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
export default {
    data() {
        return {
            show: true,
            vendors: [],
            vendorFields: [],
            items: []
        }
    },
    methods: {
        onSubmit: () => {

        },
        onReset: () => {

        }
    }
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