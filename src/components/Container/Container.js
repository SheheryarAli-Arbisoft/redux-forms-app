import React from 'react';

import { Container as CustomContainer } from './styled';

import { propTypes, defaultProps } from './props';

const Container = ({ children }) => {
  return <CustomContainer>{children}</CustomContainer>;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
