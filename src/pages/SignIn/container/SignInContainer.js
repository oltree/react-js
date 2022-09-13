import { useCallback } from "react";
import { useDispatch } from "react-redux";

import SignInLayout from "../components/SignInLayout";

import { useForm } from "../../../hooks";

import { auth } from "../reducers";

const SignInContainer = () => {
  const dispatch = useDispatch();

  const [signInFrom, handleFormChange, handleReset] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      dispatch(auth(signInFrom));

      handleReset();
    },
    [dispatch, signInFrom, handleReset]
  );

  return (
    <SignInLayout
      signInFrom={signInFrom}
      handleSubmit={handleSubmit}
      handleFormChange={handleFormChange}
    />
  );
};

export default SignInContainer;
