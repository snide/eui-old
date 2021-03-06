import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { KuiIcon } from '..';

const sizeToClassNameMap = {
  medium: 'kuiLoadingKibana--medium',
  large: 'kuiLoadingKibana--large',
  xLarge: 'kuiLoadingKibana--xLarge',
};

export const SIZES = Object.keys(sizeToClassNameMap);

export const KuiLoadingKibana = ({ children, size, className, ...rest }) => {
  const classes = classNames(
    'kuiLoadingKibana',
    sizeToClassNameMap[size],
    className,
  );

  return (
    <div
      className={classes}
      {...rest}
    >
      <div className="kuiLoadingKibana__icon">
        <KuiIcon type="logoKibana" size={size} />
      </div>
      {children}
    </div>
  );
};

KuiLoadingKibana.propTypes = {
  size: PropTypes.oneOf(SIZES),
};
