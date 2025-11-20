import React from "react";

const AppIdeasTimeline = () => {
  return (
    <div className='cd-timeline-block'>
      <div className='cd-timeline-img bg-primary'>
        <i className='icon-pencil-alt' />
      </div>
      <div className='cd-timeline-content'>
        <div className='vertical-timeline-element--work'>
          <h4 className='vertical-timeline-element-subtitle'>{"Start With This 1"}</h4>
        </div>
        <p>{"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}</p>
        <span className='cd-date'>2022 - present</span>
      </div>
    </div>
  );
};
export default AppIdeasTimeline;
