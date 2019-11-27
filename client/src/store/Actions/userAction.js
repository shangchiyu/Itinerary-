import axios from 'axios';
import { GET_ERRORS,SET_USER } from './type';
//import jwt_decode from 'jwt-decode';
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
            .then(res => { 
                    // dispatch(success());
                    //history.push('/login');
                    // dispatch(alertActions.success('Registration successful'));
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
    console.log(user)
    await axios.post('http://localhost:5000/api/users/login', user)
            .then(res => {
                const { token } = res.data;
              //  localStorage.setItem('jwtToken', token);
               // setAuthToken(token);
                //const decoded = jwt_decode(token);
               // dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const setCurrentUser = decoded=> {
    return {
        type: SET_USER,
        payload: decoded

    }
}