import React, { useState } from "react";

function SignupScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!username || !email || !password) {
      alert("Please fill all fields");
    } else {
      alert("Signup successful");
    }
  };

  return (
    <div>
      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Sign Up</button>

      <p>Already have an account? Login</p>
    </div>
  );
}

export default SignupScreen;
