import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import Dashboard from "../features/Dashboard/Dashboard";
import AllEmployees from "../features/AllEmployees/AllEmployees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "employees",
        children: [
          {
            index: true,
            element: <AllEmployees />,
          },
          {
            path: ":id",
            element: <div>Employee ss</div>,
          },
          {
            
          }
        ],
      },
      {},
    ],
  },
  {
    path: "/login",
  },
]);

export default router;
