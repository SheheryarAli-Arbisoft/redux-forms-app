import React from 'react';

import { Select as CustomSelect } from './styled';

const Select = ({ children, ...rest }) => {
  return <CustomSelect {...rest}>{children}</CustomSelect>;
};

export default Select;
