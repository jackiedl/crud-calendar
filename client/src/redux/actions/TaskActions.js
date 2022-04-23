import * as api from "../../api";
import * as types from "../types/TaskActionTypes";

export const getTasks = () => async (dispatch) => {

  try {
    const { data } = await api.fetchTasks();
    dispatch({ type: types.FETCH_TASK, payload: data });

  } catch (error) {
    console.log(error);
  }
}

export const createTask = (task) => async (dispatch) => {
  try{
    const { data } = await api.createTask(task);
    dispatch({ type: types.CREATE_TASK, payload: data})
  }catch(error){
    console.log(error);
  }
}