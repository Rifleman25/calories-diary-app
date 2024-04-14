import * as ActionTypes from './ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

export const dictReducer = createReducer({eatingTypes:[], foodTypes:[], isModalOpen: false}, (builder) => {
    builder
      .addCase(ActionTypes.LOADED_EATING_TYPE_DICT, (state, action) => {
        return {...state, eatingTypes: action.payload};
      })
      .addCase(ActionTypes.LOADED_FOOD_TYPE_DICT, (state, action) => {
        return {...state, foodTypes: action.payload};
      })
      .addCase(ActionTypes.ADD_EATING_TYPE, (state, action) => {
        state.eatingTypes.push(action.payload);
      })
      .addCase(ActionTypes.ADD_FOOD_TYPE, (state, action) => {
        state.foodTypes.push(action.payload);
      })
      .addCase(ActionTypes.DICT_ADDING_BEGIN, (state, action) => {
        state.isModalOpen = true;
      })
      .addCase(ActionTypes.DICT_ADDING_CANCEL, (state, action) => {
        state.isModalOpen = false;
      });
  });