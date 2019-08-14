import { useState, useEffect } from "react";

const useFormValidation = (formValues, callback, validateSubmit) => {
  const [values, setValues] = useState(formValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(); // Call back function will be called if there are no errors
    }
  }, [errors]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    const errorDetails = validateSubmit(values);
    setErrors(errorDetails);
    console.log("Errors are ", JSON.stringify(errorDetails));
    setIsSubmitting(true);
  };

  const handleInput = event => {
    const key = event.target.name;
    const value = event.target.value;
    delete errors[key];
    setValues({ ...values, [key]: value });
    let errorDetails = {};
    if (key == "confirmPassword") {
      errorDetails = validateSubmit({
        [key]: value,
        ["password"]: values["password"]
      });
    } else {
      errorDetails = validateSubmit({ [key]: value });
    }
    setErrors({ ...errors, ...errorDetails });
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    handleSubmit,
    handleInput
  };
};

export default useFormValidation;
