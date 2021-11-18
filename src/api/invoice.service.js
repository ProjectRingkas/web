import {
    HTTP
} from './axios'

/* import axios from 'axios'

var aaa = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
}) */

export default {
    getAll: async () => {
        return HTTP.get('/invoice/getall').then(response => {
                response.data.data.forEach(data => {
                    if (data.order.status == "Pending") data.order.status = {
                        status: 'Pending',
                        variant: 'warning'
                    };
                    else if (data.order.status == "Partially Paid") data.order.status = {
                        status: 'Partially Paid',
                        variant: 'primary'
                    };
                    else if (data.order.status == "Fully Paid") data.order.status = {
                        status: 'Fully Paid',
                        variant: 'success'
                    };
                    data.order.date = data.order.date.substring(0, data.order.date.indexOf('T'));
                    data.order.type = 'orders';
                })
                return {
                    error: false,
                    message: response.data.data
                }
            })
            .catch((err) => {
                return {
                    error: true,
                    message: err
                }
            })
    },
    getCOA: async () => {
        return HTTP.get('/coa/getAll').then(response => {
                //console.log(response)
                var listDebitCOA = response.data.data.filter((row) => {
                    return row.saldo_category.toUpperCase() == 'DEBIT' && row.group.toUpperCase() == 'CASH'
                }).map((row) => {
                    return {
                        'value': row.number_id,
                        'text': row.name
                    }
                })
                var listCreditCOA = response.data.data.filter((row) => {
                    return row.saldo_category.toUpperCase() == 'KREDIT' && row.group.toUpperCase() == 'SALE'
                }).map((row) => {
                    return {
                        'value': row.number_id,
                        'text': row.name
                    }
                })
                return {
                    error: false,
                    message: {
                        credit: listCreditCOA,
                        debit: listDebitCOA
                    }
                }
            })
            .catch((err) => {
                return {
                    error: true,
                    message: err
                }
            })
    },
    addPayment: async (data) => {
        return await HTTP.post('/payment/add', data)
            .then(response => {
                console.log(response, 'neeewww');
                if (response.data.status == 200) {
                    return {
                        error: false,
                        message: 'success'
                    }
                }
                return {
                    error: true,
                    message: 'unknown error'
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