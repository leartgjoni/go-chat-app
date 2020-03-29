import { SEND_MESSAGE, GET_SOCKET, SystemState } from '../types/types';

const initialState: SystemState = {
   users: [],
   chatHistory: []
}

export function chatReducer(state = initialState, action: {type: any, payload: any}): SystemState{
    switch(action.type){
        case SEND_MESSAGE: {
            return {
                ...state,
                //counter: action.payload
            }
        }
        case GET_SOCKET: {
            return {
                ...state,
                //counter: action.payload
            }
        }
        default:
            return state
    }
}