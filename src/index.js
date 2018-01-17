import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import PlaceNewOrder from './components/PlaceNewOrder';
import ListOrders from './components/ListOrders';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/new-order' component={PlaceNewOrder} />
            <Route path='/orders' component={ListOrders} />
        </div>
    </Router>,
    document.getElementById('root')
);
