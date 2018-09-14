import React, { Component, Fragment } from 'react';
import TheCarousel from '../components/TheCarousel';


class Homepage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {


    return (
      <Fragment>
        <TheCarousel />
      </Fragment>
    );

  }
}

export default Homepage;
