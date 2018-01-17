import React, {Component} from 'react';

import OrdersService from './OrdersService';
import TableRow from "./TableRow";

class ListOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', item: ''};
        this.ordersService = new OrdersService();
    }

    componentDidMount() {
        this.ordersService.getAll()
            .then(orders => {
                this.setState({items: orders});
            })
            .catch(error => {
                console.error(error);
            });
    }

    tabRow() {
        if (this.state.items instanceof Array) {
            return this.state.items.map((object, i) => {
                return <TableRow obj={object} key={i}/>;
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
                            <td>Order ID</td>
                            <td>For Client</td>
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