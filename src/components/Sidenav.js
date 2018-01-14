import React from 'react'
import { Segment, Menu, Radio, Input, Divider, Header } from 'semantic-ui-react'

class Sidenav extends React.Component {
  render () {
    return(
      <Menu vertical basic>
        <Menu.Item>
          <Menu.Header>Filter By Price</Menu.Header>
          <Input min={1} max={500} type='range' value='temp' />
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Sale Items</Menu.Header>
          <Segment compact>
            <Radio toggle />
          </Segment>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>SALE!</Menu.Header>
          <Header as='h5'>We are having a sale, yadayada this is going to be huger lade da de do.</Header>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Contact US!</Menu.Header>
            <Header as='h5'>Reach us by phone: 442-332-552</Header>
            <Header as='h5'>Email us at: email@emai.com</Header>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Sidenav;
