
function Login() {
  const login = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div>
      <button onClick={login}>Login with Google</button>
    </div>
  );
}

export default Login;
