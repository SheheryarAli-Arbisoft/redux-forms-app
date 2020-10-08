import React, { Fragment } from 'react';
import { SubmissionError } from 'redux-form';

import RegisterForm from './RegisterForm';

// This function performs validation on the values in the form
const onSubmit = values => {
  const { firstName, lastName, email, password } = values;

  if (!firstName) {
    throw new SubmissionError({ firstName: true });
  } else if (!lastName) {
    throw new SubmissionError({ lastName: true });
  } else if (!email) {
    throw new SubmissionError({ email: true });
  } else if (!password) {
    throw new SubmissionError({ password: true });
  }
};

const Register = () => {
  return (
    <Fragment>
      <RegisterForm onSubmit={onSubmit} />
    </Fragment>
  );
};

export default Register;
