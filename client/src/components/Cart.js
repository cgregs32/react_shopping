import React from 'react'
import { Segment, Header, Grid, Image, Button } from 'semantic-ui-react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Checkout from './checkout/Checkout'

const Container = styled.div`
  text-align: center
`

const CartItem = styled.div`
  width: 40%;
  margin: 5px auto !important;
  border-bottom: 1px solid black !important;
`
const CartText = styled.div`
  text-align: left;
`
const ImageStyle = styled(Image)`
  border: 0.5px solid black;
`
const SimpleText = styled.div`
  font-weight: 400 !important;
  font-size: 14px !important;
  margin-top: 10px;
`


class Cart extends React.Component {
  state = { visible: [] }
  handleMultiples = (cart) => {
    const result = [...cart.reduce( (obj, item) => {
        if (!obj.has(item.Id)) obj.set(item.Id, Object.assign({ count: 0 }, item));
        obj.get(item.Id).count++;
        return obj;
    }, new Map).values()];
    return this.mapProducts(result)
  }

  mapProducts = (visible) => {
    return visible.map(item => {
      const rawName = item.Name.replace(/ *\([^)]*\) */g, "")
      const total = item.count * item.SuggestedRetailPrice
      return(
        <Segment key={item.Id} basic as={CartItem}>
          <Grid>
            <Grid.Column as={CartText} width={10}>
              <Header as='h3'>{rawName}</Header>
              ${item.SuggestedRetailPrice} x {item.count}
              <Header as={SimpleText}>Total for this item:
                <strong> {total.toFixed(2)}</strong>
              </Header>
            </Grid.Column>
            <Grid.Column width={6}>
              <Image as={ImageStyle} src={item.Images.PrimaryMedium} />
            </Grid.Column>
          </Grid>
        </Segment>
      )
    })
  }

  cartIsEmpty = () => {
    return(
      <Segment basic>
        <Header as='h4'>Your cart is empty</Header>
        <Button basic color='teal' as={Link} to='/'>Fill it up!</Button>
      </Segment>
    )
  }

  cartTotal = () => {
    const { cart } = this.props
    const total = cart.reduce( (total, item) => item.SuggestedRetailPrice + total, 0)
    debugger
    return(
      <Header>
        Total: ${ total.toFixed(2) }
      </Header>
    )
  }

  render () {
    const { cart } = this.props
    const total = cart.reduce( (total, item) => item.SuggestedRetailPrice + total, 0)
    return(
      <Segment as={Container}>
        <Header as='h1'>
          Cart
        </Header>
        { cart.length !== 0 ? this.handleMultiples(cart) : this.cartIsEmpty()}
        { cart.length !== 0 && this.cartTotal()}
        { cart.length !== 0 && <Checkout total={total}/> }
      </Segment>
    )
  }
}
const mapStateToProps = (state) => {
  return { cart: state.cart}
}
export default connect(mapStateToProps)(Cart)
