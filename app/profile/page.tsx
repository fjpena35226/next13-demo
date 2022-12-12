import React from "react";
import { redirect } from "next/navigation";
import { isAuth } from "src/helpers/auth";
import ProfileDetails from "../../src/components/ProfileDetails/ProfileDetails.client";

function Profile() {
  const userId = isAuth();
  if (!userId) redirect("/login");


  return (
    <div className="flex justify-center flex-col items-center">
      <div className="max-w-[70vw]">
        <p className="text-5xl font-bold mb-16 text-center">User profile</p>
        <ProfileDetails />
      </div>
    </div>
  );
}

export default Profile;
