import React from 'react'
import { Segment } from 'semantic-ui-react'
import axios from 'axios'

class Home extends React.Component {

  componentDidMount(){
    const BASE_URL = 'http://api.sierratradingpost.com/api/1.0'
    const KEY = '7917bf23fb8c9ab084cbb0134a3c0134'
    axios.get(`${BASE_URL}/products/?api_key=${KEY}`)
      .then( res => {
        debugger
        console.log(res.data)
      })
  }

  render () {
    return(
      <Segment basic>
        Home
      </Segment>
    )
  }
}

export default Home;
