import React from 'react'
import { Segment, Header, Grid, Image } from 'semantic-ui-react'
import styled from 'styled-components';
import { connect } from 'react-redux'
const Container = styled.div`
  text-align: center
`
const CartItem = styled.div`
  width: 40%;
  margin: 0 auto !important;
  border-bottom: 1px solid black !important;
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
            <Grid.Column width={10}>
              <Header as='h3'>{rawName}</Header>
              ${item.SuggestedRetailPrice} x {item.count}
              <Header>Total for this item: {total.toFixed(2)}</Header>
            </Grid.Column>
            <Grid.Column width={6}>
              <Image src={item.Images.PrimaryMedium} />
            </Grid.Column>
          </Grid>
        </Segment>
      )
    })
  }
  render () {
    const { cart } = this.props
    return(
      <Segment as={Container}>
        <Header as='h1'>
          Cart
        </Header>
        { this.props.cart && this.handleMultiples(cart)}
      </Segment>
    )
  }
}
const mapStateToProps = (state) => {
  return { cart: state.cart}
}
export default connect(mapStateToProps)(Cart)
