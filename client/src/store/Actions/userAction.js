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
export const decodeToken = (token) =>  {
    console.log('decode action')
    return dispatch => {
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));  
    console.log('decoded', decoded)
    }
}

export const setCurrentUser = decoded=> {
    return {
        type: SET_USER,
        payload: decoded

    }
}
export const logoutUser = () => async(dispatch)=> {
    
    // delete localStorage.setAuthToken
     setAuthToken();
    dispatch({
        type: LOGOUT
    });
    localStorage.removeItem('jwtToken')

}
// if (contains(currentSelection, favorites)) {
//     const newFavorite = reject(equals(currentSelection), favorites);
//     await axios(`http://localhost:5000/deletefavorite?user_id=1&selection_id=${currentSelection}`);
//     dispatch({
//         type: SET_FAVORITE,
//         payload: newFavorite
//     });
// } else {
//     const newFavorite = append(currentSelection, favorites)
//     await axios(`http://localhost:5000/addfavorite?user_id=1&selection_id=${currentSelection}`);
//     dispatch({
//         type: SET_FAVORITE,
//         payload: newFavorite
//     });
// }