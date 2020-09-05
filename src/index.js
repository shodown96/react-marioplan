// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from './store/reducers/rootReducer'
// import { Provider } from "react-redux";
// import thunk from 'redux-thunk'
// import { reduxFirestore, getFirestore } from 'redux-firestore'
// // import { getFirebase, reactReduxFirebase } from  'react-redux-firebase'
// import { getFirebase } from  'react-redux-firebase'
// import firebaseConfig from './config/fbConfig'
// import firebase from 'firebase/app/'

// import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
// import { createFirestoreInstance } from 'redux-firestore' // <- needed if using firestore


  
// // Create store with reducers and initial state
// //   const initialState = {}
// //   const store = createStore(rootReducer, initialState)


// const store =  createStore( rootReducer, 
//     compose(
//         applyMiddleware( thunk.withExtraArgument({getFirebase,getFirestore}) ),
//         reduxFirestore(firebase,firebaseConfig),
//         // reactReduxFirebase(firebaseConfig)
//     ) 
// ); 

// // react-redux-firebase config
// const rrfConfig = {
//     userProfile: 'users',
//     useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// }
  
// const rrfProps = {
//     firebase,
//     config: rrfConfig,
//     dispatch: store.dispatch,
//     createFirestoreInstance // <- needed if using firestore
// }

// ReactDOM.render(<Provider store={store}> <ReactReduxFirebaseProvider {...rrfProps}> <App /> </ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));
// registerServiceWorker();

//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


import {createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app'
import fbConfig from './config/fbConfig'

import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return (
      <div className="container">
        <br/>
        <h3 className="text-center mt-5">
            Splash screen
        </h3>
      </div>
  );
  return children
}

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase,fbConfig)
    )
);


const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
    // attachAuthIsReady: true
    // enableRedirectHandling: false,
    // resetBeforeLogin: false
    // the state.firebase.profile only works for users created with ur form.
  }

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
}


ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded><App /></AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();