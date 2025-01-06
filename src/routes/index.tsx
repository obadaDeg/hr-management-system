import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../features/RootLayout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
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
