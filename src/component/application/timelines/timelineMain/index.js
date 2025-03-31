import AppIdeasTimeline from "./AppIdeasTimeline";
import AutoTestingTimeline from "./AutoTestingTimeline";
import BlogTimeline from "./BlogTimeline";
import CarouselTimeline from "./CarouselTimeline";
import MeetUpTimeline from "./MeetUpTimeline";
import ResolutionTimeline from "./ResolutionTimeline";
import React from "react";
const TimelineMain = () => {
  return (
    <section className='cd-container' id='cd-timeline'>
      <AppIdeasTimeline />
      <BlogTimeline />
      <CarouselTimeline />
      <AutoTestingTimeline />
      <MeetUpTimeline />
      <ResolutionTimeline />
    </section>
  );
};
export default TimelineMain;
