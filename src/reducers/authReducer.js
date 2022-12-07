const authReducer = (state, action) => {
    switch (action.type) {
      case 'authenticated':
        return {
          ...action.payload,
        };
      case 'logout':
        return {
          ...action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  