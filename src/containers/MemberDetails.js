import React, { Component, Fragment } from 'react';
import MemberContainer from '../components/MemberContainer'



class MemberDetails extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

    render() {
  
      return (
        <Fragment>
          <MemberContainer props={this.props} />
        </Fragment>
      );
    }
  }
  
  export default MemberDetails;