import React from 'react'
import { Segment } from 'semantic-ui-react'
import mensBanner from '../images/mens.jpg'
import womensBanner from '../images/womens.jpg'
import saleBanner from '../images/sale.jpg'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';

const BannerStyle = styled(Segment)`
height: 150px;
background-size: cover !important;
`
const Men = BannerStyle.extend`
  background-image: url(${mensBanner}) !important;
  background-position: 50% 380px !important;
`
const Women = BannerStyle.extend`
  background-image: url(${womensBanner})!important;
  background-position: 50% 550px !important;

`
const Sale = BannerStyle.extend`
  background-image: url(${saleBanner}) !important;
  background-position: 50% 380px !important;

`

class Banner extends React.Component {
  state = { category: '' }

  componentWillReceiveProps = (nextProps) => {
    // const category = category.substr(0, 1).toUpperCase() + category.substr(1);
    const path = nextProps.location.pathname
    this.setState({category: path.slice(1).substr(0, 1).toUpperCase() + path.substr(2)})
  }

  whatImage = () => {
    switch(this.state.category){
      case 'Men':
        return (
          <Segment as={Men}>
          </Segment>
        )
      case 'Women':
      return(
        <Segment as={Women}>
        </Segment>
      )
      case 'Sale':
      default:
        return(
          <Segment as={Sale}>
          </Segment>
        )
    }
  }

  render () {
    return(
      <div>
        {this.whatImage()}
      </div>
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

export default withRouter(connect(mapStateToProps)(Banner));
