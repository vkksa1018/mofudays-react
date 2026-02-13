import React, { useState } from "react";

const TestAuthPage = () => {
  const [status, setStatus] = useState("準備就緒");
  const targetUUID = "31d1b465-8f9b-408a-9696-e52a61914c28";

  // --- 新增：註冊功能 ---
  const handleRegisterTest = async () => {
    setStatus("正在註冊...");
    const newUser = {
      email: "james@example.com",
      password: "james123",
      name: "james",
      role: "admin",
      isActive: true,
    };

    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (res.status === 400) {
        setStatus("註冊失敗：該 Email 可能已存在，或資料格式不符。");
        console.warn("註冊 400：若資料已在 db.json，請直接嘗試登入。");
        return;
      }

      const result = await res.json();
      console.log("✅ [註冊成功]:", result);
      setStatus("註冊成功！現在可以測試登入了。");
    } catch (err) {
      console.error("註冊出錯:", err);
      setStatus(`註冊錯誤: ${err.message}`);
    }
  };

  // --- 原有：登入功能 ---
  const handleLoginTest = async () => {
    setStatus("正在登入...");
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "james@example.com",
          password: "james123",
        }),
      });

      if (!res.ok) throw new Error(`登入失敗: ${res.status}`);

      const result = await res.json();
      const { accessToken, user } = result;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", user.id);

      console.log("🔑 [登入成功] 拿到 Token:", accessToken);
      setStatus("登入成功，正在獲取 /600 資料...");

      fetchProtectedData(accessToken, user.id);
    } catch (err) {
      console.error(err);
      setStatus(`登入錯誤: ${err.message}`);
    }
  };

  const fetchProtectedData = async (token, userId) => {
    try {
      const userRes = await fetch(`http://localhost:3000/600/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userData = await userRes.json();
      console.log("👤 [受保護會員資料]:", userData);

      const orderRes = await fetch(
        `http://localhost:3000/600/orders?userId=${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const orderData = await orderRes.json();
      console.log("📦 [受保護訂單資料]:", orderData);

      setStatus("所有流程測試完成！");
    } catch (err) {
      console.error("讀取失敗:", err);
    }
  };

  return (
    <div
      style={{ padding: "20px", border: "2px solid #333", borderRadius: "8px" }}
    >
      <h2>驗證流程除錯頁面</h2>
      <div style={{ marginBottom: "10px" }}>
        <button
          onClick={handleRegisterTest}
          style={{ backgroundColor: "#e1f5fe", marginRight: "10px" }}
        >
          步驟 1：先註冊一組指定 UUID 資料
        </button>
        <button
          onClick={handleLoginTest}
          style={{ backgroundColor: "#e8f5e9" }}
        >
          步驟 2：執行登入並連動獲取資料
        </button>
      </div>

      <div style={{ padding: "10px", background: "#eee" }}>
        <strong>目前狀態：</strong> {status}
      </div>

      <div style={{ marginTop: "10px", fontSize: "12px", color: "#666" }}>
        UUID 測試標的：<code>{targetUUID}</code>
      </div>
    </div>
  );
};

export default TestAuthPage;
