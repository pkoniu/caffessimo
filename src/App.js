import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Authenticator from "./components/Authenticator";

class App extends Component {
    render() {
        const style = {
            padding: 10
        };
        const buttonStyle = {
            margin: 10
        };
        return (
            <Authenticator>
                <div className="App" style={style}>
                    <Link style={buttonStyle} to="/new-order" className="btn btn-primary">New order</Link>
                    <Link style={buttonStyle} to="/orders" className="btn btn-primary">View orders</Link>
                </div>
            </Authenticator>
        );
    }
}

export default App;
