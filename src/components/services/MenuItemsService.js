import axios from 'axios';
import _ from 'lodash';

class MenuItemsService {
    constructor(props) {
        const REACT_APP_NODE_ENV = _.get(process, 'env', 'local');
        if (REACT_APP_NODE_ENV === 'production') {
            this.ORDERS_API_URL = 'https://iosr2017orders-production.herokuapp.com/v1/menu/items';
        } else if (REACT_APP_NODE_ENV === 'staging') {
            this.ORDERS_API_URL = 'https://iosr2017orders-staging.herokuapp.com/v1/menu/items';
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
