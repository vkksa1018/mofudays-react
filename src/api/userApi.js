import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

// 1. 確認會員登入狀態
export const checkLoginStatus = () => {
  const token = localStorage.getItem("accessToken");
  return !!token;
};

// 2. 取得會員資料
export const getUserProfile = async () => {
  const token = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId");

  if (!token || !userId) return null;

  try {
    // --- 修改重點：加上 /600 ---
    // 因為你在 db.json 和測試中都確認要用 600 權限
    const response = await axios.get(`${API_BASE_URL}/600/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // axios 會自動解析 JSON
  } catch (error) {
    // 如果 Token 過期或被竄改，json-server-auth 會回傳 401
    if (error.response && error.response.status === 401) {
      console.warn("Token 已失效，清除登入資訊");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
    }
    console.error("取得會員資料失敗:", error.message);
    return null;
  }
};
