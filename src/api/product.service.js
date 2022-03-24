import {
    HTTP
} from './axios'

export default {
    getAllProduct: async () => {
        return await HTTP.get('/items/getall')
            .then(response => {
                if (response.data.status == 200) {
                    return {
                        error: false,
                        message: response.data.data
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