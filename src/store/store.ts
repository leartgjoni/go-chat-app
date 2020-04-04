import { createStore, combineReducers } from "redux";
import { chatReducer } from "../reducers/chatReducer";

const reducer = combineReducers({ chatReducer });


export default function configureStore(){
    const store = createStore(reducer);
    return store;
}