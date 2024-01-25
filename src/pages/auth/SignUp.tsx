import React, { useState } from "react";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Clear input fields after sign up
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex items-center justify-center my-20">
      <div className="flex min-h-full mx-auto max-w-screen-md bg-white rounded-2xl shadow-xl w-full">
        <div className="w-2/3 p-8 text-center">
          <h2 className="font-bold text-left ml-2 text-c-dark mb-6 text-xl">
            Resume<span className="text-c-primary">Craft</span>
          </h2>
          <h2 className="text-2xl text-c-primary font-bold mb-4">Sign Up for an account</h2>

          {/* Social Media Icons */}
          <div className="flex justify-center mb-4">
            <button
              className="bg-red-500 text-white p-4 rounded-full mx-2"
              onClick={() => console.log("Google clicked")}
            >
              <FaGoogle size={18} />
            </button>
            <button
              className="bg-blue-500 text-white p-4 rounded-full mx-2"
              onClick={() => console.log("LinkedIn clicked")}
            >
              <FaLinkedin size={18} />
            </button>
            <button
              className="bg-black text-white p-4 rounded-full mx-2"
              onClick={() => console.log("GitHub clicked")}
            >
              <FaGithub size={18} />
            </button>
          </div>

          <p className="my-4 text-gray-700">Or, sign up using your email account.</p>

          {/* Sign Up Form */}
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
            <button
              className="bg-blue-500 w-2/4 text-white px-4 py-2 rounded-3xl"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="w-1/3 p-8 rounded-r-2xl bg-c-primary flex flex-col items-center justify-center text-center text-white">
          <p>Already have an account?</p>
          <Link to="/login">
            <button className="text-white border border-white rounded-3xl px-4 py-2 mt-4 mb-6">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
