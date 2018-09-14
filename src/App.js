import React, {  Fragment } from 'react';
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupAddon, InputGroup, Input,
  Container
} from 'reactstrap';
import { Auth } from 'aws-amplify';
import { Link, NavLink } from 'react-router-dom'
import Picture from './images/logo_transparent_small(1).png'
import Routes from "./Routes"
import TheFooter from './components/TheFooter';


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      input: '',
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true);
      }
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  updateInput = (e) => {
    this.setState({ input: e.target.value })
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar fixed="top" id='toplevel-nav' dark expand="lg">
          <Container>
            <Link className='the-logo' to="/"><img alt='MedTV logo' height={40} src={Picture} /></Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {this.state.isAuthenticated ?
                  (<Fragment >
                    <NavItem className='nav-links' onClick={this.handleLogout}><div className='nav-item-container'>Logout</div></NavItem>
                    <NavItem>
                      <NavLink className='nav-links' to="/videos?startkey="><div className='nav-item-container'>Videos</div></NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Browse
                </DropdownToggle>
                      <DropdownMenu right>
                        <NavLink className='browse' to='/videos?tag=Cardiovascular'>
                          <DropdownItem className='nav-browse'>
                            Cardiovascular
                  </DropdownItem>
                        </NavLink>
                        <NavLink className='browse' to='/videos?tag=Digestive'>
                          <DropdownItem className='nav-browse'>
                            Digestive
                  </DropdownItem>
                        </NavLink>
                        <NavLink className='browse' to='/videos?tag=Musculoskeletal'>
                          <DropdownItem className='nav-browse'>
                            Musculoskeletal
                  </DropdownItem>
                        </NavLink>
                        <NavLink className='browse' to='/videos?tag=Respiratory'>
                          <DropdownItem className='nav-browse'>
                            Respiratory
                  </DropdownItem>
                        </NavLink>
                        <NavLink className='browse' to='/videos?tag=Skin'>
                          <DropdownItem className='nav-browse'>
                            Skin
                  </DropdownItem>
                        </NavLink>
                        <NavLink className='browse' to='/videos?tag=Urinary+System'>
                          <DropdownItem className='nav-browse'>
                            Urinary System
                  </DropdownItem>
                        </NavLink>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                      <InputGroup>
                        <Input type="text" value={this.state.input} onChange={e => this.updateInput(e)} className="form-control" placeholder="Search for..." />
                        <InputGroupAddon addonType="append" className="input-group-btn">
                          <Link to={`/videos?tag=${this.state.input}`}><Button className="nav-go" type="button">Go!</Button></Link>
                        </InputGroupAddon>
                      </InputGroup>
                    </NavItem>
                  </Fragment>
                  ) : (
                    <Fragment  >
                      <NavItem id='signup'>
                        <NavLink className='nav-links nav2' to="/signup"><div className='nav-item-container contribute'>Signup</div></NavLink>
                      </NavItem>
                      <NavItem id='login'>
                        <NavLink className='nav-links nav2' to="/login"><div className='nav-item-container contribute'>Login</div></NavLink>
                      </NavItem>
                    </Fragment>
                  )}
                <NavItem id='team-nav'>
                  <NavLink className='nav-links nav2' to="/meet-our-team"><div className='nav-item-container contribute'>Team</div></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Routes childProps={childProps} />
        <TheFooter />
      </div>
    );
  }
}