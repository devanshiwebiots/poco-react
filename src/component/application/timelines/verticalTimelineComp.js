import React from "react";
import { Card, CardBody } from "reactstrap";
import { VerticalTimelineData } from "../../../data/timeline";

const VerticalTimelineComp = () => {
  return (
    <div className='vertical-timeline-container'>
      <div className='vertical-line' />
      {VerticalTimelineData.map((item, idx) => (
        <div className='timeline-item' key={idx}>
          <div className={`timeline-icon bg-${item.color}`}>
            <i className={item.iconClass}></i>
          </div>
          <Card className='timeline-card'>
            <CardBody>
              <h5 className='timeline-title'>{item.title}</h5>
              {item.description && <p>{item.description}</p>}
              {item.video && (
                <div className='ratio ratio-21x9 mt-2'>
                  <iframe src={item.video} title='video' allowFullScreen style={{ width: "100%", height: "280px", border: "none" }} />
                </div>
              )}
              {item.audio && (
                <audio controls preload='none'>
                  <source src={item.audio} type='audio/ogg' />
                  {"Your browser does not support the audio element."}
                </audio>
              )}
              {item.image && <img src={item.image} alt='timeline-img' className='img-fluid mt-2' />}
              <div className='timeline-date'>{item.date}</div>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimelineComp;
