import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar'
import NoMatch from './NoMatch'
import Home from './Home'
import Sidenav from './Sidenav'
import Banner from './Banner'
import Cart from './Cart'
import { Segment, Grid } from 'semantic-ui-react'
import styled from 'styled-components';
import SearchProps from './SearchProps'
import { withRouter } from 'react-router'

const BannerStyle = styled.div`
  padding-right: 0 !important;
`

const styles = {
  appBackground: {
    backgroundColor: '#A0CFD3',
    minHeight: '100%'
  }
}

class App extends Component {

  storePaths(){
    return(
      <SearchProps>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/men' component={Home} />
          <Route exact path='/women' component={Home} />
          <Route exact path='/sale' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route component={NoMatch} />
        </Switch>
      </SearchProps>
    )
  }

  withSideBar = () => {
    return(
      <Grid verticalAlign='top'>

        <Grid.Row>
          <Grid.Column as={BannerStyle} width={16}>
            <Banner />
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={3}>
          <Sidenav />
        </Grid.Column>
        <Grid.Column width={13}>
          {this.storePaths()}
        </Grid.Column>
      </Grid>

    )
  }

  cartShow = () => {
    return(
      <Grid verticalAlign='top'>

      <Grid.Column>
        { this.storePaths() }
      </Grid.Column>
    </Grid>

    )
  }

  render() {
    const { pathname } = this.props.location
    return (
      <div style={styles.appBackground}>
        <Navbar />
        <Segment basic className='container'>
            { pathname !== '/cart' ? this.withSideBar() : this.cartShow()}
        </Segment>
      </div>
    );
  }
}

export default withRouter(App);
