export const initialState = {
    user: null,
};


const reducer = (state, action) => {
    switch(action.type){
        case "REGISTER_USER":
            return {
                ...state,
                user: action.user
            }

        case "LOGIN_USER":
            return {
                ...state,
                user: action.user
        }

        case "LOG_OUT":
            return {
                ...state,
                user: action.user
        }
        
        default:
            return state
    }
}

export default reducer
