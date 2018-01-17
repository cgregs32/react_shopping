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
  state = { loaded: false, category: '', sale: false }

  componentDidMount(){
    const { dispatch, location} = this.props
    dispatch(getProducts(this.apiCallback))
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({category: nextProps.location.pathname.slice(1)})
  }

  apiCallback = () => {
    this.setState({ loaded: !this.state.loaded})
  }

  mapProducts = () => {
    const { products } = this.props;
    const { category } = this.state;

    let visible = products;
    const keyWord = category.substr(0, 1).toUpperCase() + category.substr(1);
    switch(category ){
      case 'sale':
        visible = this.props.products.filter( p => p.Reviews.AverageRating < 4.2 )
        break;
      case 'women':
      case 'men':
        visible = this.props.products.filter( p => p.Name.includes(keyWord))
        break;
      default:
        visible
    }
    return visible.map( item => {
      return (
        <Grid.Column key={item.Id}>
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
    currentPath: state.searchProps
  }
}

export default connect(mapStateToProps)(Home);
