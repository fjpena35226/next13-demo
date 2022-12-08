import { cookies } from "next/headers";
import { USER_PROFILE_STORAGE } from "../storage";

export const isAuth = () => {
  if(typeof window != 'undefined' && window.document) return undefined

  const nextCookies = cookies();
  const userCookie = nextCookies.get(USER_PROFILE_STORAGE.storage)
  return userCookie?.value;
};
