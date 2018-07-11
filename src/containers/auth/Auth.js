import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import validator from "validator";
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';

const emailVal = value => {
  const result = validator.isEmail(value);
  return result;
};

 class Auth extends Component {
  constructor(props) {
    super(props) 
    this.authOnSubmit = this.authOnSubmit.bind(this)
  }

  state = {
    controls: {
      email: {
        value: "",
        validation: {
          required: true,
          minLength: 4,
          emailRequired: true
        },
        warning: false,
        valid: false
      },
      password: {
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false
      },
      formIsValid: false
    }
  };

  inputChangedhandler = (e, identifier) => {
    const updatedAuthForm = { ...this.state.controls };

    const updatedFormElement = {
      ...updatedAuthForm[identifier]
    };
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedAuthForm[identifier] = updatedFormElement;

    let formIsValid = false;
    if (updatedAuthForm.email.valid && updatedAuthForm.password.valid) {
      formIsValid = true;
    }

    const fullyUpdatedAuthForm = {
      ...updatedAuthForm,
      formIsValid
    };

    this.setState({
      controls: fullyUpdatedAuthForm
    });
  };

  authOnSubmit(e) {
    e.preventDefault();
 
    const email = this.state.controls.email.value;
    const password = this.state.controls.password.value;
    this.props.onAuth(email, password);
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.emailRequired) {
      isValid = emailVal(value) && isValid;
    }

    return isValid;
  }

  render() {

    const validForm = !this.state.controls.formIsValid;
    const emailErrorMsg = this.state.controls.email.warning;
    return (
      <div>
        <Form onSubmit={this.authOnSubmit}>
          <Form.Field>
            <label>Email</label>
            <input
              value={this.state.controls.email.value}
              onChange={e => this.inputChangedhandler(e, "email")}
              placeholder="jamessmith@gmail.com"
              error={emailErrorMsg}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              value={this.state.controls.password.value}
              onChange={e => this.inputChangedhandler(e, "password")}
              placeholder="Password"
            />
          </Form.Field>
          <Button
            primary
            type="submit"
            disabled={validForm}
           
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actionCreators.auth(email, password))
  };
};

export default withRouter(
  connect(null, mapDispatchToProps)(Auth)
);