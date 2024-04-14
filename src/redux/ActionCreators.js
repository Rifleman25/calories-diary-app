import * as ActionTypes from './ActionTypes';
import { createAction } from '@reduxjs/toolkit';
//import { baseUrl } from '../shared/baseUrl';

import { EatingTypes, FoodTypes } from '../Const/Dicts';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const addFood = createAction(ActionTypes.ADD_FOOD);
export const editFood = createAction(ActionTypes.EDIT_FOOD);
export const deleteFood = createAction(ActionTypes.DELETE_FOOD);
export const loadedFood = createAction(ActionTypes.LOADED_FOOD);
export const failLoadedFood = createAction(ActionTypes.FAIL_LOADED_FOOD);
export const beginAddNewFood = createAction(ActionTypes.BEGIN_ADD_NEW_FOOD);
export const cancelAddNewFood = createAction(ActionTypes.CANCEL_ADD_NEW_FOOD);

export const loadedEatingTypeDict = createAction(ActionTypes.LOADED_EATING_TYPE_DICT);
export const loadedFoodTypeDict = createAction(ActionTypes.LOADED_FOOD_TYPE_DICT);
export const failLoadedEatingTypeDict = createAction(ActionTypes.FIAL_LOADED_EATING_TYPE_DICT);
export const failLoadedFoodTypeDict = createAction(ActionTypes.FIAL_LOADED_FOOD_TYPE_DICT);
export const addEatingType = createAction(ActionTypes.ADD_EATING_TYPE);
export const addFoodType = createAction(ActionTypes.ADD_FOOD_TYPE);
export const dictAddingBegin = createAction(ActionTypes.DICT_ADDING_BEGIN);
export const dictAddingCancel = createAction(ActionTypes.DICT_ADDING_CANCEL);

export const postFood = (food) => (dispatch) => {
    dispatch(addFood(food));
    /*return fetch(baseUrl + 'food/add', {
        method: "POST",
        body: JSON.stringify(food),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addFood(response)))
    .catch(error =>  {});*/
};

export const fetchFood = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'food/filter')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(food => dispatch(loadedFood(food)))
    .catch(error => dispatch(failLoadedFood(error.message)));
}

export const loadEatingTypeDict = () => (dispatch) => {
    return dispatch(loadedEatingTypeDict(EatingTypes));
    /*return fetch(baseUrl + 'eaitng/type/filter')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(types => dispatch(loadedEatingTypeDict(types)))
    .catch(error => dispatch(failLoadedEatingTypeDict(error.message)));*/
}

export const loadFoodTypeDict = () => (dispatch) => {
    return dispatch(loadedFoodTypeDict(FoodTypes));
    /*return fetch(baseUrl + 'food/type/filter')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(types => dispatch(loadedFoodTypeDict(types)))
    .catch(error => dispatch(failLoadedFoodTypeDict(error.message)));*/
}