import loginReducer from "../components/Login/loginSlice"



export default function rootReducer(state, action) {
    // always return a new object for the root state
    return {
      login: loginReducer(state.login, action)
    }
  }