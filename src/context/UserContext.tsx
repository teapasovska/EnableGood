import { createContext, useContext, useState, ReactNode } from "react";

type User = "Company User" | "NGO User" | "";

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>("");

  const logout = () => {
    setUser(""); // ne zabravaj session tuka
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
