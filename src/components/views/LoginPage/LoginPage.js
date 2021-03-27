import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/user_actions";
import { Form, Input, Button, Row, Card, Typography, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";

const { Title } = Typography;

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

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(userInfo);

    return () => {};
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <>
      <Title level={3} align="middle" style={{ marginTop: "40px" }}>
        Signin
      </Title>
      <Row justify="space-around" align="middle" style={{ marginTop: "20px" }}>
        <Card>
          <Form
            style={{ minWidth: "375px" }}
            {...formItemLayout}
            onSubmit={submitHandler}
          >
            <Form.Item required label="Email">
              {loading && (
                <Row justify="space-around" align="middle">
                  <Spin />
                </Row>
              )}
              {error && <div>{error}</div>}
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

            <Form.Item {...tailFormItemLayout}>
              <Button onClick={submitHandler} type="primary">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </>
  );
}

export default withRouter(LoginPage);
