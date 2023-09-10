import { useRoutes } from "react-router-dom";
import { Home, Login } from "@/pages";
import { MainLayout } from "@/layouts";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <MainLayout title="Home">
          <Home />
        </MainLayout>
      ),
    },
    {
      path: "/login",
      element: (
        <MainLayout title="Login">
          <Login />
        </MainLayout>
      ),
    },
  ]);
}
