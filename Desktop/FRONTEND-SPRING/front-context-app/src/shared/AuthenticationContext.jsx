import React, { useState } from "react";

const initialState = {
  username: null,
  displayname: null,
  password: null,
  image: null,
  isLoggin: false,
};

export const AuthenticationContext = React.createContext();

const AuthenticationContextProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState(initialState);
  const onLoginSuccess = (authState) => {
    setState({
      ...state,
      username: authState.username,
      displayname: authState.displayname,
      password: authState.password,
      image: authState.image,
      isLoggin: true,
    });
  };

  const onLogoutSuccess = () => {
    setState({ ...state, username: null, isLoggin: false });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        state: { ...state },
        onLoginSuccess: onLoginSuccess,
        onLogoutSuccess: onLogoutSuccess,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
