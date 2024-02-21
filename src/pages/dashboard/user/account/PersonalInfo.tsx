import React, { useState } from "react";
import InputText from "../../../../components/common/InputText";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../services/auth/authSelector";
import { changeUser } from "../../../../services/auth/authSlice";
import Swal from "sweetalert2";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

const PersonalInfo: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/user/v1/info-change`, {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (!data.success) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          text: data.message,
          showConfirmButton: false,
        });
      }
      if (data.success) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" p-4 bg-white space-y-2 my-8 rounded-lg">
      <h1 className=" text-lg font-semibold ">Name:</h1>
      <InputText
        value={user?.name}
        onChange={(e) => {
          dispatch(changeUser({ name: "name", value: e.target.value }));
        }}
      />
      <h1 className=" text-lg font-semibold ">Email:</h1>
      <InputText
        value={user?.email}
        onChange={(e) => {
          dispatch(changeUser({ name: "email", value: e.target.value }));
        }}
      />

      <div className=" flex justify-end">
        <button
          onClick={handleChange}
          className=" text-xl font-semibold bg-c-primary hover:bg-c-primary-light duration-300 text-white px-6 py-1 rounded-md ">
          Save{loading && "..."}
        </button>
      </div>
    </div>
  );
};
export default PersonalInfo;
