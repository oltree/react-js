import { useCallback, useState } from "react";

export const useForm = (inititalData) => {
  const [formData, setFormData] = useState(inititalData);

  const handleFormChange = useCallback((event) => {
    const { value, name } = event.target;

    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleReset = useCallback(() => {
    setFormData(inititalData);
  }, [inititalData]);

  return [formData, handleFormChange, handleReset];
};
