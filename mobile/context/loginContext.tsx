import React, { createContext, useState } from 'react';
import { loginValue, childProp } from '../types/contextTypes';

export const LoginProvider = createContext({} as loginValue)
 
const LoginContext = ({children}: childProp) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginIn = () => {
  }


  return (
    <LoginProvider.Provider value={{ email, setEmail, password, setPassword, loading, setLoading, handleLoginIn }}>
      {children}
    </LoginProvider.Provider>
  );
}

 
export default LoginContext;