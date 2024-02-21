import { api } from "@/services/api/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../_features/authSlice";

function useTokenValidation() {
  const pathname = window.location.pathname;
  const { isLogged } = useSelector(({ auth }: any) => auth.value);
  const [isLoading, setIsLoading] = useState(pathname !== "/login");

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogged && pathname !== "/login") {
      api
        .get("/auth/checkToken")
        .then((data) => {
          setIsLoading(false);
          dispatch(
            login({
              ...data.data.result,
              isLogged: true,
            })
          );
        })
        .catch((error) => {
          localStorage.removeItem("token");
          window.location.pathname = "/login";
        });
    }
  }, [isLogged]);

  let defaultPage = "/login";

  if (isLogged) {
    defaultPage = "/";
  }

  return { isLogged, isLoading, defaultPage };
}

export default useTokenValidation;
