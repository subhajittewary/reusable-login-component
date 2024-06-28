import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginExtendedView from "./ClassComponents/LoginExtendedView.jsx";
import LoginApp from "./FunctonalComponents/LoginApp.jsx";

function App() {
  return (
    <div className="">
      <Router>
        <div className="link-container">
          <Link to="/class-component" className="link">
            Class Login
          </Link>
          <Link to="/functional-component" className="link">
            Functional Login
          </Link>
        </div>
        <Routes>
          <Route path="/class-component" element={<LoginExtendedView />} />
          <Route path="/functional-component" element={<LoginApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
