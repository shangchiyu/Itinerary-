import { SET_USER ,LOGOUT} from '../Actions/type';


const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
            case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user:{}
            }
        default: 
            return state;
    }
}
