import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from './components/StateProvider';
import reducer , {initalState} from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      {/* Passing the "reducer function and intital state" to StateProvider so that every component can access useReducer() function */}
      <StateProvider reducer={reducer} initalState={initalState} > 
        <App />
      </StateProvider>
    </React.StrictMode>
);
reportWebVitals(); 
