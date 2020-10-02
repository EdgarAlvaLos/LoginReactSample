import React, { Component, component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import "./LoginPage.css";
import Header from './Header';

class ForgotPassword extends Component {

    Senrecover() {

    }

    render() {
        return (
            <div className='maindiv'>
                <Header />
                <div className="firstContainer">
                    <label className="customerL">Recover Password</label>
                    <div className="secondContainer">
                        <div className="from-group">
                            <label className="userL">Email</label>
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.handleInput}
                                placeholder="Email"
                            />
                            <br />
                            <button className="bton" onClick={() => this.Senrecover()} >Recover</button>
                            <br />
                            <label className="noAccountL">Don't have an account?</label>
                            <a href="./pages/createAccount" className="noAccount"> Create Account.</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ForgotPassword;