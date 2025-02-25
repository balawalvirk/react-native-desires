import { USER, } from '../types/index'


export const set_user = payload => {
    return {
        type: USER,
        payload: payload
    }
}


