import { SEND_MESSAGE, GET_SOCKET } from '../types/types';

export function sendMessage(counter: number){
    return {
        type: SEND_MESSAGE,
        payload: counter + 1
    }
}

export function getSocket(counter: number){
    return {
        type: GET_SOCKET,
        payload: counter - 1
    }
}