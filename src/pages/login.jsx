import React from "react";
import useAuth from "../../hooks/useAuth";

import Home from ".";
import Dashboard from "@/components/Portal/Dashboard";

const Login = () => {
  const { user, signinGoogle, signinGitHub, signout } = useAuth();

  return (
    <div>
      <h1>Faça o login</h1>
      <button onClick={signinGoogle}>google</button>
      <button onClick={signinGitHub}>github</button>
      <button onClick={signout}>logout</button>
      {user && <Dashboard />}
      {!user && <Home />}
    </div>
  );
};

export default Login;
