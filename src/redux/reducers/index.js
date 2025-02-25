import { USER } from '../types/index'
const intialState = {
    user_redux: '',
}
const reducer = (state = intialState, action) => {
    switch (action.type) {

        case USER: {
            return {
                ...state,
                user_redux: action.payload,
            }
        }
        default:
            return state
    }
}
export default reducer;