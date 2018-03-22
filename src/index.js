import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoDetail from "./components/video_detail";
import VideoList from "./components/video_list";
import "./index.css";

const API_KEY = "AIzaSyCXcEG_Wa4FRsj2nXBRq3Aef9REqO0unt8";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("spiderman");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple React app to search for youtube videos!
          </p>
          <hr className="my-4" />
          <SearchBar onSearchTermChange={videoSearch} />
        </div>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
