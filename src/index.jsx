import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

/** TODO: import REDUX **/


/** TODO: Add REDUCERS */

const planeList = (state = [], action) => {
    console.log("Plane list reducer activated!", action);
    if (action.type === "ADD_PLANE") {
      console.log(`The plane was ${action.payload}`);
      return [...state, action.payload]
    }
    return state
  }

/** TODO: Create store */

const storeInstance = createStore(
    // combineReducer is needed if you have multiple reducers
    combineReducers({
        planeList,
    }),
  )

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);