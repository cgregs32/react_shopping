import { combineReducers } from 'redux'
import flash from './flash'
import products from './products'
import searchProps from './searchProps'


const rootReducer = combineReducers({
  flash,
  products,
  searchProps,
})

export default rootReducer
