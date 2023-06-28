import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="login-container" style={{ maxWidth: 500 }}>
      login
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Link to="/forgotpassword">Forgot password</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}
/*
 <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("submitting");
        }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input className="email" type="text"></input>
        <input className="password" type="text"></input>
        <input className="submit" type="submit"></input>
      </form>



*/
