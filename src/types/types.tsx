export const SEND_MESSAGE = "SEND_MESSAGE";
export const GET_SOCKET = "GET_SOCKET";
export const SET_USERS = "SET_USERS";
export const SET_CHAT_HISTORY = "SET_CHAT_HISTORY"

export interface SystemState {
    users: any,
    chatHistory: any
}

export interface ReduxState {
    systemReducer: SystemState
}