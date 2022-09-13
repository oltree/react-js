const SignInLayout = ({ signInFrom, handleSubmit, handleFormChange }) => {
  return (
    <div>
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={signInFrom.email}
          placeholder="email..."
          onChange={handleFormChange}
        />
        <input
          type="password"
          name="password"
          value={signInFrom.password}
          placeholder="password..."
          onChange={handleFormChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignInLayout;
