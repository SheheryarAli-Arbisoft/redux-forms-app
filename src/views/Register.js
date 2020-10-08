import React, { Fragment } from 'react';
import { SubmissionError } from 'redux-form';

import RegisterForm from './RegisterForm';

// This function performs validation on the values in the form
const onSubmit = values => {
  const {
    firstName,
    lastName,
    email,
    password,
    dobDate,
    dobMonth,
    dobYear,
    gender,
  } = values;

  if (!firstName) {
    throw new SubmissionError({ firstName: true });
  } else if (!lastName) {
    throw new SubmissionError({ lastName: true });
  } else if (!email) {
    throw new SubmissionError({ email: true });
  } else if (!password) {
    throw new SubmissionError({ password: true });
  } else if (!dobDate) {
    throw new SubmissionError({ dobDate: true });
  } else if (!dobMonth) {
    throw new SubmissionError({ dobMonth: true });
  } else if (!dobYear) {
    throw new SubmissionError({ dobYear: true });
  } else if (!gender) {
    throw new SubmissionError({ gender: true });
  }

  const result = `Form Submitted\n
  First Name: ${firstName}
  Last Name: ${lastName}
  Email: ${email}
  Password: ${password}
  Date of birth: ${dobDate}-${dobMonth}-${dobYear}
  Gender: ${gender}
  `;

  alert(result);
};

const Register = () => {
  return (
    <Fragment>
      <RegisterForm onSubmit={onSubmit} />
    </Fragment>
  );
};

export default Register;
