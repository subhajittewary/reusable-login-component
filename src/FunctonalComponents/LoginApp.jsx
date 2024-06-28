import LoginViewFunctional from "./LoginViewFunctional";
import withLoginView from "./withLoginView";

const formName = "Login(F)";
const initialFormState = {
  userName: "defaultUser",
  userEmail: "user@example.com",
  userPwd: "",
  userType: "",
  address: "",
};

// @TODO:HOC can be implemented to adapt to any form, not only login
const ExtendedFunctionalLoginView = withLoginView(LoginViewFunctional);
export default function LoginApp() {
  return (
    <ExtendedFunctionalLoginView
      initialState={initialFormState}
      formName={formName}
    />
  );
}
