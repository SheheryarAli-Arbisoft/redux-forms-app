import React from 'react';

import { SubHeading as CustomSubHeading } from './styled';

const SubHeading = ({ children }) => {
  return <CustomSubHeading>{children}</CustomSubHeading>;
};

export default SubHeading;
