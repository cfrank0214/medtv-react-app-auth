import React, { Component, Fragment } from 'react';

import VideoWatchBreadcrumb from '../components/WatchBreadcrumb';
import VideoStore from '../components/VideoStore';

class VideoWatchPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Fragment>
        <VideoWatchBreadcrumb />
        <VideoStore props={this.props} />
      </Fragment>
    );
  }
}

export default VideoWatchPage;
