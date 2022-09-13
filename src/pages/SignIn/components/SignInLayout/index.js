const SignInLayout = ({ handleSubmit }) => {
  return (
    <div>
      <h1>Sign In</h1>

      <input type="email" placeholder="email..." />
      <input type="password" placeholder="password..." />

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default SignInLayout;
