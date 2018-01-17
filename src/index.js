import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import PlaceNewOrder from './components/PlaceNewOrder';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App}></Route>
            <Route path='/new-order' component={PlaceNewOrder}></Route>
        </div>
    </Router>,
    document.getElementById('root')
);
