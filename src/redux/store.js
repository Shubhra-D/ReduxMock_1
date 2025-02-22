
import {legacy_createStore as createStore} from 'react-redux'
import { thunk } from 'redux-thunk'
import { rootReducer } from './reducers';
import {composeWithDevTools} from "redux-devtools-extension"


export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);