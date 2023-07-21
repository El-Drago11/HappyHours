import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import {StateProvider} from './components/StateProvider';
import reducer , {initalState} from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Auth0Provider domain="dev-oldde7024exuaje6.us.auth0.com" clientId="MkrzkbtusDs5zeKH1mqoDt273FbotV77"authorizationParams={{redirect_uri: window.location.origin}}>
      {/* Passing the "reducer function and intital state" to StateProvider so that every component can access useReducer() function */}
      <StateProvider reducer={reducer} initalState={initalState} > 
        <App />
      </StateProvider>
    </Auth0Provider>
    </React.StrictMode>
);
reportWebVitals(); 
