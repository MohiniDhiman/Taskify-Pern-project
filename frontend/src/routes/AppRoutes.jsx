import StudentDashboard from "../pages/dashboards/StudentDashboard";
import TeacherDashboard from "../pages/dashboards/TeacherDashboard";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import { ROUTES } from "./Routes";

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
    ],
  },
]);
export default AppRoutes;
