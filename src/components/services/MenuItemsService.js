import axios from 'axios';

class MenuItemsService {
    constructor(props) {
        if (process.env.REACT_APP_NODE_ENV === 'production') {
            this.CLIENTS_API_URL = 'https://iosr2017menu-production.herokuapp.com/v1/menu/items';
        } else if (process.env.REACT_APP_NODE_ENV === 'staging') {
            this.CLIENTS_API_URL = 'https://iosr2017menu-staging.herokuapp.com/v1/menu/items';
        } else {
            this.CLIENTS_API_URL = 'http://localhost:3002/v1/menu/items';
        }
    }

    getById(id, token) {
        return axios({
            method: 'GET',
            url: `${this.CLIENTS_API_URL}/${id}`,
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(({data}) => data);
    }

    getAll(token) {
        return axios({
            method: 'GET',
            url: `${this.CLIENTS_API_URL}/`,
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(({data}) => data);
    }
}

export default MenuItemsService;
