import React, { useEffect, useState } from "react";
import { registerUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";

import {
  Form,
  Input,
  Button,
  Row,
  Card,
  Typography,
  Avatar,
  Divider,
} from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const { Title } = Typography;
const { Meta } = Card;
function RegisterPage(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [token, setToken] = useState("");
  // const[password,setPassword] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("registering...");
    return () => {};
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password, avatar, token));
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
  };
  const responseSuccess = (response) => {
    console.log(response);
    setEmail(response.profileObj.email);
    setName(response.profileObj.name);
    setAvatar(response.profileObj.imageUrl);
    setToken(response.tc.id_token);
  };

  return (
    <>
      <Title level={3} align="middle" style={{ marginTop: "40px" }}>
        Signin
      </Title>
      <Row justify="space-around" align="middle" style={{ marginTop: "20px" }}>
        <Card>
          <Divider plain>
            <Meta avatar={<Avatar src={avatar} />} />
          </Divider>

          <Form
            style={{ minWidth: "375px" }}
            {...formItemLayout}
            onSubmit={submitHandler}
          >
            <Form.Item required label="Name">
              <Input
                id="name"
                placeholder="Enter your name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item required label="Email">
              <Input
                id="email"
                placeholder="Enter your Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item required label="Password">
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item required label="Confirm">
              <Input
                hidden
                id="avatar"
                placeholder="Enter your confirmPassword"
                onChange={(e) => {
                  setAvatar(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button onClick={submitHandler} type="primary">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Row justify="space-around" align="middle">
            <GoogleLogin
              clientId="266388441735-5a4sfpj0lpk8nvjkf52ppoqqul0139st.apps.googleusercontent.com"
              onSuccess={responseSuccess}
              onFailure={responseSuccess}
            />
          </Row>
        </Card>
      </Row>
    </>
  );
}

export default RegisterPage;
