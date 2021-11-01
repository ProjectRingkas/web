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
            <b-col cols="12">
                <b-form-group
                label="First Name"
                label-for="h-first-name"
                label-cols-md="4"
                >
                <b-form-select 
                            id="vendor" 
                            v-model="vendors" 
                            :options="vendorFields">
                        </b-form-select>
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group
                label="Email"
                label-for="h-email"
                label-cols-md="4"
                >
                <b-form-select 
                            id="item" 
                            v-model="items" 
                            required>
                        </b-form-select>
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group
                label="Mobile"
                label-for="h-number"
                label-cols-md="4"
                >
                <b-form-input
                            id="amount"
                            required
                        ></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="12">
                <b-form-group
                label="Password"
                label-for="h-password"
                label-cols-md="4"
                >
                <b-form-textarea
                            id="description"
                            placeholder="Enter something..."
                            rows="3"
                            max-rows="6"
                        ></b-form-textarea>
                </b-form-group>
            </b-col>

            <!-- submit and reset -->
            <b-col offset-md="4">
                <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                type="submit"
                variant="primary"
                class="mr-1"
                >
                Submit
                </b-button>
                <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                type="reset"
                variant="outline-secondary"
                >
                Reset
                </b-button>
            </b-col>
            </b-row>

        </b-form>
        </b-card>
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

<style scoped>
</style>