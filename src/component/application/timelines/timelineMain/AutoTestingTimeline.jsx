import React from "react";
import horseAudio from "/assets/audio/horse.ogg";

const AutoTestingTimeline = () => {
  return (
    <div className='cd-timeline-block'>
      <div className='cd-timeline-img bg-info'>
        <i className='icon-pulse' />
      </div>
      <div className='cd-timeline-content'>
        <h4 className='vertical-timeline-element-subtitle'>{"Audio Tutorial 4"}</h4>
        <audio controls preload='none'>
          <source src={horseAudio} type='audio/ogg' />
          {"Your browser does not support the audio element."}
        </audio>
        <span className='cd-date'>2015 - 2017</span>
      </div>
    </div>
  );
};

export default AutoTestingTimeline;
