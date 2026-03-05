/* 
    功能: 表示 訂單或訂閱狀態用的圓點相關function 
    最新更新時間: 2025/03/05
    更新內容: 整理所有後台管理系統之狀態圓點相關function
*/

// 訂單狀態
export function getOrderStatusDotVariant(status) {
  const s = String(status || "");
  if (s.includes("待處理") || s.includes("處理中")) return "warning";
  if (s.includes("已付款") || s.includes("完成")) return "success";
  return "muted";
}

// 訂閱狀態
export function getShipStatusDotVariant(status) {
  const s = String(status || "");
  if (s.includes("待處理")) return "warning";
  if (s.includes("處理中")) return "orange";
  if (s.includes("已出貨")) return "success";
  if (s.includes("完成")) return "muted";
  return "muted";
}