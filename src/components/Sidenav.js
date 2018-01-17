import React from 'react'
import { Segment, Menu, Radio, Input, Header, Label } from 'semantic-ui-react'
import styled from 'styled-components';

const headerStyle = styled.div`
  display: inline !important;
`

class Sidenav extends React.Component {
  state = { duration: 250, sale: false }


  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  hendleToggle = () => {
    this.props.dispatch({ type: 'ADD_SEARCH_FILTER', visible: !this.state.sale})
  }

  render () {
    const { duration } = this.state

    return(
      <Menu vertical>
        <Menu.Item>
          <Header as='h4' textAlign='center'>Highest Price: ${duration}</Header>
            <Input
              min={1.00}
              max={500.00}
              name='duration'
              onChange={this.handleChange}
              step={0.1}
              type='range'
              value={duration}
            />
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Sale Items</Menu.Header>
          <Segment compact>
            <Radio
              toggle
              onChange={this.handleToggle}
            />
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
