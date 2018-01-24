import React, { Component } from 'react';
import {
  Header,
  Segment,
  Input,
  Label,
  Divider,
  Image,
  List,
} from 'semantic-ui-react';
import BraintreeDrop from './BraintreeDrop';
import styled from 'styled-components';

const CheckoutStyle = styled.div`
  width: 40%;
  margin: 0 auto !important;
  border: 1px solid black !important;
  text-align: center;
`
const CartTotal = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 1px !important;
`

const LabelStyle = styled.div`
  margin-right: 50px !important;
`

class Checkout extends Component {
  state = { amount: 150.5 }

  render() {
    const { total } = this.props;

    return (
      <Segment basic as={CheckoutStyle}>
        <Header as="h3">Cart total</Header>
          <List divided selection>
            <List.Item as={CartTotal}>
              <Label size='large' as={LabelStyle} color='red' horizontal>Total</Label>
              {total}
            </List.Item>
          </List>
        <BraintreeDrop amount={total} />
      </Segment>
    );
  }
}

export default Checkout;
