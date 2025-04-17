import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import useAutoLogout from "./useAutoLogOut";
import Home from "./ui/Home/Home";
import SupportedSchools from "./pages/supported-schools/SupportedSchools";
import Referral from "./pages/referrral/Referral";
import Error from "./ui/Error";
import LearnMore from "./pages/learn/LearnMore";
import LogIn from "./pages/login/LogIn";
import Registration from "./pages/login/Registration";
import CheckYourRate from "./pages/check-your-rate/CheckYourRate";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import Form from "./pages/portfolio/Form";

const router = createBrowserRouter(
  [
    {
      element: <Applayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/supported-schools",
          element: <SupportedSchools />,
        },
        {
          path: "/referrals",
          element: <Referral />,
        },
        {
          path: "/learn-more",
          element: <LearnMore />,
        },
      ],
    },
    {
      path: "/auth/login",
      element: <LogIn />,
      errorElement: <Error />,
    },
    {
      path: "/check-your-rate",
      element: (
        <PrivateRoute>
          <CheckYourRate />
        </PrivateRoute>
      ),
      errorElement: <Error />,
    },
    {
      path: "/form/:portfolio_id",
      element: <Form />,
      errorElement: <Error />,
    },
    {
      path: "/auth/registration",
      element: <Registration />,
      errorElement: <Error />,
    },
    {
      path: "/auth/forgot-password",
      element: <ForgotPassword />,
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
    },
  }
);
function App() {
  useAutoLogout();
  return <RouterProvider router={router} />;
}

export default App;
