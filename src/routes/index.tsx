import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import Dashboard from "../features/Dashboard/Dashboard";

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
            element: <div>Employees</div>,
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
