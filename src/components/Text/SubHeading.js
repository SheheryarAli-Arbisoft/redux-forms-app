import React from 'react';

import { SubHeading as CustomSubHeading } from './styled';

import { propTypes, defaultProps } from './props';

const SubHeading = ({ children }) => {
  return <CustomSubHeading>{children}</CustomSubHeading>;
};

SubHeading.propTypes = propTypes;
SubHeading.defaultProps = defaultProps;

export default SubHeading;
