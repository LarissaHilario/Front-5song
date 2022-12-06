import { useReducer } from 'react';

import { axiosInstance } from '../../helpers/axiosInstance';
import authReducer from '../../reducers/authReducer';
import AuthContext from './AuthContext';

const INITIAL_STATE = {
  accessToken: null,
  isAthenticathed: false,
};

const AuthProvider = ({ children }) => {
  const init = initialState => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken === null) return initialState;

    return {
      ...initialState,
      accessToken,
      isAuthenticated: true,
    };
  };

  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE, init);

  const setTokens = accessToken => {
    localStorage.setItem('accessToken', accessToken);
  };

  const deleteToken = () => {
    localStorage.removeItem('accessToken');
  };

  const login = async (username, password) => {
    // eslint-disable-next-line prettier/prettier
    const response = await axiosInstance.post(
      'login/',
      { username, password }
    );

    if (response.status === 201) {
      const { data } = await response;
      const accessToken = data.token;
      setTokens(accessToken);

      const newAuthState = {
        accessToken,
        isAuthenticated: true,
      };

      dispatch({ type: 'authenticated', payload: newAuthState });
    }
    return response.status;
  };

  const logout = () => {
    deleteToken();
    dispatch({
      type: 'logout',
      payload: INITIAL_STATE,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        logout,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
