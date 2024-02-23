import React, { useState } from "react";
import Button from "../../components/common/Button";
import InputText from "../../components/common/InputText";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";
import useTitleSet from "../../hooks/useTitleSet";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

const ActiveAccount: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("activationToken");
  useTitleSet("Active Account");

  const handleActive = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Create Your Account",
        confirmButtonText: "Create Account",
        confirmButtonColor: "#3B82F6",
      }).then((res) => {
        if (res.isConfirmed) {
          localStorage.setItem("activationToken", "");
          navigate("/auth/sign-up");
        }
      });
      return;
    }
    if (!code) {
      Swal.fire({
        icon: "error",
        text: "Add Active Code Check Your Email!",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/auth/v1/activate`, {
        method: "POST",
        credentials: "include",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activateToken: JSON.parse(token),
          activateCode: code,
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
        setCode("");
        Swal.fire({
          title: "Login Your Account!",
          text: "Your Account Successfully Active!",
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
    <form onSubmit={handleActive} className="mx-auto ">
      <div className="mb-4">
        <InputText
          type="code"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div className=" flex justify-center items-center w-full">
        <Button disabled={loading} icon={false}>
          <div className=" flex justify-start items-center gap-1">
            ActiveAccount
            {loading && <BiLoaderAlt className="animate-spin text-xl" />}
          </div>
        </Button>
      </div>
    </form>
  );
};

export default ActiveAccount;
