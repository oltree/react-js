import styles from "./index.module.scss";

const FormsLayout = ({
  loginForm,
  onInputChange,
  onSubmit,
  isPasswordVisible,
  onVisibilityChange,
  isChecked,
  onCheckboxChange,
  selectedPerson,
  setSelectedPerson,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Hello Forms!</h1>

      {/* <input
        className={styles.input}
        onChange={onInputChange}
        value={inputValue}
        type="text"
      />
      <button className={styles.button} onClick={() => console.log(inputValue)}>
        Log Values
      </button> */}

      <form className={styles.form} onSubmit={onSubmit}>
        <p className={styles.text}>
          Email:{" "}
          <input
            className={styles.input}
            onChange={onInputChange}
            value={loginForm.email}
            type="email"
            name="email"
          />
        </p>

        <p className={styles.text}>
          Password:{" "}
          <input
            className={styles.input}
            onChange={onInputChange}
            value={loginForm.password}
            type={isPasswordVisible ? "text" : "password"}
            name="password"
          />
          <button className={styles.button} onClick={onVisibilityChange}>
            Show Password
          </button>
        </p>

        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>

      <h2 className={styles.subtitle}>Other inputs:</h2>

      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxChange}
        />
      </div>

      <div>
        <label>
          <p>Max</p>
          <input
            type="radio"
            checked={selectedPerson === "Max"}
            onChange={() => setSelectedPerson("Max")}
          />
        </label>
        <label>
          <p>Petr</p>
          <input
            type="radio"
            checked={selectedPerson === "Petr"}
            onChange={() => setSelectedPerson("Petr")}
          />
        </label>
      </div>
    </div>
  );
};

export default FormsLayout;
