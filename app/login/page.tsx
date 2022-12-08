import React from "react";
import { redirect } from "next/navigation";
import { isAuth } from "src/helpers/auth";
import LoginDetail from "../../src/components/Login/LoginDetail.client";

function Login() {
  const userId = isAuth();
  if (userId) redirect("/profile");

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="max-w-[70vw]">
        <LoginDetail />
      </div>
    </div>
  );
}

export default Login;
