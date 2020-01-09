import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

class Login extends Component {
    loginSubmit (event){
        event.preventDefault();
        console.log('login Submit');

    }
    render() {
        return (
            <div id="login-container">
                <div id="login-brand">
                    <div>
                        <h1>Sicc Social</h1>
                        <h3>สังคมออนไลน์ วิทยาลัยการอาชีพสอง</h3>
                    </div>
                </div>
                <div id="login-form">
                    <div>
                        <h2>เข้าสู่ระบบ</h2>
                        <hr />
                        <form onSubmit={this.loginSubmit}>
                            <div class="social-from-div">
                                <input type="text" id="username" name="username" placeholder="ชื่อผู้ใช้" />
                            </div>
                            <div class="social-from-div">
                                <input type="password" id="userpass" name="userpass" placeholder="รหัสผ่าน" />
                            </div>
                            < div class="social-from-div">
                                <button>ลงชื่อเข้าใช้</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;