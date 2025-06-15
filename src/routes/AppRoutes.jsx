// import { Routes, Route } from "react-router-dom";
// import Login from "../pages/auth/login/Login";
// import Home from "../pages/home/Home";
// import Registration from "../pages/auth/registration/Registration";
// import CreatePassword from "../pages/auth/registration/createPassword/CreatePassword";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="*" element={<h1>404 Not Found</h1>} />
//       <Route path="/registration" element={<Registration />} />
//       <Route path="/create-password" element={<CreatePassword />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./Routes";
import PrivateRoute from "./PrivateRoutes";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  // const isAuthenticated = false; 
const { token } = useSelector((state) => state.auth);
  const isAuthenticated = Boolean(token);
  return (
    <Routes>
      {/* Публичные роуты */}
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {/* Приватные роуты */}
      {privateRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<PrivateRoute isAuth={isAuthenticated}>{element}</PrivateRoute>}
        />
      ))}

      {/* редирект по умолчанию */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
