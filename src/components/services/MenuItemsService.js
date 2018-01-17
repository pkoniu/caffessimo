import axios from 'axios';
import _ from 'lodash';

class MenuItemsService {
    constructor(props) {
        const NODE_ENV = _.get(process, 'env', 'local');
        if (NODE_ENV === 'production') {
            this.ORDERS_API_URL = 'http://iosr2017orders-production/v1/menu/items';
        } else if (NODE_ENV === 'staging') {
            this.ORDERS_API_URL = 'http://iosr2017orders-staging/v1/menu/items';
        } else {
            this.ORDERS_API_URL = 'http://localhost:3002/v1/menu/items';
        }
    }
    getById(id) {
        return axios.get(`${this.ORDERS_API_URL}/${id}`)
            .then(({data}) => data);
    }

    getAll() {
        return axios.get(`${this.ORDERS_API_URL}/`)
            .then(({data}) => data);
    }
}

export default MenuItemsService;
