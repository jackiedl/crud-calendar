import initialState from "../initialState";

function previousMonth(month){
  return month - 1
}
function nextMonth(month){
  return month + 1
}

const changeMonthReducer = (state = initialState, action) => {
  
  const { type, payload } = action;
  switch (action.type) {    

    case "PREV_MONTH":
      console.log(payload)
      
      return {
        ...state,
          month: nextMonth(state.month)
        
      };   

      case "NEXT_MONTH":
        return {
          ...state,
            month: nextMonth(state.month)
          
        };    

    default:    
      return state;
  }
}

export default changeMonthReducer