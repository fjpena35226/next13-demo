"use client";
import Loading from "app/loading";
import { useRouter } from "next/navigation";
import React from "react";
import UserAvatar from "src/components/Avatar/Avatar.client";
import Button from "src/components/@UI/Button/Button.client";
import { useUser } from "src/context/user.context";

function ProfileDetails() {
  const { user, logout } = useUser();
  const router = useRouter();

  const handleLogout = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    if (logout) logout();
    router.push('/login')
  };

  return user ? (
    <div className="max-w-md rounded-md shadow-md p-10 flex justify-center flex-col">
      <div className="flex flex-col justify-center items-center">
        <UserAvatar size="large" />
        <p className="capitalize mt-4">
          {user?.name.firstname} {user?.name.lastname}
        </p>
        <p>{user?.email}</p>
      </div>
      <div className="w-full flex justify-center">
        <Button color="bg-red-500" className="mt-8" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default ProfileDetails;
