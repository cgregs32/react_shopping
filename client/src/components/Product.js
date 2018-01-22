import React from 'react'
import { Card, Image, Label, Button } from 'semantic-ui-react'
import styled from 'styled-components';
import { connect } from 'react-redux'

const EachCard = styled.div`
  margin: 0 0 0 5px  !important;
  padding: 0 2px;
  justify-content: space-between;
  height: 330px !important;
`
const ButtonStyle = styled.button`
  width: 40% !important;
  margin: 15px auto 25px auto !important;
`
const description = styled.div`
  margin: 0;
`
const header = styled.div`
  padding-bottom: 0 !important;
`

const cardImage = styled(Image)`
  margin: 0 auto;
`

class Product extends React.Component {

  addToCart = () => {
    this.props.dispatch({ type: 'ADD_TO_CART', item: this.props })
  }

  render () {
    const item = this.props
    return (
      <Card as={EachCard} >
        <Card.Content as={header}>
          <Card.Header>{item.Name.replace(/ *\([^)]*\) */g, "")}</Card.Header>
          { item.Reviews.AverageRating < 4.2 && <Label as='a' color='red' ribbon='right'>Sale</Label> }
        </Card.Content>
        <Image as={cardImage} size='small' src={item.Images.PrimaryExtraLarge} />

        <Card.Description as={description} textAlign='center'>${item.SuggestedRetailPrice}</Card.Description>
        <Button as={ButtonStyle} color='teal' onClick={this.addToCart}>Add Item</Button>
      </Card>
    )
  }
}

export default connect()(Product);
