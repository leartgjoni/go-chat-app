export const SEND_MESSAGE = "SEND_MESSAGE";
export const GET_SOCKET = "GET_SOCKET";

export interface SystemState {
    users: any,
    chatHistory: any
}

export interface ReduxState {
    systemReducer: SystemState
}