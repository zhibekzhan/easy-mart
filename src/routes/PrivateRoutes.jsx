// import React from 'react';

// const PrivateRoutes = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default PrivateRoutes;

// import React from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ isAuth, children }) => {
//   return isAuth ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;

// ---
// components/PrivateRoute.jsx

// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const { token } = useSelector((state) => state.auth);
//   return token ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;

// ---
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token, loading } = useSelector((state) => state.auth);

  if (loading) return <div>Загрузка...</div>; 

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
