import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'


export default class Auth extends Component {
  state = {
    controls: {
      email: {
       value: '',
       validation: {
         required: true
       },
       valid: false
      },
      password: {
        value: '',
        validation: {
          required: true
        },
        valid: false
    }
  }

  render() {

    return (
      <div>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}