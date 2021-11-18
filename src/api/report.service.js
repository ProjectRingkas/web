import {
    HTTP
} from './axios'

export default {
    getProfitLossCOA: async () => {
        return HTTP.get('/coa/getByCategory?type=report_category&value=LR').then(response => {
                var data = [];
                response.data.data.forEach(obj => {
                    var saldo_category = obj.saldo_category
                    if (saldo_category.toLowerCase() == "kredit") {
                        if (!(data[0]))
                            data[0] = {
                                label: "Pendapatan",
                                sub: []
                            }
                        data[0]['sub'].push({
                            kode: obj.number_id,
                            label: obj.name
                        })
                    } else if (saldo_category.toLowerCase() == "debit") {
                        if (!(data[1]))
                            data[1] = {
                                label: "Beban",
                                sub: []
                            }
                        data[1]['sub'].push({
                            kode: obj.number_id,
                            label: obj.name
                        })
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
    }
}