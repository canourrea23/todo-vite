import { Link } from "react-router-dom";


export function ForgotPassword() {
  return (
    <div className="ForgotPassword">
      ForgotPassword
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Link to="/login">login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}
