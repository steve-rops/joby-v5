import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const UserSignInBtn = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded)
    return <div className="h-8 w-8 rounded-full bg-muted animate-pulse"></div>;
  return (
    <>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <a href="/login">
          <Button variant="outline" size="sm">
            Sign in
          </Button>
        </a>
      )}
    </>
  );
};

export default UserSignInBtn;
