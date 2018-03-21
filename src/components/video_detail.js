import React from "react";
import ReactPlayer from "react-player";

const VideoDetail = props => {
  if (!props.video) return <div>Loading...</div>;
  const url = `https://www.youtube.com/watch?v=${props.video.id.videoId}`;
  return (
    <div className="col-md-8 video-detail">
      <ReactPlayer url={url} />
      <div className="details" style={{ "max-width": "640px" }}>
        <h2>{props.video.snippet.title}</h2>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
