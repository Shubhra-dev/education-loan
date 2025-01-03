import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import useAutoLogout from "./useAutoLogOut";
import Home from "./ui/Home/Home";
import SupportedSchools from "./pages/supported-schools/SupportedSchools";
import Referral from "./pages/referrral/Referral";
import Error from "./ui/Error";

const router = createBrowserRouter([
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
    ],
  },
]);
function App() {
  useAutoLogout();
  return <RouterProvider router={router} />;
}

export default App;
