import React, { useState } from "react";
import Button from "../../components/common/Button";
import InputText from "../../components/common/InputText";
import { useNavigate } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setUser } from "../../services/auth/authSlice";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/auth/v1/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!data.success) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          text: data.message,
          showConfirmButton: false,
        });
        return;
      }
      if (data.success) {
        setLoading(false);
        console.log(data);
        dispatch(setUser({ user: data.user, accessToken: data.accessToken }));
        navigate("/dashboard");
        Swal.fire({
          icon: "success",
          text: "Login Successfully !",
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleEmailSignIn} className="mx-auto ">
      <div className="mb-4">
        <InputText
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <InputText
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className=" flex justify-center items-center w-full">
        <Button disabled={loading} icon={false}>
          <div className=" flex justify-start items-center gap-1">
            Login
            {loading && <BiLoaderAlt className="animate-spin text-xl" />}
          </div>
        </Button>
      </div>
    </form>
  );
};

export default Login;
