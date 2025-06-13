
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Home from "../pages/home/Home";

// export const userRoutes = [
//   {
//     path: "/registration",
//     name: "Регистрация",
//     element: <Registration />,
//   },
// ];

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
    path: "/home",
    element: <Home />,
  },
  {
    path: '/not-found',
    element: <h1>404 Not Found</h1>,
  }
];

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <div>Dashboard</div>, 
  },
];
