<template>
  <div>
      <b-row>
        <b-col>
            <b-card class="container">
            <b-card-title>
                <b-row>
                <b-col cols="8">
                    <h5 class="card-title">Balance Sheet</h5>
                </b-col>
                <b-col cols="2">
                    <b-form-datepicker placeholder="Date" v-model="value" class="mb-2"></b-form-datepicker>
                </b-col>
                <b-col cols="2">
                    <b-button variant="outline-info" to="/customer/create" class="d-flex justify-content-center align-items-center textd-none" >
                    <file-text-icon class="icon-head "></file-text-icon>
                    <span class="textd-none">Export</span>
                    </b-button>
                </b-col>
                </b-row>
            </b-card-title>
            <div>
                <table class="table report">
                    <thead>
                        <tr>
                        <th scope="col">Profit & Loss</th>
                        <th scope="col">Credit</th>
                        <th scope="col">Debit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="row in data" >
                            <tr :key="row.name" class="head">
                                <td class="font-weight-bold">{{row.label}}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr v-for="sub in row.sub" :key="sub.kode" class="sub">
                                <td >{{sub.label}}</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr :key="row.name" class="foot">
                                <td class="font-weight-bold">Total {{row.label}}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </template>
                        <tr class="total bg-light">
                            <td class="font-weight-bold text-center">Total Profit/Loss (Before Tax)</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="total bg-light">
                            <td class="font-weight-bold text-center">Total Profit/Loss</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                    </table>
            </div>
            </b-card>
        </b-col>
        </b-row>      
  </div>
</template>

<script>
import {FileTextIcon}  from 'vue-feather-icons';
import {data} from '../../fakedb/report/profitloss'
export default {
    components:{
        FileTextIcon
    },
    created: function(){
        console.log(data)
    },
    data() {
      return {
          data
      }
    }
}
</script>

<style>
</style>