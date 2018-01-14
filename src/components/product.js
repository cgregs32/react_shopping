import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import styled from 'styled-components';


const EachCard = styled.div`
  margin: 5px !important;
  justify-content: space-between;
`

class Product extends React.Component {
  render () {
    const item = this.props
    return (
      <Card as={EachCard} >
        <Card.Content>
          <Card.Header>{item.Name}</Card.Header>
        </Card.Content>
        <Image src={item.Images.PrimaryExtraLarge} />
        <Card.Content>
          <Card.Meta>Joined in 2016</Card.Meta>
          <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            10 Friends
          </a>
        </Card.Content>
      </Card>
    )
  }
}

export default Product;
