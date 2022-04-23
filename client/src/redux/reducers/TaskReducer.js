import * as types from "../types/TaskActionTypes";

export const TaskReducer = (state = [], action) => {
  const { type, payload } = action;

  switch(type){
    case types.FETCH_TASK:
      return payload;

      case types.CREATE_TASK:
        return [...state, action.payload]
    default: 
      return state;
  }
}
