import { combineReducers } from 'redux'
import pizzaReducer from './pizza'
import cartReducer from './cart'

export const rootReducer = combineReducers({
  cart: cartReducer,
  pizza: pizzaReducer
})