import React, { useState } from "react";
import Button from "../../components/common/Button";
import InputText from "../../components/common/InputText";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleForget = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleForget} className="mx-auto ">
      <div className="mb-4">
        <InputText
          type="email"
          placeholder="example@gmail.com.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default ForgotPassword;
