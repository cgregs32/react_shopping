import { setFlash } from './flash'
import axios from 'axios-jsonp-pro'


export const getProducts = (cb = {}) => {
  return(dispatch) => {

    const BASE_URL = 'http://api.sierratradingpost.com/api/1.0/products/search~chacco/'
    const KEY = '7917bf23fb8c9ab084cbb0134a3c0134'

    axios.jsonp(`${BASE_URL}`, {
        params: {
          api_key: KEY,
          perpage: 9
        }
      })
      .then(res => {
        console.log(res.Result);
        dispatch({type: 'GET_PRODUCTS', products: res.Result})
        cb()
      })
      .catch(err => {
        dispatch(setFlash('Could not retreive your products', 'Error'))
      })

  }
}
