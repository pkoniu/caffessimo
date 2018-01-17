import React, {Component} from 'react';

import OrdersService from './services/OrdersService';

class OrdersTableRow extends Component {
    constructor(props) {
        super(props);
        this.ordersService = new OrdersService();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.ordersService.deleteById(this.props.obj.orderId);
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.menuItemId}
                </td>
                <td>
                    {this.props.obj.orderId}
                </td>
                <td>
                    {this.props.obj.menuItemName}
                </td>
                <td>
                    {this.props.obj.userId}
                </td>
                <td>
                    {this.props.obj.orderPrice}
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input type="submit" value="Delete" className="btn btn-danger"/>
                    </form>
                </td>
            </tr>
        );
    }
}

export default OrdersTableRow;