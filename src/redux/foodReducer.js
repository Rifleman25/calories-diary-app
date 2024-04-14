import * as ActionTypes from './ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

export const foodReducer = createReducer({food:[], isModalOpen: false}, (builder) => {
    builder
      .addCase(ActionTypes.ADD_FOOD, (state, action) => {
        state.food.push(action.payload);
      })
      .addCase(ActionTypes.EDIT_FOOD, (state, action) => {
        return {...state, food: action.payload};
      })
      .addCase(ActionTypes.DELETE_FOOD, (state, action) => {
        return {...state, food: state.food.filter(
          (food, i) => {return food.id !== action.payload}
        )};
      })
      .addCase(ActionTypes.BEGIN_ADD_NEW_FOOD, (state, action) => {
        state.isModalOpen = true;
      })
      .addCase(ActionTypes.CANCEL_ADD_NEW_FOOD, (state, action) => {
        state.isModalOpen = false;
      });
  });