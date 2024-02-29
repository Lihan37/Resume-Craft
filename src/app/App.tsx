import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "../routes";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../services/auth/authSelector";
import { setUser } from "../services/auth/authSlice";
import Loader from "../components/common/Loader";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

const App: React.FC = () => {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const refreshAccessToken = async () => {
    try {
      const response = await fetch(`${baseUrl}/auth/v1/refresh`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();

      dispatch(setUser({ user: data.user, accessToken: data.accessToken }));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshAccessToken();
  }, []);

  useEffect(() => {
    const tokenRefreshInterval = setInterval(async () => {
      refreshAccessToken();
    }, 4 * 60 * 1000);

    return () => clearInterval(tokenRefreshInterval);
  }, [user]);

  return loading ? <Loader /> : <RouterProvider router={router} />;
};

export default App;
