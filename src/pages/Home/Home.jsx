import React from "react";
// 匯入該頁面專屬 SCSS
import "./Home.scss";

const Home = () => {
  return (
    <div className="container py-5">
      {/* 測試 1: Bootstrap Grid & Typography */}
      <section className="mb-5 text-center">
        <h1 className="display-4 fw-bold text-primary">毛日和環境測試</h1>
        <p className="lead text-secondary">
          如果你看到這行字是 Bootstrap 的樣式，代表 BS 已成功載入。
        </p>
      </section>

      <div className="row g-4">
        {/* 測試 2: Bootstrap Buttons (會吃到你的 _button.scss) */}
        <div className="col-md-6">
          <div className="p-4 border rounded-3 bg-light">
            <h3>組件測試：按鈕</h3>
            <div className="d-flex gap-2 mt-3">
              <button className="btn btn-primary">主要按鈕 (Primary)</button>
              <button className="btn btn-outline-secondary">次要按鈕</button>
            </div>
            <p className="mt-2 small text-muted">
              ※ 檢查顏色是否為你在 _variables.scss 設定的品牌色
            </p>
          </div>
        </div>

        {/* 測試 3: 頁面專屬樣式 (Home.scss) */}
        <div className="col-md-6">
          <div className="p-4 border rounded-3 home-test-card">
            <h3>頁面測試：專屬樣式</h3>
            <p className="test-text">
              此段文字若為粉紅色且有陰影，代表 Home.scss 運作正常。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
