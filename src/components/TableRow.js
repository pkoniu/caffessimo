import React, {Component} from 'react';

import OrdersService from './OrdersService';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.addItemService = new OrdersService();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addItemService.deleteById(this.props.obj._id);
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.forClient}
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

export default TableRow;