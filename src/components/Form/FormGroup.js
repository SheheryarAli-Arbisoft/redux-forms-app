import React from 'react';

import { FormGroup as CustomFormGroup } from './styled';

import { propTypes, defaultProps } from './props';

const FormGroup = ({ children }) => {
  return <CustomFormGroup>{children}</CustomFormGroup>;
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
