export const deleteToken = () => {
    localStorage.removeItem('accessToken');
  };
  
  export const setTokens = accessToken => {
    localStorage.setItem('accessToken', accessToken);
  };
  