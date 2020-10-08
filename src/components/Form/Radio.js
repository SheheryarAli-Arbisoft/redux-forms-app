import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Radio as CustomRadio } from './styled';

import { propTypes, defaultProps } from './props';

const Radio = ({ label, showError, ...rest }) => {
  return (
    <Fragment>
      <CustomRadio showError={showError}>
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
  showError: PropTypes.bool,
};

Radio.defaultProps = {
  ...defaultProps,
  label: '',
  showError: false,
};

export default Radio;
