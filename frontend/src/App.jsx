import React from "react";
import { RouterProvider } from "react-router-dom";
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <RouterProvider router={AppRoutes} />
    </>
  );
};

export default App;
