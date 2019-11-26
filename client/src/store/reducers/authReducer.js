import { SET_USER } from '../Actions/type';


const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                isAuthenticated: (action.payload),
                user: action.payload
            }
        default: 
            return state;
    }
}
