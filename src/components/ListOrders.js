import React, {Component} from 'react';
import _ from 'lodash';

import OrdersService from './services/OrdersService';
import OrdersTableRow from "./OrdersTableRow";
import MenuItemsService from "./services/MenuItemsService";

class ListOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', items: ''};
        this.ordersService = new OrdersService();
        this.menuItemsService = new MenuItemsService();
    }

    componentDidMount() {
        let ordersGlobal;
        this.ordersService.getAll(localStorage.getItem('token'))
            .then(orders => {
                ordersGlobal = orders;
                return Promise.all(orders.map(order => order.id).map(id => this.menuItemsService.getById(id, localStorage.getItem('token'))));
            })
            .then(promiseResponses => {
                const menuItemsForOrders = _.flatten(promiseResponses);
                const ordersWithMenuItemName = _.zipWith(menuItemsForOrders, ordersGlobal, function(menuItem, order) {
                    return {
                        menuItemId: menuItem._id,
                        orderId: order._id,
                        menuItemName: menuItem.name,
                        userId: order.forClient,
                        orderPrice: menuItem.price
                    };
                });
                this.setState({items: ordersWithMenuItemName})
            })
            .catch(error => {
                console.error(error);
            });
    }

    tabRow() {
        if (this.state.items instanceof Array) {
            return this.state.items.map((object, i) => {
                return <OrdersTableRow obj={object}  key={i}/>;
            });
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <td>Menu item ID</td>
                            <td>Order ID</td>
                            <td>Menu item name</td>
                            <td>User ID</td>
                            <td>Order price</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.tabRow()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListOrders;