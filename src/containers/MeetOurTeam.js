import React, { Component, Fragment } from 'react';
import Media from '../components/Media';

class MeetOurTeam extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <Fragment>
        <Media />
      </Fragment>
    );
  }
}

export default MeetOurTeam;
