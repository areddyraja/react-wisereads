import React from "react";
/**
 * This is component is used to print the error messages in validation forms
 * @param {*} props Data that we pass to this component
 */
const ErrorMessage = props => {
  return (
    <div>
      <p className="error-message">{props.message}</p>
    </div>
  );
};
export default ErrorMessage;
