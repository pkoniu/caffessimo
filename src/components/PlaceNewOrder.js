import React, {Component} from 'react';

class PlaceNewOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Place new order:
                            <input type="text" value={this.state.value} onChange={this.handleChange} className="formControl"/>
                        </label><br/>
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default PlaceNewOrder;