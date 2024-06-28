export default function LoginViewFunctional({
  handleChange,
  formData,
  handleSubmit,
}) {
  const {
    userName = "",
    userEmail = "",
    userPwd = "",
    userType = "",
    address = "",
  } = formData || {};
  function localHandleSubmit(e) {
    //perform local logical operation
    handleSubmit(e);
  }
  return (
    <>
      <input
        type="text"
        name="userName"
        value={userName}
        onChange={handleChange}
        className="input-field"
        placeholder="Username"
      />
      <br />
      <input
        type="text"
        name="userEmail"
        value={userEmail}
        onChange={handleChange}
        className="input-field"
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        name="userPwd"
        value={userPwd}
        onChange={handleChange}
        className="input-field"
        placeholder="Password"
      />
      <br />
      <input
        type="address"
        name="address"
        value={address}
        onChange={handleChange}
        className="input-field"
        placeholder="Address"
      />
      <br />
      <select
        name="userType"
        value={userType}
        onChange={handleChange}
        className="select-field"
      >
        <option value="">Select User Type</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
      <br />
      <button onClick={localHandleSubmit}>Login</button>
    </>
  );
}
