import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@openedx/paragon';

import useCardDetailsData from './hooks';
import './index.scss';

export const CourseCardDetails = ({ cardId }) => {
  const {
    providerName,
    accessMessage,
    isEntitlement,
    isFulfilled,
    canChange,
    openSessionModal,
    courseNumber,
    changeOrLeaveSessionMessage,
  } = useCardDetailsData({ cardId });
  return (
      <div className="flex flex-col xl:flex-row xl:items-center justify-between">
          <h3 className="text-xs xl:text-sm font-light text-black">{providerName}</h3>
          <h3 className="text-xs xl:text-base font-medium text-[#787878] mt-1">{!(isEntitlement && !isFulfilled) && accessMessage && (
                   ` ${accessMessage}`
          )}</h3>
      </div>

  );
  // return (
  //   <span className="small" data-testid="CourseCardDetails">
  //     {providerName} • {courseNumber}
  //     {!(isEntitlement && !isFulfilled) && accessMessage && (
  //       ` • ${accessMessage}`
  //     )}
  //     {isEntitlement && isFulfilled && canChange ? (
  //       <>
  //         {' • '}
  //         <Button variant="link" size="inline" className="m-0 p-0" onClick={openSessionModal}>
  //           {changeOrLeaveSessionMessage}
  //         </Button>
  //       </>
  //     ) : null}
  //   </span>
  // );
};

CourseCardDetails.propTypes = {
  cardId: PropTypes.string.isRequired,
};

CourseCardDetails.defaultProps = {};

export default CourseCardDetails;
