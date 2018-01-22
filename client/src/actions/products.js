import { setFlash } from './flash';
import axios from 'axios-jsonp-pro';

export const getProducts = (cb = {}) => {

  return(dispatch) => {
    const BASE_URL = 'http://api.sierratradingpost.com/api/1.0/products/search~chacco/'
    axios.jsonp(`${BASE_URL}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          perpage: 9
        }
      })
      .then(res => {
        dispatch({type: 'GET_PRODUCTS', products: res.Result})
        cb()
      })
      .catch(err => {
        dispatch(setFlash('Could not retreive your products', 'Error'))
      })

  }
}
