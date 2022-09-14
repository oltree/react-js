import styles from "./index.module.scss";

const SignInLayout = ({
  signInFrom,
  handleSubmit,
  handleFormChange,
  handleExitAccount,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign In</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
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

        <button type="submit" className={styles.buttonLogin}>
          Login
        </button>
      </form>

      <button onClick={handleExitAccount} className={styles.buttonExit}>
        exit
      </button>
    </div>
  );
};

export default SignInLayout;
