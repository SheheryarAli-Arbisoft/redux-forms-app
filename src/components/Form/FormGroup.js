import React from 'react';

import { FormGroup as CustomFormGroup } from './styled';

const FormGroup = ({ children }) => {
  return <CustomFormGroup>{children}</CustomFormGroup>;
};

export default FormGroup;
