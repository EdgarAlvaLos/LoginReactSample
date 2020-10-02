import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import Header from './Header';
import React, { Component } from 'react'

const baseUrl = "http://localhost:3000/usuarios";
const cookies = new Cookies();

class LoginPage extends Component {

    state = {
        from: {
            username: '',
            password: ''
        }
    }

    handleValidation(){
            let formIsValid = true;
            if (typeof(this.state.form.username) !== 'undefined' || this.state.form.username != null) {
                console.log('Not Undefined or Not Null')
         } else {
                console.log('Undefined or Null')
       }
             if(formIsValid){
                //loginMetod();
                alert("Logged");
             }
    }

    Islogged() {
        if (cookies.get('user')) {
            window.location.href = "./menu";
        }
    }

    handleInput = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    }

    loginMetod = async () => {
        if(typeof(this.state.form.username)!==undefined|| typeof(this.state.form.password!==undefined) ){
            alert("requiree");
        }else{
            window.location.href = "/ForgotPassword"
        }
        //  await axios.get(baseUrl, { params: { username: this.state.form.username, password: md5(this.state.form.password) } })
        // .then(response => {
        //      return response.data;
        //  })
        //  .then(response => {
        //      if (response.length > 0) {
        //var rresponse = response[0];
        //        cookies.set('id', rresponse.id, { path: "/" });
        //        cookies.set('apellido_p', rresponse.id, { path: "/" });
        //       cookies.set('apellido_m', rresponse.id, { path: "/" });
        //       cookies.set('nombre', rresponse.id, { path: "/" });
        //       cookies.set('user', rresponse.id, { path: "/" });
        //        console.log(rresponse);
        //window.location.href = "/ForgotPassword"
        //    } else {
        //       alert("No user on the DB");
        //   }
        //  })
        //.catch(error => {
        //console.log(error);
        // })
    }

    render() {
        return (
            <div className='maindiv'>
                <Header />
                <div className="firstContainer">
                    <label className="customerL">Customer Login</label>
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
                            <label className="passwordL">Password</label>
                            <br />
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.handleInput}
                                placeholder="Password"
                            />
                            <br />
                            <button className="bton" onClick={() => this.handleValidation()} >Login</button>
                            <br />
                            <a href="./pages/ForgotPassword" className="forgotPassword"> Forgot Password?  </a>
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

export default LoginPage;
