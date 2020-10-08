import React from 'react';
import PropTypes from 'prop-types';

import { Select as CustomSelect } from './styled';

import { propTypes, defaultProps } from './props';

const Select = ({ children, ...rest }) => {
  return <CustomSelect {...rest}>{children}</CustomSelect>;
};

Select.propTypes = {
  ...propTypes,
  showError: PropTypes.bool,
};

Select.defaultProps = {
  ...defaultProps,
  showError: false,
};

export default Select;
