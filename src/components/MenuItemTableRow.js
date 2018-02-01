import React, {Component} from 'react';

import OrdersService from './services/OrdersService';

class MenuItemTableRow extends Component {
    constructor(props) {
        super(props);
        this.ordersService = new OrdersService();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const newOrderDetails = {
            id: this.props.obj._id,
            forClient: localStorage.getItem('userID')
        };
        this.ordersService.sendData(newOrderDetails, localStorage.getItem('token'));
        alert('New order submitted.')
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input type="submit" value="Order" className="btn btn-success"/>
                    </form>
                </td>
            </tr>
        );
    }
}

export default MenuItemTableRow;