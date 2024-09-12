import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/search";



const mergedReducer = combineReducers({
    searchReducer : searchReducer,
});

const store = configureStore({
    reducer: mergedReducer
});

export default store;