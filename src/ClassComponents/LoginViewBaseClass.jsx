import React from "react";

export default class LoginViewBaseClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: this.getInitialFormData(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialFormData() {
    // Define dynamic form fields with initial values
    return {
      userName: "",
      userEmail: "",
      // Add more fields as needed
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  }

  renderFields() {}

  handleSubmit(e) {
    e.preventDefault();
    this.onSubmit(this.state.formData);
  }

  onSubmit(data) {
    throw new Error("Please implement this method before submitting the form!");
  }

  render() {
    return (
      <div className="form-container">
        <h1>Login(C)</h1>
        <form onSubmit={this.handleSubmit} className="form-inner-container">
          {this.renderFields()}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    );
  }
}
