import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import validator from 'validator';

const emailVal = (value) => {
   const result = validator.isEmail(value) 
   return result
};


export default class Auth extends Component {
  state = {
    controls: {
      email: {
       value: '',
       validation: {
         required: true,
         minLength: 4,
         emailRequired: true
       },
       valid: false
      },
      password: {
        value: '',
        validation: {
          required: true,
          minLength: 6,
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
    

    let formIsValid = false;
    if (updatedAuthForm.email.valid && updatedAuthForm.password.valid) {
      formIsValid = true;
    }


    const fullyUpdatedAuthForm = {
      ...updatedAuthForm,
      formIsValid 
    }

    this.setState({ 
     controls: fullyUpdatedAuthForm,
   
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
    if (rules.emailRequired) {
      isValid = emailVal(value) && isValid;
    } 


    return isValid;
  }

  render() {
 console.log(this.state)
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