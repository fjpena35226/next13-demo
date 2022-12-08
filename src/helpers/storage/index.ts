import cookie from "js-cookie";

export const USER_PROFILE_STORAGE = {
  storage: "user_profile",
};

export const setCookie = (key: string, value: string, expiresAt?: Date) => {
  cookie.set(key, value, {
    expires: expiresAt ? new Date(expiresAt) : 1,
  });
};

export const removeCookie = (key: string) => {
  cookie.remove(key);
};

export const getCookieFromBrowser = (key: string) => {
  return cookie.get(key);
};

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
