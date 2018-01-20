import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import styled from 'styled-components';
import { connect } from 'react-redux'

const Container = styled.div`
  text-align: center
`
const CartItem = styled.div`

`

class Cart extends React.Component {

  mapProducts = () => {
    this.props.store.map(item => {
      return(
        <Segment basic>
        </Segment>
      )
    })
  }

  render () {
    return(
      <Segment as={Container}>
        <Header as='h1'>
          Cart
        </Header>
        { this.mapProducts()}
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { store: state.store}
}

export default Cart;
