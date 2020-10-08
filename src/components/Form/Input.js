import React from 'react';

import { Input as CustomInput } from './styled';

import { propTypes, defaultProps } from './props';

const Input = ({ ...rest }) => {
  return <CustomInput {...rest} />;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
