import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Icon, Label } from 'semantic-ui-react'
import styled from 'styled-components';
import { connect } from 'react-redux'


const NavStyle = styled.div`
  height: 65px;
  padding: 0 85px !important;
`
const LabelStyle = styled.div`
  top: -0.0em !important;
`

class Navbar extends React.Component {
  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }

  render() {
    const { cart } = this.props
    return (
      <div>
        <Menu attatched='top' as={NavStyle}>
          <Menu.Menu position='left' basic>
            <Menu.Item as={Link} to='/' active={this.activeItem('/')}>
              <Icon name='home' style={{ fontSize: '28px'}}/>
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu position='center'>
            <Menu.Item as={Link} to='/women' active={this.activeItem('/home')}>
              Women
            </Menu.Item>
            <Menu.Item as={Link} to='/men'>
              Men
            </Menu.Item>
            <Menu.Item as={Link} to='/sale'>
              Sale
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu position='right'>
            <Menu.Item
              as={Link}
              to='/cart'
              >
              <Icon name='shop' style={{ fontSize: '28px'}}>
                {cart.length > 0 && <Label as={LabelStyle} color='red' circular floating>{this.props.cart.length}</Label> }
              </Icon>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart}
}

export default withRouter(connect(mapStateToProps)(Navbar));
