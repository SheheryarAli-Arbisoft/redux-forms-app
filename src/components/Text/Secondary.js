import React from 'react';

import { Secondary as CustomSecondary } from './styled';

import { propTypes, defaultProps } from './props';

const Secondary = ({ children }) => {
  return <CustomSecondary>{children}</CustomSecondary>;
};

Secondary.propTypes = propTypes;
Secondary.defaultProps = defaultProps;

export default Secondary;
