import axios from 'axios';

class PaymentsService {
    constructor(props) {
        if (process.env.REACT_APP_NODE_ENV === 'production') {
            this.PAYMENTS_API_URL = 'https://iosr2017payments-production.herokuapp.com';
        } else if (process.env.REACT_APP_NODE_ENV === 'staging') {
            this.PAYMENTS_API_URL = 'https://iosr2017payments-staging.herokuapp.com';
        } else {
            this.PAYMENTS_API_URL = 'http://localhost:3004';
        }
    }

    sendData(data, token) {
        axios({
            method: 'POST',
            url: `${this.PAYMENTS_API_URL}/v1/payments`,
            headers: {
                'authorization': `Bearer ${token}`
            },
            data
        }).then(response => {
            console.log(response);
        }).catch(error => {
            alert('Payments creation failed: ' + error);
            console.error(error);
        });
    }

    getById(id, token) {
        return axios({
            method: 'GET',
            url: `${this.PAYMENTS_API_URL}/v1/payments/${id}`,
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(({data}) => data);
    }

    getAll(token) {
        return axios({
            method: 'GET',
            url: `${this.PAYMENTS_API_URL}/v1/payments`,
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(({data}) => data);
    }

    deleteById(id, token) {
        return axios({
            method: 'DELETE',
            url: `${this.PAYMENTS_API_URL}/v1/payments/${id}`,
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(({data}) => data);
    }
}

export default PaymentsService;
