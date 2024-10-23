import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import {Toaster } from 'react-hot-toast';
import {configureStore } from '@reduxjs/toolkit';
import TaskReducer from './store/taskSlice';
import CaseReducer  from './store/caseSlice';

const store=configureStore({
reducer:{
  tr:TaskReducer,
  cr:CaseReducer
}
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Toaster position='top-right'/>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
