import {
    HTTP
} from './axios'

export default {
    getAll: async () => {
        return HTTP.get('/bill/getall').then(response => {
                response.data.data.forEach(data => {
                    if (data.bill.status == "Pending") data.bill.status = {
                        status: 'Pending',
                        variant: 'warning'
                    };
                    else if (data.bill.status == "Partially Paid") data.bill.status = {
                        status: 'Partially Paid',
                        variant: 'primary'
                    };
                    else if (data.bill.status == "Fully Paid") data.bill.status = {
                        status: 'Fully Paid',
                        variant: 'success'
                    };

                    data.bill.date = data.bill.date.substring(0, data.bill.date.indexOf('T'));
                    data.bill.type = 'bills';
                });
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
                var listCreditCOA = response.data.data.filter((row) => {
                    return row.saldo_category.toUpperCase() == 'DEBIT' && row.group.toUpperCase() == 'CASH'
                }).map((row) => {
                    return {
                        'value': row.number_id,
                        'text': row.name
                    }
                })
                var listDebitCOA = response.data.data.filter((row) => {
                    return row.saldo_category.toUpperCase() == 'DEBIT' && row.group.toUpperCase() == 'BILL'
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
                /* console.log(response, 'neeewww'); */
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