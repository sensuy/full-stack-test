import React, { createContext, useState } from 'react';
import { childProp, signinValue } from '../types/contextTypes';
import { createNewUser } from '../api/auth';


export const SigninProvider = createContext({} as signinValue)

const SigninContext = ({ children }: childProp) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    const userPayload = {
      email: email,
      password: password,
      username: "test",
    }

    setLoading(true);
    try {
      const result = await createNewUser(userPayload)

    } catch (error: any) {
      console.log('error', JSON.stringify(error));


    }



  }

  return (
    <SigninProvider.Provider value={{ email, setEmail, password, setPassword, loading, setLoading, handleSignIn }}>
      {children}
    </SigninProvider.Provider>
  );
}


export default SigninContext;