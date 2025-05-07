import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  if (
    isAuthenticated &&
    user.role === "members" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth" />;
  }

  if (
    isAuthenticated &&
    user.role === "admin" &&
    location.pathname.includes("/members")
  ) {
    return <Navigate to="/unauth" />;
  }

  if (isAuthenticated) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/usersinfo" />;
    }
    if (user?.role === "members") {
      return <Navigate to="/members/accounts" />;
    }
    if (user?.role === "visitor") {
      return <Navigate to="/visitor/dashboard" />;
    }
  } else {
    return <Navigate to="/visitor/dashboard" />;
  }

  if (!isAuthenticated &&
    (location.pathname.includes("/admin") ||
    location.pathname.includes("/members"))
  ) {
      return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
