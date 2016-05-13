import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const videoListItems = this.props.videos.map((video) => {
      return <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={this.props.onVideoSelect} />
    });
    return (
      <div>
        <ul className='col-md-4 list-group'>
          {videoListItems}
        </ul>
        <p>{this.props.videos.length} videos found.</p>
      </div>
    );
  }
}

export default VideoList;
