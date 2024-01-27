import React, { useContext, useState } from "react";
import { AuthContext, AuthContextProps } from "../../providers/AuthProvider";
import Button from "../../components/common/Button";

const Login: React.FC = () => {
  const { signIn } = useContext(AuthContext) as AuthContextProps;
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

  return (
    <form onSubmit={handleEmailSignIn} className="mx-auto ">
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
      <div className=" flex justify-center items-center w-full">
        <Button icon={false}>Login</Button>
      </div>
    </form>
  );
};

export default Login;
