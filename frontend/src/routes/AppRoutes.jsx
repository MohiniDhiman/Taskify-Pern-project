import StudentDashboard from "../pages/dashboards/StudentDashboard";
import TeacherDashboard from "../pages/dashboards/TeacherDashboard";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import { ROUTES } from "./Routes";
import Sidebar from "../components/sidebar/Sidebar";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ROUTES.STUDENTDASHBOARD,
        element: <StudentDashboard />,
      },
      {
        path: ROUTES.TEACHERDASHBOARD,
        element: <TeacherDashboard />,
      },
      {
        path: ROUTES.SIDEBAR,
        element: <Sidebar />,
      },
    ],
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.SIGNUP,
    element: <Signup />,
  },
]);
export default AppRoutes;
