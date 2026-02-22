import { useState, useEffect } from "react";
import { getUserProfile } from "../../api/userApi";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  // 1. 修正 Token 取得來源：同時檢查 localStorage 與 sessionStorage
  // 並將鍵名改為 "token" 以配合 Login.jsx
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || sessionStorage.getItem("token");
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      // 每次執行時重新取得最新的 token (確保拿到 Login 後存入的值)
      const currentToken =
        localStorage.getItem("token") || sessionStorage.getItem("token");

      if (!currentToken) {
        setUser(null);
        setIsLoading(false);
        return;
      }

      try {
        // 2. 有 Token，呼叫 API 驗證身分
        const userData = await getUserProfile();

        if (userData) {
          setUser(userData);
        } else {
          // 驗證失敗：清除相關資訊
          localStorage.removeItem("token");
          sessionStorage.removeItem("token");
          localStorage.removeItem("userId");
          setToken(null);
          setUser(null);
        }
      } catch (error) {
        console.error("Auth Hook 驗證發生錯誤:", error);
        // 若 API 報錯（如 401），視為登入無效
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, [token]); // 當 token 狀態改變時重新觸發

  return {
    // 3. 嚴謹的權限判定：
    // 必須有 token，且「如果正在載入中，先不判定為 false」
    // 這樣 RequireAuth 才會顯示「載入中」而不是直接踢人
    isAuthed: !!token && (isLoading || !!user),
    user,
    isLoading,
    token,
  };
};
