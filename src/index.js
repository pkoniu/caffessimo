import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import ListOrders from './components/ListOrders';
import ListMenuItems from "./components/ListMenuItems";

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/new-order' component={ListMenuItems} />
            <Route path='/orders' component={ListOrders} />
        </div>
    </Router>,
    document.getElementById('root')
);
