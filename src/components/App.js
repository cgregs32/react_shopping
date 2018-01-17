import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Women from './Women'
import Men from './Men'
import Sale from './Sale'
import NoMatch from './NoMatch'
import Home from './Home'
import Sidenav from './Sidenav'
import Banner from './Banner'
import { Segment, Grid } from 'semantic-ui-react'
import styled from 'styled-components';
import SearchProps from './SearchProps'



class App extends Component {

  storePaths(){
    return(
      <SearchProps>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/men' component={Home} />
          <Route exact path='/women' component={Home} />
          <Route exact path='/sale' component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </SearchProps>
    )
  }

  render() {
    return (
      <div>
        <Navbar />
        <Segment basic className='container'>
          <Grid verticalAlign='top'>
            <Grid.Row>
              <Grid.Column width={16}>
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
        </Segment>
      </div>
    );
  }
}

export default App;
