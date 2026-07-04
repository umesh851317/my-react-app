import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserData = ({ children }) => {
  const [user, setUser] = useState({
    name: "Umesh",
    age: 22,
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserData;