import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppliedRoute from "./Components/AppliedRoute";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
import UnauthenticatedRoute from "./Components/UnauthenticatedRoute";
import React from 'react';
import MeetOurTeam from './Pages/MeetOurTeam';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Homepage from './Pages/Homepage';
import FullListPage from './Pages/FullListPage';
import VideoWatchPage from './Pages/VideoWatchPage';
import The404Page from './Pages/The404Page';
import MemberDetails from './Pages/MemberDetails'


export default ({childProps}) => 
 <BrowserRouter>
 <Switch>
      <AppliedRoute name='home' exact path='/' component={Homepage} props={childProps} />
      <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
      <AuthenticatedRoute name='watch-page' exact path='/video/:videoId' component={VideoWatchPage} props={childProps} />
      <AuthenticatedRoute name='list-page' path='/videos' component={FullListPage} props={childProps} />
      <Route name='meet-our-team' exact path='/meet-our-team' component={MeetOurTeam} props={childProps} />
      <Route name='member-details' exact path='/meet-our-team/:name' component={MemberDetails} props={childProps} />
      <Route name='sorry-404' component={The404Page} />
    </Switch>
 </BrowserRouter>;
    
 
