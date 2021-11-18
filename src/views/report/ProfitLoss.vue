<template>
  <div>
      <b-row>
        <b-col>
            <b-card class="container">
            <b-card-title>
                <b-row>
                <b-col cols="4">
                    <h5 class="card-title">Profit & Loss</h5>
                </b-col>
                <b-col col lg="4" md="6">
                    <b-form-datepicker placeholder="Date" v-model="value" class="mb-2"></b-form-datepicker>
                </b-col>
                <b-col col lg="4" md="6">
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
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="row in data" >
                            <tr :key="row.name" class="head">
                                <td class="font-weight-bold">{{row.label}}</td>
                                <td></td>
                            </tr>
                            <tr v-for="sub in row.sub" :key="sub.kode" class="sub">
                                <td >{{sub.label}}</td>
                                <td></td>
                            </tr>
                            <tr :key="row.name" class="foot">
                                <td class="font-weight-bold text-right pr-4">Total {{row.label}}</td>
                                <td></td>
                            </tr>
                        </template>
                        <tr class="total bg-light">
                            <td class="font-weight-bold text-right pr-4">Total Profit/Loss (Before Tax)</td>
                            <td></td>
                        </tr>
                        <tr class="total bg-light">
                            <td class="font-weight-bold text-right pr-4">Total Profit/Loss</td>
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
/* import {data} from '../../fakedb/report/profitloss' */
import service from '../../api/report.service';

export default {
    components:{
        FileTextIcon
    },
    data() {
      return {
          data:[]
      }
    },
    mounted: function(){
        service.getProfitLossCOA().then( ( result ) => {
            if( result.error ) alert(result.message)
            this.data = result.message
        })
    },
}
</script>

<style>
.report td {
    font-size: 12px;
}

.report th {
    background-color: azure;
}

.report tbody tr td {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
}

.report tbody tr.head td {
    padding-top: 15px;
}

.report tbody tr.sub td:first-child {
    padding-left: 2rem;
}

.report tbody tr.sub td {
    border: none;
}

.statement.head {
    font-weight: 800;
}
</style>