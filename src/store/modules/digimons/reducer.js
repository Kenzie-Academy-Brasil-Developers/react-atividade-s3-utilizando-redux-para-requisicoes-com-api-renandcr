import { ADD_DIGIMONS } from "./actionTypes";

const digimonsReducer = (state = [], action) => {
  console.log(action);
  console.log(action.digimon);
  switch (action.type) {
    case ADD_DIGIMONS:
      return action.digimon;
    default:
      return state;
  }
};

export default digimonsReducer;
