import React, { Component, Fragment } from 'react';
import Sidebar from '../components/Sidebar'
import VideoStore from '../components/VideoStore';

class FullListPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    // console.log(this.props)

    return (
      <Fragment>
        <Sidebar />
        <VideoStore props={this.props} />
      </Fragment>
    );

  }
}

export default FullListPage;
