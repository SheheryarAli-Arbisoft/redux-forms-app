import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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

Radio.propTypes = {
  ...propTypes,
  label: PropTypes.string,
};

Radio.defaultProps = {
  ...defaultProps,
  label: '',
};

export default Radio;
