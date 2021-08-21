import axios from 'axios'

export function loginRequest(email, password) {
    console.log({'email' : email, 'password': password})
    return async function loginRequestThunk(dispatch, getState) {
        console.log("try")
        let response = await axios.post('http://192.168.1.73:5000/api/auth/login', {'email' : email, 'password': password}).catch((error)=>{throw error})


        if(response["status"] == 200){
            dispatch({type : "LOGIN_SUCCESS", payload: response["data"]["jwt_token"]})
            console.log("success")
        }

        else if(response["status"] == 250) {
            console.log("else block activated")
            dispatch({type : 'LOGIN_FAILED'})
            console.log("fail")
        }

        else {
            console.log("failed fully")
        }
        

        
    }
}

