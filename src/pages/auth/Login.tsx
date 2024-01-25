import React, { useContext, useEffect, useState } from "react";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext, AuthContextProps } from "../../providers/AuthProvider";

const Login: React.FC = () => {
  const { googleSignIn, signIn } = useContext(AuthContext) as AuthContextProps;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signIn(email, password);
    } catch (error) {
      console.error("Email Sign-In Error:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  // Using handleGoogleSignIn somewhere in the component
  useEffect(() => {
    handleGoogleSignIn();
  }, []);

  return (
    <div className="flex items-center justify-center my-20">
      <div className="flex min-h-full mx-auto max-w-screen-md bg-white rounded-2xl shadow-xl w-full">
        <div className="w-2/3 p-8 text-center">
          <Link to="/">
            <h2 className="font-bold text-left ml-2 text-c-dark mb-6 text-xl">
              Resume<span className="text-c-primary">Craft</span>
            </h2>
          </Link>
          <h2 className="text-2xl text-c-primary font-bold mb-4">
            Sign In to your account
          </h2>

          {/* Social Media Icons */}
          <div className="flex justify-center mb-4">
            <button
              className="bg-red-500 text-white p-4 rounded-full mx-2"
              onClick={handleGoogleSignIn} // Use handleGoogleSignIn on Google button click
            >
              <FaGoogle size={18} />
            </button>
            <button
              className="bg-blue-500 text-white p-4 rounded-full mx-2"
              onClick={() => console.log("LinkedIn clicked")}>
              <FaLinkedin size={18} />
            </button>
            <button
              className="bg-black text-white p-4 rounded-full mx-2"
              onClick={() => console.log("GitHub clicked")}>
              <FaGithub size={18} />
            </button>
          </div>

          <p className="my-4 text-gray-700">
            Or, sign in using your email account.
          </p>

          {/* Sign In Form */}
          <form onSubmit={handleEmailSignIn} className="mx-auto">
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
            <button
              className="bg-blue-500 w-2/4 text-white px-4 py-2 rounded-3xl"
              type="submit">
              Login
            </button>
          </form>
        </div>

        <div className="w-1/3 p-8 rounded-r-2xl bg-c-primary flex flex-col items-center justify-center text-center text-white">
          <p>Please sign up here and start your journey</p>
          <Link to="/sign-up">
            <button className="text-white border border-white rounded-3xl px-4 py-2 mt-4 mb-6">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
