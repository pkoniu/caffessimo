import React, {
    Component
} from 'react';
import jwt_decode from 'jwt-decode';
import AuthenticatorService from './services/AuthenticatorService';

class Authenticator extends Component {
    state = {
        authenticated: false,
        username: '',
        password: '',
        username2: '',
        password2: '',
        hasErrored: false,
        errorMessage: '',
        hasRegistered: false
    };

    API = new AuthenticatorService();

    handleLoginSuccess = (successResponse) => {
        const decodedToken = jwt_decode(successResponse.data.token);
        localStorage.setItem('userID', decodedToken.user._id.toString());
        localStorage.setItem('token', successResponse.data.token);
        this.setState({
            authenticated: true
        });
    };

    handleLoginError = (error) => {
        this.setState({
            hasErrored: true,
            errorMessage: error.message
        });
    };

    handleRegisterSuccess = (successResponse) => {
        this.setState({
            hasRegistered: true
        });
    };

    handleRegisterError = (error) => {
        this.setState({
            hasErrored: true,
            errorMessage: JSON.stringify(error)
        });
    };

    handleLogin = (e) => {
        e.preventDefault();
        let {username, password} = this.state;
        this.API.login({username, password})
            .then(this.handleLoginSuccess)
            .catch(this.handleLoginError);
    };

    handleRegister = (e) => {
        e.preventDefault();
        let {username2, password2} = this.state;
        this.API.register({username: username2, password: password2})
            .then(this.handleRegisterSuccess)
            .catch(this.handleRegisterError);
    };

    handleValueChange = (e) => {
        let {value, name} = e.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        return this.state.authenticated ? this.props.children : (
            <div className="container login-container">
                <form onSubmit={this.handleLogin}>
                    <input className="form-control"
                           placeholder="Username"
                           type="text" name="username" value={this.state.username}
                           onChange={this.handleValueChange}/>
                    <input className="form-control"
                           placeholder="Password"
                           type="password" name="password" value={this.state.password}
                           onChange={this.handleValueChange}/>
                    <button type="submit" className="btn btn-success">Login</button>
                </form>
                <hr/>
                <form onSubmit={this.handleRegister}>
                    <input className="form-control"
                           placeholder="Username"
                           type="text" name="username2"
                           value={this.state.username2}
                           onChange={this.handleValueChange}/>
                    <input className="form-control"
                           placeholder="Password"
                           type="password" name="password2"
                           value={this.state.password2}
                           onChange={this.handleValueChange}/>
                    <button type="submit" className="btn btn-success">Register</button>
                </form>
                {this.state.hasErrored && <div>{this.state.errorMessage}</div>}
                {this.state.hasRegistered && <div>User registered! WELCOME TO CAFFISSIMO!</div>}
            </div>
        );
    }
}

Authenticator.propTypes = {};
Authenticator.defaultProps = {};

export default Authenticator;
