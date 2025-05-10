import React from 'react';
import PropTypes from 'prop-types';

import { Alert } from '@openedx/paragon';
import { Info } from '@openedx/paragon/icons';

export const Banner = ({
  children, variant, icon, className,
}) => (
  <div className="bg-main px-4 xl:px-16 py-2.5 rounded-b-lg">
    <div className="flex items-center space-x-4" variant={variant} className={className} icon={icon}>
      <svg className={icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z" fill="currentColor"></path></svg>
      <span className="text-sm text-[#737373] pl-3">{children}</span>
    </div>
  </div>
);
Banner.defaultProps = {
  icon: Info,
  variant: 'info',
  className: 'mb-0',
};
Banner.propTypes = {
  variant: PropTypes.string,
  icon: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Banner;
