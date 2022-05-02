import React, { ReducerState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Action, createStore} from "redux";

const reducer = (state: string = "State" , action: Action<string> & { payload: {data: any} }) => {
  if(action.type === "new state"){
    return action.payload.data
  }
  return state
};
const store = createStore(reducer);

const newState: Action<string> & { payload: {data: any} } = {
  type: "new state",
  payload: {data: "New State"}
}

store.dispatch(newState);

console.log(store.getState());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
