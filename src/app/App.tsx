import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "../routes";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../services/auth/authSelector";
import { setUser } from "../services/auth/authSlice";
const baseUrl = import.meta.env.VITE_BASE_URL_API;

const App: React.FC = () => {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  // console.log(loading);

  const refreshAccessToken = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/auth/v1/refresh`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      if (data.user || data.message) {
        setLoading(false);
      }
      dispatch(setUser({ user: data.user, accessToken: data.accessToken }));
    } catch (error) {
      console.log(error);
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

  return loading ? <h1>Loading....</h1> : <RouterProvider router={router} />;
};

export default App;
