import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SignUpLayout from "../components/SignUpLayout";

import { useFetching, useForm } from "../../../hooks";

import { signUp } from "../api";

import { ROUTE_NAMES } from "../../../router/routeNames";

const SignUpContainer = () => {
  const [formValues, handleFormChange, handleReset] = useForm({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
  });

  const navigate = useNavigate();

  const { data, isLoading, error, handleDataLoad } = useFetching(
    signUp,
    null,
    false
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      handleDataLoad(formValues);

      handleReset();
    },
    [formValues, handleDataLoad, handleReset]
  );

  //Перенаправление на login после регистрации
  useEffect(() => {
    if (data?.data.success) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.SIGN_IN);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [data, navigate]);

  return (
    <SignUpLayout
      formValues={formValues}
      data={data}
      error={error}
      isLoading={isLoading}
      handleFormChange={handleFormChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
