import React, { Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';

import { Form, FormGroup, Input, Select } from '../components/Form';

const renderTextField = ({ input, type, placeholder }) => (
  <Fragment>
    <Input {...input} type={type} placeholder={placeholder} />
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
        <FormGroup></FormGroup>
      </Form>
    </Fragment>
  );
};

export default reduxForm({
  form: 'register-form',
})(RegisterForm);
