<template>
  <div>
      <b-row>
        <b-col>
            <b-card class="container">
            <b-card-title>
                <b-row>
                <b-col col lg="4" md="12" sm="12">
                    <h5 class="card-title">Profit & Loss</h5>
                </b-col>
                <b-col col lg="4" md="6" sm="12">
                    <b-form-datepicker placeholder="Date" class="mb-2"></b-form-datepicker>
                </b-col>
                <b-col col lg="4" md="6" sm="12">
                    <b-button variant="outline-info" to="/customer/create" class="d-flex justify-content-center align-items-center textd-none" >
                    <file-text-icon class="icon-head "></file-text-icon>
                    <span class="textd-none">Export</span>
                    </b-button>
                </b-col>
                </b-row>
            </b-card-title>
            <div>
                <table class="table report" :busy="isBusy">
                    <thead>
                        <tr>
                        <th scope="col">Profit & Loss</th>
                        <th scope="col" class="text-center">Amount</th>
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
                                <td class="text-right pr-5">{{sub.value == 0 ? '' : (sub.value).toFixed(2)}}</td>
                            </tr>
                            <tr :key="row.name" class="foot">
                                <td class="font-weight-bold text-right pr-5">Total {{row.label}}</td>
                                <td class="font-weight-bold text-right pr-5">{{(row.total).toFixed(2)}}</td>
                            </tr>
                            
                        </template>
                        
                        <tr class="total bg-light">
                            <td class="font-weight-bold text-right pr-4">Total Profit/Loss (Before Tax)</td>
                            <td></td>
                        </tr>
                        <tr class="total bg-light">
                            <td class="font-weight-bold text-right pr-4">Total Profit/Loss</td>
                            <td class="font-weight-bold text-right pr-5">{{ sumProfitLoss.toFixed(2)}}</td>
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
import service from '../../api/report.service';

export default {
    components:{
        FileTextIcon
    },
    data() {
      return {
          data:[],
          isBusy: true,
          sumProfitLoss: 0
      }
    },
    mounted: function(){
        service.getProfitLossCOA().then( ( result ) => {
            if( result.error ) {
                alert(result.message)
                window.location.reload();
            }
            /* service.getReportValue({
                saldo_category:"kredit",
                transaction_category:"Pendapatan",
                report_category:"LR"
            }).then(( resultValue ) => {
                result.message[0].sub.forEach(kode => {
                    
                });
            }); */
            this.data = result.message
            this.sumProfitLoss = this.data[0]['total'] - this.data[1]['total']
            this.isBusy = false
            console.log(this.data)
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