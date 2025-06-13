import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Home from "../pages/home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />

    </Routes>
  );
};

export default AppRoutes;



// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { publicRoutes, privateRoutes } from "./routes";
// import PrivateRoute from "./PrivateRoute";

// const AppRoutes = () => {
//   const isAuthenticated = false; // позже получай из Redux или Context

//   return (
//     <Routes>
//       {/* Публичные роуты */}
//       {publicRoutes.map(({ path, element }) => (
//         <Route key={path} path={path} element={element} />
//       ))}

//       {/* Приватные роуты */}
//       {privateRoutes.map(({ path, element }) => (
//         <Route
//           key={path}
//           path={path}
//           element={<PrivateRoute isAuth={isAuthenticated}>{element}</PrivateRoute>}
//         />
//       ))}

//       {/* редирект по умолчанию */}
//       <Route path="*" element={<Navigate to="/login" />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

