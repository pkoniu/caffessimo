import axios from 'axios';

class OrdersService {
    constructor(props) {
        this.ORDERS_API_URL = 'http://localhost:3003';
    }

    sendData(data) {
        console.log('####', data);
        axios.post(`${this.ORDERS_API_URL}/v1/orders`, data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    }

    getById(id) {
        return axios.get(`${this.ORDERS_API_URL}/v1/orders/${id}`)
            .then(({data}) => data);
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(error => {
        //     console.error(error);
        // });
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
