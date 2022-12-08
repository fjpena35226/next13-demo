"use client";
import React, { useCallback, useMemo, useState } from "react";
import { User } from "src/helpers/api/models/user.model";
import { getUser } from "src/helpers/api/services/user.service";

import {
  removeCookie,
  setCookie,
  USER_PROFILE_STORAGE,
} from "src/helpers/storage";

type UserContextType = {
  user?: User;
  login: (userId: string) => Promise<any>;
  logout: () => void;
};

type UserProviderProps = {
  user?: User;
  children: React.ReactNode;
};

const UserContext = React.createContext<UserContextType>({
  user: undefined,
  login: () => Promise.resolve(),
  logout: () => false,
});

export const UserProvider = ({
  user: authUser,
  children,
}: UserProviderProps) => {
  const [user, setUser] = useState<User | undefined>(authUser);

  const login = useCallback(async (userId: string) => {
    setCookie(USER_PROFILE_STORAGE.storage, userId);
    const user = await getUser(userId)
    setUser(user)
  }, []);

  const logout = useCallback(() => {
    removeCookie(USER_PROFILE_STORAGE.storage);
    setUser(undefined)
  }, []);

  const providerValue = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) throw Error("useUser hook must be under UserProvider");

  return context;
};
