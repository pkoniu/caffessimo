import axios from 'axios';

class AuthenticatorService {
    constructor(props) {
        if (process.env.REACT_APP_NODE_ENV === 'production') {
            this.CLIENTS_API_URL = 'https://iosr2017clients-production.herokuapp.com/v1';
        } else if (process.env.REACT_APP_NODE_ENV === 'staging') {
            this.CLIENTS_API_URL = 'https://iosr2017clients-staging.herokuapp.com/v1';
        } else {
            this.CLIENTS_API_URL = 'http://localhost:3001/v1';
        }
    }

    register({username, password}) {
        return axios.post(`${this.CLIENTS_API_URL}/auth/register`, {login: username, password});
    }

    login({username, password}) {
        return axios.post(`${this.CLIENTS_API_URL}/auth/login`, {login: username, password});
    }
}

export default AuthenticatorService;
