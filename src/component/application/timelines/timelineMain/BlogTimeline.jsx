import React from "react";

const BlogTimeline = () => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img bg-danger">
        <i className="icon-youtube" />
      </div>
      <div className="cd-timeline-content">
      <h4 className="vertical-timeline-element-subtitle">{"Video Tutorial 2"}</h4>
        <div className="ratio ratio-21x9 m-t-10">
          <iframe src="https://www.youtube.com/embed/sqRk0Ly66Ps" title="blog_time" allowFullScreen></iframe>
        </div>
        <span className="cd-date">2020 - 2021</span>
      </div>
    </div>
  );
};
export default BlogTimeline;
