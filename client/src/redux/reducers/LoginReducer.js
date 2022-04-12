import initialState from "../initialState";

const loginReducer = (state = initialState.login , action) => {
  switch (action.type) {    

    case "LOGIN":
      return {
        ...state,
        isLogin: true
        
      };   

      case "LOGOUT":
        return {
          ...state,
          isLogin: false
          
        };   

    default:    
      return state;
  }
}

export default loginReducer