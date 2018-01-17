import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Link to="/new-order" className="btn btn-primary">New order</Link>
                <br/>
                <Link to="/orders" className="btn btn-primary">View orders</Link>
            </div>
        );
    }
}

export default App;
