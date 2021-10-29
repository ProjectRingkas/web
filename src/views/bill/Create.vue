<template>
<div class="container-invoice">
    <!-- content -->
    <b-row>
      <b-col>
        <b-card class="container">
          <div class="card-header">
            <b-row>
              <b-col>
                <b-card-title>List Invoice</b-card-title>
              </b-col>
            </b-row>
          </div>
        
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-row class="py-2">
                    <b-col sm="3">
                        <label for="vendor">Select Vendor:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-select 
                            id="vendor" 
                            v-model="vendors" 
                            :options="vendorFields">
                        </b-form-select>
                    </b-col>
                </b-row>

                <b-row class="py-2">
                    <b-col sm="3">
                        <label for="item">Select Item:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-select 
                            id="item" 
                            v-model="items" 
                            required>
                        </b-form-select>
                    </b-col>
                </b-row>

                <b-row class="py-2">
                    <b-col sm="3">
                        <label for="amount">Transaction Amount:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input
                            id="amount"
                            required
                        ></b-form-input>
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

                <b-row class="py-2">
                    <b-col class="px-1 text-right">
                        <b-button type="submit" variant="primary">Submit</b-button>
                    </b-col>
                    <b-col class="px-1 text-left">
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-col>
                </b-row>

                
                </b-form>
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

<style scoped>
</style>