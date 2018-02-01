import axios from 'axios';

class OrdersService {
    constructor(props) {
        if (process.env.REACT_APP_NODE_ENV === 'production') {
            this.ORDERS_API_URL = 'https://iosr2017orders-production.herokuapp.com';
        } else if (process.env.REACT_APP_NODE_ENV === 'staging') {
            this.ORDERS_API_URL = 'https://iosr2017orders-staging.herokuapp.com';
        } else {
            this.ORDERS_API_URL = 'http://localhost:3003';
        }
    }

    sendData(data, token) {
        axios({
            method: 'POST',
            url: `${this.ORDERS_API_URL}/v1/orders`,
            headers: {
                'authorization': `Bearer ${token}`
            },
            data
        }).then(response => {
            console.log(response);
        }).catch(error => {
            alert('Order creation failed: ' + error);
            console.error(error);
        });
    }

    getById(id, token) {
        return axios({
            method: 'GET',
            url: `${this.ORDERS_API_URL}/v1/orders/${id}`,
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(({data}) => data);
    }

    getAll(token) {
        return axios({
            method: 'GET',
            url: `${this.ORDERS_API_URL}/v1/orders`,
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(({data}) => data);
    }

    deleteById(id, token) {
        return axios({
            method: 'DELETE',
            url: `${this.ORDERS_API_URL}/v1/orders/${id}`,
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(({data}) => data);
    }
}

export default OrdersService;
