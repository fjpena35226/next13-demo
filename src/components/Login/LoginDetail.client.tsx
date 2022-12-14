"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "src/components/@UI/Button/Button.client";
import { useUser } from "src/context/user.context";
import InputField from "../@UI/InputField/InputField";

function LoginDetail() {
  const [isLoading, setLoading] = useState(false);
  const { login } = useUser();
  const router = useRouter();

  const handleLogin = async (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    setLoading(true);
    await login("1");
    setLoading(false);
    router.push("/profile");
  };

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className="min-w-[320px] min-h-[250px] rounded-md shadow-md p-8 flex flex-col">
      <p className="text-5xl font-bold mb-16 text-center">Login</p>
      <div className="flex flex-col gap-4 mb-4  ">
        <InputField placeholder="Username" defaultValue="john@gmail.com"/>
        <InputField type="password" placeholder="Password" defaultValue="1234678"/>
      </div>
      <Button color="bg-green-500" onClick={handleLogin} isLoading={isLoading}>
        Login
      </Button>
    </div>
  );
}

export default LoginDetail;
