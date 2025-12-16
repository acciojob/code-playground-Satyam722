import React from "react";

const Login = ({ isAuthenticated, onLogin }) => {
  return (
    <div>
      <h2>Login</h2>
      {isAuthenticated ? (
        <p>Logged in, Now you can enter Playground</p>
      ) : (
        <p>You are not authenticated, Please login first</p>
      )}
      <button onClick={onLogin}>
        {isAuthenticated ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default Login;
