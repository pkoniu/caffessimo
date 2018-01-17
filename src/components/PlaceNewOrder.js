import React, {Component} from 'react';

import OrdersService from './OrdersService';

class PlaceNewOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {menuItemId: '', forClientId: ''};
        this.ordersService = new OrdersService();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const newOrderDetails = {
            id: this.state.menuItemId,
            forClient: this.state.forClientId
        };
        this.ordersService.sendData(newOrderDetails);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Place new order:
                            <input name="menuItemId" type="text" value={this.state.menuItemId} onChange={this.handleChange} className="formControl"/>
                        </label><br/>
                        <label>
                            For:
                            <input name="forClientId" type="text" value={this.state.forClientId} onChange={this.handleChange} className="formControl"/>
                        </label><br/>
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default PlaceNewOrder;