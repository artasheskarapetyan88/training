import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Form, Input} from "antd"
import axios from "axios";
import Cookies from "js-cookie"
import "./login.css"

function Login() {
    const navigate = useNavigate()
    const onFinish = async (values) => {
        const {data} = await axios.post("https://reqres.in/api/login", values)
        Cookies.set("token", data.token)
        navigate("trainings")
    }
    return (
        <div className="lodinWrapper">
            <div className="loginLogoNameWrapper">
                <img
                    className="logo"
                    src="training-logo.png"
                    alt="logo"/>
                <h1 className="loginLogoName">Training</h1>
            </div>
            <div className="loginButtom">
                <div className="registerWrapper">
                    <h4 className="singtext">
                        Sign in to your account
                    </h4>
                    <Form
                        className="loginFormWrapper"
                        name="basic"
                        labelCol={{span: 8}}
                        wrapperCol={{span: 16}}
                        style={{maxWidth: "100%"}}
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            className="forAll"
                            style={{width: "100%"}}
                            label=""
                            name="email"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input rootClassName="forAll"/>
                        </Form.Item>

                        <Form.Item
                            className="forAll"
                            label=""
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password/>
                        </Form.Item>
                        <Form.Item wrapperCol={{span: 24}}>
                            <Button type="primary" htmlType="submit" block>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;