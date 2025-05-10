import React from 'react';
import PropTypes from 'prop-types';

import track from 'tracking';
import { reduxHooks } from 'hooks';
import useActionDisabledState from './hooks';
import CourseCardActions from "./CourseCardActions";

const { courseTitleClicked } = track.course;

export const CourseCardTitle = ({ cardId }) => {
  const { courseName } = reduxHooks.useCardCourseData(cardId);
  const { homeUrl } = reduxHooks.useCardCourseRunData(cardId);
  const handleTitleClicked = reduxHooks.useTrackCourseEvent(
    courseTitleClicked,
    cardId,
    homeUrl,
  );
  const { disableCourseTitle } = useActionDisabledState(cardId);
  return (
    <div>
      {disableCourseTitle ? (
        <div>
          <h3 data-testid="CourseCardTitle" className="text-sm xl:text-xl font-medium text-black mt-3">
            {courseName}
          </h3>
        </div>
      ) : (
          <div>
            <h3 className="text-sm xl:text-xl font-medium text-black mt-3">
              <a className="text-black text-normal no-underline hover:no-underline" href={homeUrl}>{courseName}</a>
            </h3>
            <CourseCardActions cardId={cardId} />
            {/*<div className="mt-3 xl:mt-6 block">*/}
            {/*  <a href={homeUrl} className="bg-primary px-3 text-sm py-2 rounded xl:px-6 font-medium xl:text-base text-white">Continue Learning</a>*/}
            {/*</div>*/}
          </div>
      )}
    </div>
  );
};

CourseCardTitle.propTypes = {
  cardId: PropTypes.string.isRequired,
};

CourseCardTitle.defaultProps = {};

export default CourseCardTitle;
