import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import validator from 'validator';

const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};

const lt = (value, props) => {
  // get the maxLength from component's props
  if (!value.toString().trim().length > props.maxLength) {
    // Return jsx
    return <span className="error">The value exceeded {props.maxLength} symbols.</span>
  }
};

const password = (value, props, components) => {
  // NOTE: Tricky place. The 'value' argument is always current component's value.
  // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
  // But if we're changing 'confirm' component - the condition will always be true
  // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
  if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
    // 'confirm' - name of input
    // components['confirm'] - array of same-name components because of checkboxes and radios
    return <span className="error">Passwords are not equal.</span>
  }
};



export default class Auth extends Component {
  state = {
    controls: {
      email: {
       value: '',
       validation: {
         required: true,
         minLength: 4
       },
       valid: false
      },
      password: {
        value: '',
        validation: {
          required: true
        },
        valid: false
    },
    formIsValid: false
  }
  }

  inputChangedhandler = (e, identifier) => {
    const updatedAuthForm = { ...this.state.controls };
   
    const updatedFormElement = {
       ...updatedAuthForm[identifier] 
       };
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    updatedAuthForm[identifier] = updatedFormElement;    
    

    let formIsValid = true;
    for (let identifier in updatedAuthForm) {
       formIsValid = updatedAuthForm[identifier].valid && formIsValid;
    }
    this.setState({ 
     controls: updatedAuthForm,
     formIsValid
     });
  }

  authOnSubmit(e) {
     e.preventDefault();
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
       isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    return isValid;
  }

  render() {

    return (
      <div>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input value={this.state.controls.email.value}
             onChange={(e) => this.inputChangedhandler(e, 'email')}
             />
          </Form.Field>   
          <Form.Field>
            <label>Password</label>
            <input value={this.state.controls.password.value} onChange={(e) => this.inputChangedhandler(e, 'password')} placeholder='Password' />
          </Form.Field>
          <Button type='submit' disabled={this.state.formIsValid} >Submit</Button>
        </Form>
      </div>
    )
  }
}