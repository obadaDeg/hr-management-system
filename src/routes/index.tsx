import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import Dashboard from "../features/Dashboard/Dashboard";
import SearchResults from "../features/SearchResults/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>404 Not Found</div>,
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
      {
        path: "payroll",
      },
      {
        path: "jobs",
        
      },
      {
        path: "attendance",

      },
      {
        path: "departments",

      },
      {
        path: "reports",
      },
      {
        path: "holidays",
      },
      {
        path: "settings",
      },
      {
        path: "search",
        element: <SearchResults />,
      }
    ],
  },
  {
    path: "/login",
  },
]);

export default router;
