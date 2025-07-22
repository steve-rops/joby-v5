import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router";

export const RequireUser = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return null;

  if (!isSignedIn) return <Navigate to="/login" replace />;

  return <>{children}</>;
};
