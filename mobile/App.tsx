import AppNavigation from './navigation/appNavigation';
import LoginContext from './context/loginContext';
import SigninContext from './context/signinContext';

const App = () => {
  return (
    <AppNavigation />
  );
}

export default () => {
  return (
    <SigninContext>
      <LoginContext>
        <App />
      </LoginContext>
    </SigninContext>
  )
}


