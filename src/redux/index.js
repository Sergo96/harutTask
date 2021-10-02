import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import { sideBar } from "../components/Layouts/SideBar/SideBar.reducer";
import { mainPage } from "../pages/MainPage/MainPage.reducer";

const rootReducers = combineReducers({
    sideBar,
    mainPage
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))