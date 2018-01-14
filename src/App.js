import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Women from './components/Women'
import Men from './components/Men'
import Sale from './components/Sale'
import NoMatch from './components/NoMatch'
import Home from './components/Home'
import Sidenav from './components/Sidenav'
import Banner from './components/Banner'
import { Segment, Grid } from 'semantic-ui-react'

class App extends Component {

  storePaths(){
    return(
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/men' component={Men} />
        <Route exact path='/women' component={Women} />
        <Route exact path='/sale' component={Sale} />
        <Route component={NoMatch} />
      </Switch>

    )
  }

  render() {
    return (
      <div>
        <Navbar />
        <Segment basic className='container'>

            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Banner />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Sidenav />
                </Grid.Column>
                <Grid.Column width={10}>
                    {this.storePaths()}
                </Grid.Column>
              </Grid.Row>
            </Grid>



        </Segment>
      </div>
    );
  }
}

export default App;
