import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// ── 工具函式：同時查 localStorage + sessionStorage ──
function getStorage(key) {
  return localStorage.getItem(key) || sessionStorage.getItem(key) || null;
}

function clearStorage(...keys) {
  keys.forEach((key) => {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  });
}

export const AuthProvider = ({ children }) => {
  // lazy initializer：頁面一載入就從 storage 還原狀態，解決跳轉後名字消失問題
  const [user, setUser] = useState(() => {
    const token = getStorage("token");
    const id = getStorage("userId");
    const name = getStorage("userName");
    if (token && id) return { id, name };
    return null;
  });

  const [isAuthed, setIsAuthed] = useState(() => {
    return !!getStorage("token");
  });

  const login = (userData, token, rememberMe) => {
    const storage = rememberMe ? localStorage : sessionStorage;

    storage.setItem("token", token);
    storage.setItem("userId", String(userData.id));
    storage.setItem("userName", userData.name || "");

    setUser(userData);
    setIsAuthed(true);
  };

  const logout = () => {
    clearStorage("token", "userId", "userName");
    setUser(null);
    setIsAuthed(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthed, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
