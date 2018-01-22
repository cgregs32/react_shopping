import React from 'react'
import { Grid } from 'semantic-ui-react'
import { getProducts } from '../actions/products'
import { connect } from 'react-redux'
import Product from './Product'
import styled from 'styled-components';

const cardColumn = styled.div`
  height: 330px !important;
  padding-right: 2px  !important;
  padding-bottom: 0  !important;
`

class Home extends React.Component {
  state = { loaded: false, category: '', sale: false }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(getProducts(this.apiCallback))
  }

  componentWillReceiveProps = (nextProps) => {
    // this.props.dispatch({type: 'SET_PATH' path: nextProps.location.pathname.slice(1)})
    this.setState({category: nextProps.location.pathname.slice(1)})
  }

  apiCallback = () => {
    this.setState({ loaded: !this.state.loaded})
  }

  filterProducts = () => {

  }

  filterSale = () => {

  }

  mapProducts = () => {
    const { products, filter, cost } = this.props;
    const { category } = this.state;
    let visible = products;
    const keyWord = category.substr(0, 1).toUpperCase() + category.substr(1);
    switch(category ){
      case 'sale':
        visible = products.filter( p => p.Reviews.AverageRating < 4.2 )
        break;
      case 'women':
      case 'men':
        visible = products.filter( p => p.Name.includes(keyWord))
        break;
    }
    if(filter === true){
      visible = visible.filter( p => p.Reviews.AverageRating < 4.2 )
    }
    if(cost)
      visible = visible.filter( p => p.SuggestedRetailPrice < cost)
    return visible.map( item => {
      return (
        <Grid.Column as={cardColumn} key={item.Id}>
          <Product {...item} />
        </Grid.Column>
      );
    });
  }

  displayVisible = (visible) => {
  }

// this.props.match.path.slice(1)
  render () {
    const { loaded } = this.state
    return(
      <Grid columns={3}>
        { loaded && this.mapProducts()}
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    filter: state.searchProps,
    cost: state.costFilter
  }
}

export default connect(mapStateToProps)(Home);
