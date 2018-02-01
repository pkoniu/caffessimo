import React, {Component} from 'react';

import OrdersService from './services/OrdersService';
import PaymentsService from "./services/PaymentsService";

class OrdersTableRow extends Component {
    constructor(props) {
        super(props);
        this.ordersService = new OrdersService();
        this.paymentsService = new PaymentsService();
        this.handlePay = this.handlePay.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.ordersService.deleteById(this.props.obj.orderId, localStorage.getItem('token'));
    }

    handlePay(event) {
        event.preventDefault();
        this.paymentsService.sendData({orderId: this.props.obj.orderId}, localStorage.getItem('token'));
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
                    {this.props.obj.status}
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </form>
                </td>
                <td>
                    <form onSubmit={this.handlePay}>
                        <button type="submit" className="btn btn-success">Pay</button>
                    </form>
                </td>
            </tr>
        );
    }
}

export default OrdersTableRow;