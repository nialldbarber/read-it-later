import { useState, FormEvent, SyntheticEvent } from 'react';

const useForm = (callback: () => void, initialState = {}) => {
  const [values, setValues] = useState<any>(initialState);

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    callback();
    setValues(initialState);
  };

  const resetValues = () => setValues(initialState);

  return {
    values,
    handleChange,
    handleSubmit,
    resetValues,
  };
};

export default useForm;
