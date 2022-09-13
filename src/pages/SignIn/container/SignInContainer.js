import { useCallback } from "react";
import { useDispatch } from "react-redux";

import SignInLayout from "../components/SignInLayout";

import { auth } from "../reducers";

const SignInContainer = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(() => {
    dispatch(auth());
  }, [dispatch]);

  return <SignInLayout handleSubmit={handleSubmit} />;
};

export default SignInContainer;
