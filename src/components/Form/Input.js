import React from 'react';
import PropTypes from 'prop-types';

import { Input as CustomInput } from './styled';

import { propTypes, defaultProps } from './props';

const Input = ({ ...rest }) => {
  return <CustomInput {...rest} />;
};

Input.propTypes = {
  ...propTypes,
  showError: PropTypes.bool,
};

Input.defaultProps = {
  ...defaultProps,
  showError: false,
};

export default Input;
