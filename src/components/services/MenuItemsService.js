import axios from 'axios';

class MenuItemsService {
    constructor(props) {
        this.ORDERS_API_URL = 'http://localhost:3002/v1/menu/items';
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
