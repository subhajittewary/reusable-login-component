import LoginViewBaseClass from "./LoginViewBaseClass.jsx";

export default class LoginExtendedView extends LoginViewBaseClass {
    constructor(){
        super();
        this.state.formData.userPwd = "";   // New field
        this.state.formData.userType = "";
    }
    renderFields() {
      console.log(this.state);
      return (
        <>
        <input
          type="text"
          name="userName"
          onChange={this.handleChange}
          value={this.state.userName}
          className="input-field"
          placeholder="Username"
        />
        <br />
        <input
          type="text"
          name="userEmail"
          onChange={this.handleChange}
          value={this.state.userEmail}
          className="input-field"
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="userPwd"
          onChange={this.handleChange}
          value={this.state.userPwd}
          className="input-field"
          placeholder="Password"
        />
        <br />
        <select
          name="userType"
          onChange={this.handleChange}
          value={this.state.userType}
          className="select-field"
        >
          <option value="">Select User Type</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
        <br />
      </>
         );
    }
  
    onSubmit(data) {
      // e.preventDefault();
      console.log("this.state", data);
      return;
    }
  }