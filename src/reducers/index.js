import { combineReducers } from 'redux'
import flash from './flash'
import products from './products'


const rootReducer = combineReducers({
  flash,
  products,
})

export default rootReducer
