import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className="Signup">
      Signup
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Link to="/forgotpassword">Forgot password</Link>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
}
