import React, { Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';

import { Form, FormGroup, Input } from '../components/Form';

const renderTextField = ({ meta: { touched, error }, ...rest }) => (
  <Fragment>
    <Input {...rest} />
  </Fragment>
);

const RegisterForm = () => {
  return (
    <Fragment>
      <Form>
        <FormGroup>
          <Field
            name='firstName'
            type='text'
            component={renderTextField}
            placeholder='First Name'
          />
          <Field
            name='lastName'
            type='text'
            component={renderTextField}
            placeholder='Last Name'
          />
        </FormGroup>
        <FormGroup>
          <Field
            name='email'
            type='email'
            component={renderTextField}
            placeholder='Email address'
          />
        </FormGroup>
        <FormGroup>
          <Field
            name='password'
            type='password'
            component={renderTextField}
            placeholder='Password'
          />
        </FormGroup>
      </Form>
    </Fragment>
  );
};

export default reduxForm({
  form: 'register-form',
})(RegisterForm);
