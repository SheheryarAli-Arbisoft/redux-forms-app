import React, { Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';

import { Form, FormGroup, Input, Select, Radio } from '../components/Form';
import { Button } from '../components/Button';
import { Heading, SubHeading, Primary, Secondary } from '../components/Text';
import { Divider } from '../components/Container';

const renderTextField = ({ input, type, label, meta: { touched, error } }) => (
  <Fragment>
    <Input
      {...input}
      type={type}
      placeholder={label}
      showError={touched && error}
    />
  </Fragment>
);

const renderDateSelectField = ({ input, type }) => {
  const getDates = () => {
    const result = [];
    for (let i = 1; i <= 31; i++) {
      result.push(i);
    }
    return result;
  };

  return (
    <Fragment>
      <Select {...input} type={type}>
        <option value=''>Date</option>
        {getDates().map(date => (
          <option key={`date-${date}`} value={date}>
            {date}
          </option>
        ))}
      </Select>
    </Fragment>
  );
};

const renderMonthSelectField = ({ input, type }) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <Fragment>
      <Select {...input} type={type}>
        <option value=''>Month</option>
        {months.map((month, index) => (
          <option key={`month-${index + 1}`} value={index + 1}>
            {month}
          </option>
        ))}
      </Select>
    </Fragment>
  );
};

const renderYearSelectField = ({ input, type }) => {
  const getYears = () => {
    const result = [];
    for (let i = 2020; i >= 1900; i--) {
      result.push(i);
    }
    return result;
  };

  return (
    <Fragment>
      <Select {...input} type={type}>
        <option value=''>Year</option>
        {getYears().map(year => (
          <option key={`year-${year}`} value={year}>
            {year}
          </option>
        ))}
      </Select>
    </Fragment>
  );
};

const renderRadioField = ({ input, type, label }) => (
  <Fragment>
    <Radio {...input} type={type} label={label} />
  </Fragment>
);

const RegisterForm = ({ handleSubmit }) => {
  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Heading>Sign Up</Heading>

        <SubHeading>It's quick and easy.</SubHeading>

        <Divider />

        <FormGroup>
          <Field
            name='firstName'
            type='text'
            component={renderTextField}
            label='First Name'
          />
          <Field
            name='lastName'
            type='text'
            component={renderTextField}
            label='Last Name'
          />
        </FormGroup>

        <FormGroup>
          <Field
            name='email'
            type='email'
            component={renderTextField}
            label='Email address'
          />
        </FormGroup>

        <FormGroup>
          <Field
            name='password'
            type='password'
            component={renderTextField}
            label='Password'
          />
        </FormGroup>

        <Primary>Date of birth</Primary>
        <FormGroup>
          <Field
            name='dobDate'
            type='input'
            component={renderDateSelectField}
          />
          <Field
            name='dobMonth'
            type='input'
            component={renderMonthSelectField}
          />
          <Field
            name='dobYear'
            type='input'
            component={renderYearSelectField}
          />
        </FormGroup>

        <Primary>Gender</Primary>
        <FormGroup>
          <Field
            name='gender'
            type='radio'
            component={renderRadioField}
            label='Male'
            value='0'
          />
          <Field
            name='gender'
            type='radio'
            component={renderRadioField}
            label='Female'
            value='1'
          />
        </FormGroup>

        <Secondary>
          By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
          Policy. You may receive SMS notifications from us and can opt out at
          any time.
        </Secondary>

        <FormGroup>
          <Button type='submit'>Sign up</Button>
        </FormGroup>
      </Form>
    </Fragment>
  );
};

export default reduxForm({
  form: 'register-form',
})(RegisterForm);
