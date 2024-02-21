import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import LoadingPage from "./components/LoadingPage";
import useTokenValidation from "./auth/_hooks/useTokenValidation";
import Main from "./apps/main";
import Income from "./apps/income";
import Expense from "./apps/expense";
import Settings from "./apps/settings";

function Router() {
  const { defaultPage, isLoading, isLogged } = useTokenValidation();
  if (isLoading) {
    return <LoadingPage />;
  }
  const router = createBrowserRouter([
    !isLogged
      ? {
          path: "login",
          element: <Login />,
        }
      : {},
    !isLogged
      ? {
          path: "register",
          element: <Register />,
        }
      : {},
    isLogged
      ? {
          path: "/",
          element: <Main />,
        }
      : {},
    isLogged
      ? {
          path: "/income",
          element: <Income />,
        }
      : {},
    isLogged
      ? {
          path: "/expense",
          element: <Expense />,
        }
      : {},
    isLogged
      ? {
          path: "/settings",
          element: <Settings />,
        }
      : {},

    { path: "*", element: <Navigate to={defaultPage} replace /> },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
