import React, { Fragment } from 'react';

import { Radio as CustomRadio } from './styled';

import { propTypes, defaultProps } from './props';

const Radio = ({ label, ...rest }) => {
  return (
    <Fragment>
      <CustomRadio>
        <label>
          <input {...rest} />
          {label}
        </label>
      </CustomRadio>
    </Fragment>
  );
};

Radio.propTypes = propTypes.radio;
Radio.defaultProps = defaultProps.radio;

export default Radio;
