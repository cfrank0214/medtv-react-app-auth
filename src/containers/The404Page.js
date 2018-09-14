import React, { Component, Fragment } from 'react';
import Sorry404 from '../components/Sorry404';


class The404Page extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <Fragment>
        <Sorry404 />
      </Fragment>
    );
  }
}

export default The404Page;
