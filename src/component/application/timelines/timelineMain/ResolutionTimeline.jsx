const ResolutionTimeline = () => {
  return (
    <div className='cd-timeline-block'>
      <div className='cd-timeline-img bg-danger'>
        <i className='icon-agenda' />
      </div>
      <div className='cd-timeline-content'>
        <h4 className='vertical-timeline-element-subtitle'>{"Final Testing"}</h4>
        <p>{`This is the content of the last section`}</p>
        <span className='cd-date'>December 31 2025 </span>
      </div>
    </div>
  );
};
export default ResolutionTimeline;
