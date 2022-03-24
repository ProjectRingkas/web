import {
    HTTP
} from './axios'

export default {
    getProfitLossCOA: async () => {
        return HTTP.get('/coa/getByCategory?type=report_category&value=LR').then(async response => {
                var data = [];
                var responseValueKredit = await HTTP.get(`/report/payments/filter?saldo_category=kredit&transaction_category=Pendapatan&report_category=LR`);

                var responseValueDebit = await HTTP.get(`/report/payments/filter?saldo_category=debit&transaction_category=Beban&report_category=LR`);

                var reportByCOA = responseValueKredit.data.data.reduce((old, obj) => {
                    var key = obj.coa_credit_id;
                    if (!(key in old)) {
                        old[key] = {
                            data: [],
                            total_amount: 0
                        };
                    }
                    old[key]['data'].push(obj)
                    old[key]['total_amount'] += (obj.amount * 1)
                    return old
                }, {});
                responseValueDebit.data.data.forEach((obj) => {

                    var key = obj.coa_debit_id;
                    if (!(key in reportByCOA)) {
                        reportByCOA[key] = {
                            data: [],
                            total_amount: 0
                        };
                    }
                    reportByCOA[key]['data'].push(obj)
                    reportByCOA[key]['total_amount'] += (obj.amount * 1)

                }, {});
                response.data.data.forEach(obj => {
                    var saldo_category = obj.saldo_category
                    if (saldo_category.toLowerCase() == "kredit") {
                        if (!(data[0]))
                            data[0] = {
                                label: "Pendapatan",
                                sub: [],
                                total: 0
                            }
                        data[0]['sub'].push({
                            kode: obj.number_id,
                            label: obj.name,
                            value: obj.number_id in reportByCOA ? reportByCOA[obj.number_id]['total_amount'] : 0
                        })
                        data[0]['total'] += (obj.number_id in reportByCOA ? reportByCOA[obj.number_id]['total_amount'] : 0)
                    } else if (saldo_category.toLowerCase() == "debit") {
                        if (!(data[1]))
                            data[1] = {
                                label: "Beban",
                                sub: [],
                                total: 0
                            }
                        data[1]['sub'].push({
                            kode: obj.number_id,
                            label: obj.name,
                            value: obj.number_id in reportByCOA ? reportByCOA[obj.number_id]['total_amount'] : 0
                        })
                        data[1]['total'] += (obj.number_id in reportByCOA ? reportByCOA[obj.number_id]['total_amount'] : 0)
                    }
                });
                return {
                    error: false,
                    message: data
                }
            })
            .catch((err) => {
                return {
                    error: true,
                    message: err
                }
            })
    },
    getReportValue: async (option) => {
        return HTTP.get(`/report/payments/filter?saldo_category=${option.saldo_category}&transaction_category=${option.transaction_category}&report_category=${option.report_category}`).then(response => {
            var reportByCOA = response.data.data.reduce((old, obj) => {
                var key = obj.coa_credit_id;
                if (!(key in old)) {
                    old[key] = {
                        data: [],
                        total_amount: 0
                    };
                }
                old[key]['data'].push(obj)
                old[key]['total_amount'] += (obj.amount * 1)
                return old
            }, {});
            return reportByCOA
        });
    }
}