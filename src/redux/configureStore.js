import {combineReducers, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { foodReducer } from './foodReducer';
import { dictReducer } from './dictReducer';

export const ConfigureStore = () => {
    const store = configureStore({
        reducer: {
            food: foodReducer,
            dict: dictReducer
        }}
    );

    return store;
}