import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoDetail extends Component {
  render() {
    if (!this.props.video) return <div>Loading...</div>;
    const url = `https://www.youtube.com/watch?v=${
      this.props.video.id.videoId
    }`;
    return (
      <div className="col-md-8 video-detail">
        <div className="embed-responsive embed-responsive-16x9">
          <div className="container container-video">
            <ReactPlayer url={url} width="100%" />
          </div>
        </div>
        <div className="details">
          <div>{this.props.video.snippet.title}</div>
          <div>{this.props.video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
