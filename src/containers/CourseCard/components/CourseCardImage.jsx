import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';

import { Badge } from '@openedx/paragon';

import track from 'tracking';
import { reduxHooks } from 'hooks';
import verifiedRibbon from 'assets/verified-ribbon.png';
import useActionDisabledState from './hooks';

import messages from '../messages';

const { courseImageClicked } = track.course;

export const CourseCardImage = ({ cardId, orientation }) => {
  const { formatMessage } = useIntl();
  const { bannerImgSrc } = reduxHooks.useCardCourseData(cardId);
  const { homeUrl } = reduxHooks.useCardCourseRunData(cardId);
  const { isVerified } = reduxHooks.useCardEnrollmentData(cardId);
  const { disableCourseTitle } = useActionDisabledState(cardId);
  const handleImageClicked = reduxHooks.useTrackCourseEvent(courseImageClicked, cardId, homeUrl);
  const wrapperClassName = `pgn__card-wrapper-image-cap d-inline-block overflow-visible ${orientation}`;
  const image = (
    <>
      <img
        // w-100 is necessary for images on Safari, otherwise stretches full height of the image
        // https://stackoverflow.com/a/44250830
        className="pgn__card-image-cap w-100 show"
        src={bannerImgSrc}
        alt={formatMessage(messages.bannerAlt)}
      />
      {
        isVerified && (
          <span className="course-card-verify-ribbon-container"
            title={formatMessage(messages.verifiedHoverDescription)}>
            <Badge as="div" variant="success" className="w-100">
              {formatMessage(messages.verifiedBanner)}
            </Badge>
            <img src={verifiedRibbon} alt={formatMessage(messages.verifiedBannerRibbonAlt)} />
          </span>
        )
      }
    </>
  );

  return (
      <div className="size-full">
          <img src={bannerImgSrc} alt={formatMessage(messages.bannerAlt)} className="w-full h-full object-cover xl:bg-center"/>
      </div>
  );
};

CourseCardImage.propTypes = {
  cardId: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
};

CourseCardImage.defaultProps = {};

export default CourseCardImage;
