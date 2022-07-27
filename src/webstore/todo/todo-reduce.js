import * as types from "./todo-type";

const initState = [
  { name: "shopping", detail: "walmart shopping", id: "001" },
  { name: "running", detail: "gam  running", id: "002" },
];

const reduce = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.payload];
    case types.REMOVE_TODO:
      return state.filter((x) => x.id !== action.payload);
    case types.UPDATE_TODO:
      return state.map((x) => {
        if (x.id === action.payload.id) {
          x.detail = action.payload.detail;
          x.name = action.payload.name;
        }
        return x;
      });
    default:
      return state;
  }
};

export default reduce;
