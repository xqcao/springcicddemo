import * as types from "./todo-type";

export const add_todo = (x) => {
  return {
    payload: x,
    type: types.ADD_TODO,
  };
};

export const remove_todo = (x) => {
  return {
    payload: x,
    type: types.REMOVE_TODO,
  };
};

export const update_todo = (x) => {
  return {
    payload: x,
    type: types.UPDATE_TODO,
  };
};
