


export default function loginReducer(state, action) {
    switch (action.type) {
    //   case 'todos/todoAdded': {
    //     // Can return just the new todos array - no extra object around it
    //     return [
    //       ...state,
    //       {
    //         id: nextTodoId(state),
    //         text: action.payload,
    //         completed: false
    //       }
    //     ]
    //   }

      case 'LOGIN_SUCCESS':{
        return {
          status: true,
          jwt_token: action.payload
        }
      }

      case 'LOGIN_FAILED':{
        return {
          status: false,
          jwt_token: null
        }
      }
      
      default:
        return state
    }
  }