import React from 'react';
import { Redirect } from 'umi'

const AuthWrapper: React.FC = (props) => {
  // const { isLogin } = useAuth();
  const isLogin = window.localStorage.getItem('login');

  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}

export default AuthWrapper;
