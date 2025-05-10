import React from 'react';
import PropTypes from 'prop-types';

import { Container, Col, Row } from '@openedx/paragon';

import WidgetSidebarSlot from 'plugin-slots/WidgetSidebarSlot';

import hooks from './hooks';

export const columnConfig = {
  courseList: {
    withSidebar: {
      lg: { span: 12, offset: 0 },
      xl: { span: 8, offset: 0 },
    },
    noSidebar: {
      lg: { span: 12, offset: 0 },
      xl: { span: 12, offset: 0 },
    },
  },
  sidebar: {
    lg: { span: 12, offset: 0 },
    xl: { span: 4, offset: 0 },
  },
};

export const DashboardLayout = ({ children }) => {
  const {
    isCollapsed,
    sidebarShowing,
  } = hooks.useDashboardLayoutData();

  const courseListColumnProps = sidebarShowing
    ? columnConfig.courseList.withSidebar
    : columnConfig.courseList.noSidebar;

  return (
    <Container fluid size="xl" className="mt-3">
      <Row>
        <Col {...courseListColumnProps} className="course-list-column">
          <div className="bg-white pb-10 px-4 xl:px-[6%]">
            <div className="">
              <div className="flex items-center space-x-4 font-inter md:!py-0 !py-4">
                <a href="/courses" className="bg-primary text-white font-medium py-2 px-6 rounded">Discover New Course</a>
              </div>
              <div className="customCourse">
                {children}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
