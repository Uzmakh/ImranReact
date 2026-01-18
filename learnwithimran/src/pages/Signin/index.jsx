import { useState } from "react";
import "./index.css";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
    loading: false,
  });

  const handleChange = (e) => {
    console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const checkValidation = () => {
    if (
      //must match the state property
      user.email === "" ||
      user.password === ""
    ) {
      setUser({ ...user, error: "All fields are required!" });
    } else if (user.password.length < 0) {
      setUser({
        ...user,
        error: "Password must be at least 8 characters long.",
      });
    } else {
      setUser({ ...user, error: "" });
    }
  };

  const handleSignin = () => {
    checkValidation();
    if (user.error === "") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setUser({ ...user, loading: true });
    setTimeout(() => {
      setUser({ ...user, loading: false, success: "Signup successful" });
    }, 5000);
  };
  return (
    <>
      <div className="signin-container">
        <h2>Sign In</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />

        <button onClick={handleSignin}>Signin</button>

        {user.error && <div className="error">{user.error}</div>}
        {user.success && <div className="success">{user.success}</div>}
        {user.loading && <div className="loading">Loading...</div>}
      </div>
    </>
  );
};

export default Signin;
