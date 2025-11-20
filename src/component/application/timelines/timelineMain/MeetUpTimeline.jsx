import banner3 from "/assets/images/banner/3.jpg";

const MeetUpTimeline = () => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img bg-warning">
        <i className="icon-image" />
      </div>
      <div className="cd-timeline-content">
      <h4 className="vertical-timeline-element-subtitle">{"Team Work 5"}</h4>
      <img className="img-fluid p-t-20" src={banner3} alt="timelineImg2" />
        <span className="cd-date">November 04 2024</span>
      </div>
    </div>
  );
};
export default MeetUpTimeline;
