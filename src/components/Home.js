import React from 'react'
import { Segment, Card,Grid } from 'semantic-ui-react'
import { getProducts } from '../actions/products'
import { connect } from 'react-redux'
import Product from './product'
import styled from 'styled-components';

const CardContainer = styled.div`
  margin-left: 1rem !important;
`
class Home extends React.Component {
  state = { loaded: false }

  componentDidMount(){
    this.props.dispatch(getProducts(this.apiCallback))
  }

  apiCallback = () => {
    this.setState({ loaded: !this.state.loaded})
  }

  mapProducts = () => {
    return this.props.products.map( item => {
      return (
        <Grid.Row>
          <Product key={item.Id} {...item} />
        </Grid.Row>
      );
    });
  }

  render () {
    const { loaded } = this.state
    return(
      <Card.Group as={CardContainer}>
        { loaded && this.mapProducts()}
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(Home);
