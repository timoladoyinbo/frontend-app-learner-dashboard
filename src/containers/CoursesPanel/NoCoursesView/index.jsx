import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button, Image } from '@openedx/paragon';
import { Search } from '@openedx/paragon/icons';
import { baseAppUrl } from 'data/services/lms/urls';

import emptyCourseSVG from 'assets/emptyCourse.svg';
import { reduxHooks } from 'hooks';

import messages from './messages';
import './index.scss';

export const NoCoursesView = () => {
  const { formatMessage } = useIntl();
  const { courseSearchUrl } = reduxHooks.usePlatformSettingsData();
  return (
    <div id="no-courses-content-view"
      className="d-flex align-items-center justify-content-center mb-4.5">
      <Image className="h-56" src={emptyCourseSVG} alt={formatMessage(messages.bannerAlt)} />
      <div className="mt-5 xl:mt-6 flex justify-center">
        <div className="text-lg font-poppins font-medium text-black w-full text-center">
          <span>You currently do not have any course enrolled... </span>
          <a href={baseAppUrl(courseSearchUrl)} className="text-[#ff6f00]">Click here</a>
          <br />
          to enrol to a new course.
        </div>
      </div>
      {/* <h1> */}
      {/*   {formatMessage(messages.lookingForChallengePrompt)} */}
      {/* </h1> */}
      {/* <p> */}
      {/*   {formatMessage(messages.exploreCoursesPrompt)} */}
      {/* </p> */}
      {/* <Button */}
      {/*   variant="brand" */}
      {/*   as="a" */}
      {/*   href={baseAppUrl(courseSearchUrl)} */}
      {/*   iconBefore={Search} */}
      {/* > */}
      {/*   {formatMessage(messages.exploreCoursesButton)} */}
      {/* </Button> */}
    </div>
  );
};

export default NoCoursesView;
