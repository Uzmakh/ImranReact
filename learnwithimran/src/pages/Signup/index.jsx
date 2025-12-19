import { useState } from "react";
import "./index.css";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    success: "",
    loading: false,
  });

  const handleChange = (e) => {
    console.log(user);
    setUser({...user, [e.target.name]: e.target.value });
  };

  const checkValidation = () => {
    if (
      //must match the state property
      user.fullName === "" ||
      user.email === "" ||
      user.password === "" ||
      user.confirmPassword === ""
    ) {
      setUser({ ...user, error: "All fields are required!" });
    } else if (user.password !== user.confirmPassword) {
      setUser({ ...user, error: "Password and Confirm Password don't match!" });
    } else {
      setUser({...user, error: "" });
    }
  };

  const handleSignup = () => {
    checkValidation();
    if (user.error === "") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setUser({...user, loading: true });
    setTimeout(() => {
      setUser({...user, loading: false, success: "Signup successful" });
    }, 5000);
  };
  return (
    <>
      <div className="signup-container">
        <h2>Signup</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={user.fullName}
          onChange={(e) => handleChange(e)}
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={user.confirmPassword}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handleSignup}>Signup</button>

        {user.error && <div className="error">{user.error}</div>}
        {user.success && <div className="success">{user.success}</div>}
        {user.loading && <div className="loading">Loading...</div>}
      </div>
    </>
  );
};

export default Signup;
