import axios from 'axios';

class OrdersService {
    constructor(props) {
        if (process.env.REACT_APP_NODE_ENV === 'production') {
            this.ORDERS_API_URL = 'https://iosr2017orders.herokuapp.com';
        } else if (process.env.REACT_APP_NODE_ENV === 'staging') {
            this.ORDERS_API_URL = 'https://iosr2017orders.herokuapp.com';
        } else {
            this.ORDERS_API_URL = 'http://localhost:3003';
        }
    }

    sendData(data) {
        axios.post(`${this.ORDERS_API_URL}/v1/orders`, data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                alert('Order creation failed: ' + error);
                console.error(error);
            });
    }

    getById(id) {
        return axios.get(`${this.ORDERS_API_URL}/v1/orders/${id}`)
            .then(({data}) => data);
    }

    getAll() {
        return axios.get(`${this.ORDERS_API_URL}/v1/orders`)
            .then(({data}) => data);
    }

    deleteById(id) {
        return axios.delete(`${this.ORDERS_API_URL}/v1/orders/${id}`);
    }
}

export default OrdersService;
