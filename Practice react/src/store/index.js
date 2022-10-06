import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {filmReducer} from "./reducers/FilmReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    films: filmReducer,

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));