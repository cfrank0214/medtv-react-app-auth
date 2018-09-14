import { Switch, Route } from 'react-router-dom'
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import React from 'react';
import MeetOurTeam from './containers/MeetOurTeam';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Homepage from './containers/Homepage';
import FullListPage from './containers/FullListPage';
import VideoWatchPage from './containers/VideoWatchPage';
import The404Page from './containers/The404Page';
import MemberDetails from './containers/MemberDetails'


export default ({ childProps }) =>

  <Switch>
    <AppliedRoute name='home' exact path='/' component={Homepage} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute name='watch-page' exact path='/video/:videoId' component={VideoWatchPage} props={childProps} />
    <AuthenticatedRoute name='list-page' path='/videos' component={FullListPage} props={childProps} />
    <Route name='meet-our-team' exact path='/team' component={MeetOurTeam} props={childProps} />
    <Route name='member-details' exact path='/team/:name' component={MemberDetails} props={childProps} />
    <Route name='sorry-404' component={The404Page} />
  </Switch>



