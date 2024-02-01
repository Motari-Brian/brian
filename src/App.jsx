import "./App.css";
import Root from "./pages/Root";
import AnotherPage from "./pages/AnotherPage";
import Profile from "./pages/profile";
import Benefits from "./pages/Benefits";
import Resources from "./pages/Resources";
import TimeOff from "./pages/TimeOff";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RequiredTasks from "./pages/RequiredTasks";

function App() {
  
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "another-page",
          element: <AnotherPage />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "benefits",
          element: <Benefits />,
        },
        {
          path: "required-tasks",
          element: <RequiredTasks />,
        },
        {
          path: "resources",
          element: <Resources />,
        },
        {
          path: "time-off",
          element: <TimeOff />,
        },
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
