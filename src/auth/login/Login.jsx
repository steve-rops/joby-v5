import { SignIn } from "@clerk/clerk-react";

export const Login = () => {
  return (
    <div className="py-20 grid place-items-center">
      <SignIn
        fallbackRedirectUrl="/dashboard/search"
        forceRedirectUrl="/dashboard/search"
        fallback={<div className="loader"></div>}
      />
    </div>
  );
};
