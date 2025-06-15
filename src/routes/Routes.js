
import Login from "../pages/auth/login/Login";
import Registration from "../pages/auth/registration/Registration";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";

export const publicRoutes = [
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
];

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <div>Dashboard</div>, 
  },
    {
    path: "/home",
    element: <Home />,
  },
];
