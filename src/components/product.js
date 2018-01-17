import React from 'react'
import { Card, Icon, Image, Label, Button } from 'semantic-ui-react'
import styled from 'styled-components';


const EachCard = styled.div`
  margin: 5px !important;
  justify-content: space-between;
`
const ButtonStyle = styled.button`
  width: 40% !important;
  margin: 15px auto 25px auto !important;
`

class Product extends React.Component {
  render () {
    const item = this.props
    return (
      <Card as={EachCard} >
        <Card.Content>
          <Card.Header>{item.Name}</Card.Header>
          { item.Reviews.AverageRating < 4.2 && <Label as='a' color='red' ribbon='right'>Sale</Label> }
        </Card.Content>
        <Image src={item.Images.PrimaryExtraLarge} />

        <Card.Description as='h3' textAlign='center'>${item.SuggestedRetailPrice}</Card.Description>
        <Button as={ButtonStyle} color='teal'>Add Item</Button>
      </Card>
    )
  }
}

export default Product;
