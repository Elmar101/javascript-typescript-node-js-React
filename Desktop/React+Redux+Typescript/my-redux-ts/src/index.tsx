import React, { ReducerState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Action, createStore, combineReducers} from "redux";

const userReducer = (state: string = "User1" , action: Action<string> & { payload: {data: string} }) => {
  return state
};
const productReducer = (state: {name: string}[] = [{name:"IPone 5C"}] , action: Action<string> & { payload: {data: {name: string }[]} }) => {
  return state
};

const rootReducer  = combineReducers({
  user: userReducer,
  products: productReducer
});

const store = createStore(rootReducer);

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
