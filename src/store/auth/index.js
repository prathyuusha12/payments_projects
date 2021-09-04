import { REDUCER_CONSTANTS } from "../constants"
const initialState = {
    profile: {},
    isLoggedIn: false,
}
export const Auth = (state = initialState, action) => {
    switch (action.type) {
        case REDUCER_CONSTANTS.LOGIN:
            const check = validateLogin(action.data);
            if (check) {
                return { ...state, isLoggedIn: true, profile: action.data }
            }
            else {
                return { ...state, ...initialState };
            }
        case REDUCER_CONSTANTS.LOGOUT:
            return { ...state, ...initialState };
        default:
            return { ...state }
    }
}
const validateLogin = (user) => {
    console.log(user);
    return (user.username == 'usha' && user.password == '1234');
}