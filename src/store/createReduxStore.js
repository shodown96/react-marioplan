import { createStore, compose, applyMiddleware } from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { getFirebase} from 'react-redux-firebase';
import fbConfig from '../fbConfig'  

// Middleware Configuration
const middleware = [
  thunk.withExtraArgument({ getFirestore }),
  // This is where you add other middleware 
];

const initialState = {}

const store = () => createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    reduxFirestore(fbConfig),
  ),
);

export default store