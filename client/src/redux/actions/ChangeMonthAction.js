export const prevMonth = () => async (dispatch) => {
  const data = 5
 console.log("asdas")
  dispatch({ type: "PREV_MONTH", data });
 
};

export const nextMonth = () => {
  return { 
    type: "NEXT_MONTH",
  };
};
