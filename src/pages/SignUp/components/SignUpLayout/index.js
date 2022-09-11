import startCase from "lodash/startCase";

import styles from "./index.module.scss";

const SignUpLayout = ({
  formValues,
  data,
  error,
  handleFormChange,
  handleSubmit,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign Up</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        {Object.entries(formValues).map(([fieldName, value]) => {
          return (
            <input
              key={fieldName}
              type="text"
              value={value}
              name={fieldName}
              onChange={handleFormChange}
              placeholder={`${startCase(fieldName)}...`}
              className={styles.input}
            />
          );
        })}

        <button type="submit" className={styles.button}>
          Create Account
        </button>

        <p className={styles.message}>{data?.data.message}</p>
        <p className={styles.error}>{error?.message}</p>
      </form>
    </div>
  );
};

export default SignUpLayout;
