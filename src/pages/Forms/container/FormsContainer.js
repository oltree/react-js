import { useState } from "react";

import { useForm } from "../../../hooks";

import FormsLayout from "../components/FormsLayout";

const FormsContainer = () => {
  const [loginForm, handleInputChange] = useForm({ email: "", password: "" });
  const [isPasswordVisible, setVisibility] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState("Max");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //Показать/скрыть пароль

  const handleVisibilityChange = () => {
    setVisibility(!isPasswordVisible);
  };

  //Other inputs
  //1-checkbox

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  //2 -radiobuttons

  return (
    <FormsLayout
      loginForm={loginForm}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      isPasswordVisible={isPasswordVisible}
      onVisibilityChange={handleVisibilityChange}
      isChecked={isChecked}
      onCheckboxChange={handleCheckboxChange}
      selectedPerson={selectedPerson}
      setSelectedPerson={setSelectedPerson}
    />
  );
};

export default FormsContainer;

//Логика без hooks
/* const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  }; 

	const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginForm);
  };*/
