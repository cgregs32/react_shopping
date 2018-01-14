import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Navbar extends React.Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    return (
      <div>
        <Menu attatched='top'>
          <Link to='/'>
            <Menu.Item name='home' active={this.activeItem('/')} />
          </Link>
          <Menu.Menu>
            <Link to='/women'>
              <Menu.Item name='Women' />
            </Link>
            <Link to='/men'>
              <Menu.Item name='Men' />
            </Link>
            <Link to='/sale'>
              <Menu.Item name='Sale' />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(Navbar);
