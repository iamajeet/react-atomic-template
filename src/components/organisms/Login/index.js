import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { Redirect } from 'react-router-dom';
import { CardBox, Block, Button } from '../../../components';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const StyledBlock = styled(Block)`
  font-size: 12px;
  padding: 5px 0px;
  color: red;
`;

class Login extends Component {
  state = {
    submitted: false,
    username: '',
    password: '',
    responseMessage: '',
    redirectUrl: ''
  };

  validateForm = e => {
    e.preventDefault();
    this.setState({ submitted: true });
    const username = findDOMNode(this.refs.username);
    const password = findDOMNode(this.refs.password);
    if (username.value && password.value) {
      this.setState({ username: username.value, password: password.value });
      this.props.handleLogin(
        username.value,
        password.value,
        this.loginCallback
      );
    }
  };

  loginCallback = response => {
    if (response) {
      if (response.message) {
        this.setState({ responseMessage: response.message });
      }
      if (response.redirectUrl) {
        this.setState({ redirectUrl: response.redirectUrl });
      }
    }
  };

  render() {
    const {
      submitted,
      username,
      password,
      responseMessage,
      redirectUrl
    } = this.state;
    const { width, bgcolor } = this.props;

    if (redirectUrl) {
      return <Redirect push to={redirectUrl} />;
    }

    return (
      <CardBox width={width ? width : null} bgcolor={bgcolor ? bgcolor : null}>
        <Form onSubmit={e => this.validateForm(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref="username"
            />
            {submitted && !username && (
              <StyledBlock>Username is required!</StyledBlock>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref="password"
            />
            {submitted && !password && (
              <StyledBlock>Password is required!</StyledBlock>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          {responseMessage && <StyledBlock>{responseMessage}</StyledBlock>}
          <Button palette="success" type="submit">
            Login
          </Button>
        </Form>
      </CardBox>
    );
  }
}
Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  width: PropTypes.string,
  bgcolor: PropTypes.string
};

export default Login;
