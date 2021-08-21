import { applyMiddleware, createStore, compose } from "redux";
import * as thunk from 'redux-thunk';
import rootReducer from "./reducers/reducer";


export default function configureStore() {
 
  const initialState = {
    login: {
        status: false,
        jwt_token: null
     }
  }
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk.default))
  return store
}

export const store = configureStore()

