import { useState } from "react";

export default function withLoginView(LoginView) {
  const EnhancedFunction = ({ props, initialState, formName }) => {
    const [formData, setFormData] = useState(initialState);

    function handleSubmit(e) {
      e.preventDefault();
      console.log("formData", formData);
    }

    function handleChange(e) {
      const { name, value } = e.target;
      setFormData((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }

    return (
      <div className="form-container">
        <h1>{formName}</h1>
        <div className="form-inner-container">
          <LoginView
            {...props}
            handleChange={handleChange}
            formData={formData}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    );
  };
  return EnhancedFunction;
}
