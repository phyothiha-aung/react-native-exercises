import {MARK_COMPLETED, ADD_ITEM, DELETE_ITEM} from './actionType';

export const markCompleted = item => {
  return {
    type: MARK_COMPLETED,
    payload: item,
  };
};

export const deleteItem = item => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
