import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";



function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow p-3 px-5 flex justify-between shadow-md">
      <img src="/logo.svg" width={100} height={100} />

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button className="bg-[#9f5bff] hover:bg-[#9f5bff] text-white px-4 py-2 rounded">
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
