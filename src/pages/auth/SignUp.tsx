import { useState } from "react";
import Button from "../../components/common/Button";
import InputText from "../../components/common/InputText";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const baseUrl = import.meta.env.VITE_BASE_URL_API;
import { BiLoaderAlt } from "react-icons/bi";

interface InitialState {
  name: string;
  email: string;
  password: string;
}

const initialState = {
  name: "",
  email: "",
  password: "",
};
const SignUp: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<InitialState>(initialState);
  const { name, email, password } = state;
  const navigate = useNavigate();
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/auth/v1/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
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
      if (data.success && data.activationToken) {
        setState(initialState);
        setLoading(false);
        localStorage.setItem(
          "activationToken",
          JSON.stringify(data.activationToken)
        );
        Swal.fire({
          title: "Active Your Account!",
          text: data.message,
          confirmButtonText: "Active",
          confirmButtonColor: "#3B82F6",
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/auth/active");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="mx-auto">
      <div className="mb-4">
        <InputText
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setState((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <div className="mb-4">
        <InputText
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setState((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <div className="mb-4">
        <InputText
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setState((prev) => ({ ...prev, password: e.target.value }))
          }
        />
      </div>

      <div className=" flex justify-center items-center w-full">
        <Button disabled={loading} icon={false}>
          <div className=" flex justify-start items-center gap-1">
            Sign Up
            {loading && <BiLoaderAlt className="animate-spin text-xl" />}
          </div>
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
