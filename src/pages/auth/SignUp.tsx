import React, { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../../components/common/Button";

const SignUp: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    try {
      await authContext?.createUser(email, password);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="mx-auto">
      <div className="mb-4">
        <input
          className="w-3/4 mx-auto px-3 py-2 border rounded-md"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="w-3/4 mx-auto px-3 py-2 border rounded-md"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="w-3/4 mx-auto px-3 py-2 border rounded-md"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          className="w-3/4 mx-auto px-3 py-2 border rounded-md"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className=" flex justify-center items-center w-full">
        <Button icon={false}>Sign Up</Button>
      </div>
    </form>
  );
};

export default SignUp;
