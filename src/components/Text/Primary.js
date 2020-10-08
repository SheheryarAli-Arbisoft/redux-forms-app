import React from 'react';

import { Primary as CustomPrimary } from './styled';

import { propTypes, defaultProps } from './props';

const Primary = ({ children }) => {
  return <CustomPrimary>{children}</CustomPrimary>;
};

Primary.propTypes = propTypes;
Primary.defaultProps = defaultProps;

export default Primary;
