import React, { useState } from "react";
import Button from "../../components/common/Button";
import InputText from "../../components/common/InputText";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";
import useTitleSet from "../../hooks/useTitleSet";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

const NewPassword: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useTitleSet("New Password");
  const handleForget = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        text: "Password Not Match",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/auth/v1/password/new`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          token: id,
        }),
      });
      const data = await response.json();
      if (!data.success) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          text: data.message,
          showConfirmButton: false,
          timer: 1000,
        });
      }
      if (data.success) {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Login Your Account",
          text: data.message,
          confirmButtonText: "Login",
          confirmButtonColor: "#3B82F6",
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/auth/login");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleForget} className="mx-auto ">
      <div className="mb-4">
        <InputText
          required
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <InputText
          type="password"
          required
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className=" flex justify-center items-center w-full">
        <Button disabled={loading} icon={false}>
          <div className=" flex justify-start items-center gap-1">
            Send
            {loading && <BiLoaderAlt className="animate-spin text-xl" />}
          </div>
        </Button>
      </div>
    </form>
  );
};

export default NewPassword;
