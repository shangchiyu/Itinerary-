import axios from 'axios';
import { GET_ERRORS,SET_USER,LOGOUT } from './type';
import jwt_decode from 'jwt-decode';

const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['Authorization'] = token;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}


export const registerUser = (user) => async(dispatch) => {
    console.log('user', user)
    await axios.post('http://localhost:5000/api/users', user)
            .then(response => { 
              
               console.log('response', response)
                }
            )
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                   
                    payload: err.response.data
                });
            });
}
export const loginUser = (user) => async(dispatch) => {
    console.log("IN LOGIN USER ",user)
    await axios.post('http://localhost:5000/api/users/login', user)
            .then(res => {
                const { token } = res.data;
              console.log('token', token)
               localStorage.setItem('jwtToken', token);
               setAuthToken(token);
                const decoded = jwt_decode(token);
                console.log('decoded', decoded)
               dispatch(setCurrentUser(decoded));  
            
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err
                });
            });
}

export const setCurrentUser = decoded=> {
    return {
        type: SET_USER,
        payload: decoded

    }
}
export const logoutUser = () => async(dispatch)=> {
    dispatch({
        type: LOGOUT
    });   
    // delete localStorage.setAuthToken
     setAuthToken(false);
    dispatch(setCurrentUser({}));
    localStorage.removeItem('jwtToken')

}