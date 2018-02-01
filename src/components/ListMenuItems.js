import React, {Component} from 'react';

import MenuItemRow from "./MenuItemTableRow";
import MenuItemsService from "./services/MenuItemsService";

class ListOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', item: ''};
        this.menuItemsService = new MenuItemsService();
    }

    componentDidMount() {
        this.menuItemsService.getAll(localStorage.getItem('token'))
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
                return <MenuItemRow obj={object} key={i}/>;
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
                            <td>ID</td>
                            <td>Name</td>
                            <td>Price</td>
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