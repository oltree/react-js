import { useCallback } from "react";

import SignUpLayout from "../components/SignUpLayout";

import { useFetching, useForm } from "../../../hooks";

import { signUp } from "../api";

const SignUpContainer = () => {
  const [formValues, handleFormChange, handleReset] = useForm({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
  });

  const { data, error, handleDataLoad } = useFetching(
    () => signUp(formValues),
    null,
    false
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      handleDataLoad();

      handleReset();
    },
    [handleDataLoad, handleReset]
  );

  return (
    <SignUpLayout
      formValues={formValues}
      data={data}
      error={error}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
