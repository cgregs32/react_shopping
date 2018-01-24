import React from 'react';
import {
  Dimmer,
  Loader,
  Segment,
} from 'semantic-ui-react';
import { setFlash } from '../../actions/flash';
import { connect } from 'react-redux';
// import { setHeaders } from '../actions/headers';
import braintree from 'braintree-web-drop-in';
import BraintreeDropin from 'braintree-dropin-react';
import BraintreeSubmitButton from './BraintreeSubmitButton';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class BraintreeDrop extends React.Component {
  state = {
    loaded: false,
    token: '43534',
    transactionId: '',
    redirect: false,
  }

//get authorizationToken from node server
  componentDidMount() {
    const { dispatch } = this.props;

    axios.get('/api/braintree_token')
      .then( res => {
        const { data: token, headers } = res;
        // dispatch(setHeaders(headers));
        this.setState({ token, loaded: true });
      })
      .catch( res => {
        // dispatch(setHeaders(res.headers));
        dispatch(setFlash('Something Went Wrong', 'red'));
      });
  }

//must hit node server to post payment details
  handlePaymentMethod = (payload) => {
    const { dispatch, amount } = this.props;

    axios.post('/api/payment', { amount, ...payload })
      .then( res => {
        const { headers, data: transactionId } = res;
        // dispatch(setHeaders(headers));
        this.setState({ redirect: true, transactionId })
      })
      .catch( res => {
        dispatch(setFlash('Error Posting Payment', 'red'));
        // dispatch(setHeaders(res.headers));
        window.location.reload();
      });
  }

//need legit authorizationToken
  renderBraintree = (token) => (
    <Segment basic textAlign="center">
      <BraintreeDropin
        braintree={braintree}
        authorizationToken={token}
        handlePaymentMethod={this.handlePaymentMethod}
        renderSubmitButton={BraintreeSubmitButton}
        />
    </Segment>
  )

//need legit transactionId
  redirectAfterPay = (transactionId) => (
    <Redirect to={{
        pathname: '/payment_success',
        state: { amount: this.props.amount, transactionId }
      }}
    />
  )

  renderLoader = () => (
    <Dimmer active>
      <Loader>Loading Payment Experience. Please wait...</Loader>
    </Dimmer>
  )


// if loaded ?  braintree : loader
//remove fakeToken
  render() {
    const { loaded, token, redirect, transactionId } = this.state;
    const fakeToken = 'ajhk21kg32hg1adsa2'
    const fakeTransId = '342'
    return(
      <Segment basic>
        { redirect && this.redirectAfterPay(fakeTransId) }
        { this.renderBraintree(fakeToken) }
      </Segment>
    )
  }
}

export default connect()(BraintreeDrop);
