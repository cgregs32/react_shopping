import { combineReducers } from 'redux'
import flash from './flash'
import products from './products'
import searchProps from './searchProps'
import costFilter from './costFilter'
import currentPath from './currentPath'
import cart from './cart'


const rootReducer = combineReducers({
  flash,
  products,
  searchProps,
  costFilter,
  currentPath,
  cart,
})

export default rootReducer
