import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '@openedx/paragon';

import { useIsCollapsed } from './hooks';
import CourseCardBanners from './components/CourseCardBanners';
import CourseCardImage from './components/CourseCardImage';
import CourseCardMenu from './components/CourseCardMenu';
import CourseCardActions from './components/CourseCardActions';
import CourseCardDetails from './components/CourseCardDetails';
import CourseCardTitle from './components/CourseCardTitle';

import './CourseCard.scss';

export const CourseCard = ({
  cardId,
}) => {
  const isCollapsed = useIsCollapsed();
  const orientation = isCollapsed ? 'vertical' : 'horizontal';
  return (
      <div className="mb-10">
        <div className="shadow drop-shadow-sm rounded-xl">
          <div className="bg-white py-3 px-3 xl:px-8 xl:pt-5 xl-pb-3 rounded-t-lg">
            <div className="w-full flex flex-col xl:flex-row xl:items-center">
              <div className="w-full xl:w-1/3">
                <div className="w-full h-[143px] xl:h-[200px] relative">
                  <CourseCardImage cardId={cardId} orientation="horizontal" />
                </div>
              </div>
              <div className="w-full xl:w-2/3 flex items-center divide-x divide-[#787878] xl:h-[200px]">
                <div className="w-2/3 xl:w-1/2 h-full flex items-center px-3 xl:px-6">
                  <CourseCardTitle cardId={cardId} />
                </div>
                <div className="w-1/3 xl:w-1/2 mt-8 xl:mt-0">
                  <div className="hidden w-full xl:flex justify-end py-3">
                    <CourseCardMenu cardId={cardId} />
                  </div>
                  <div className="w-full flex justify-center">
                      <div x-data="{ progress: 70 }" className="relative size-[80px] xl:size-[180px]">
                      {/*  <svg className="w-full h-full"*/}
                      {/*       viewBox="0 0 100 100">*/}
                      {/*    <circle*/}
                      {/*        cx="50"*/}
                      {/*        cy="50"*/}
                      {/*        r="40"*/}
                      {/*        stroke="#eee"*/}
                      {/*        stroke-width="10"*/}
                      {/*        fill="none"></circle>*/}
                      {/*    <circle*/}
                      {/*        cx="50"*/}
                      {/*        cy="50"*/}
                      {/*        r="40"*/}
                      {/*        stroke="#ff7a00"*/}
                      {/*        stroke-width="10"*/}
                      {/*        fill="none"*/}
                      {/*        stroke-dasharray="251.2"*/}
                      {/*    stroke-linecap="round"*/}
                      {/*    transform="rotate(-90 50 50)" ></circle>*/}
                      {/*</svg>*/}
                      {/*    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-700">*/}
                      {/*      <span className="text-[8px] xl:text-sm">Completed</span>*/}
                      {/*      <span className="text-sm xl:text-lg font-bold" x-text="progress + '%'"></span>*/}
                      {/*    </div>*/}
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <Card.Section className="xl:mt-4">
            <CourseCardDetails cardId={cardId} />
          </Card.Section>
        </div>
        <CourseCardBanners cardId={cardId} />
      </div>
</div>
  );
};
CourseCard.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default CourseCard;
