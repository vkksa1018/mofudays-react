import React from "react";

const FloatingChat = () => {
  return (
    <>
      <button className="customer-service-btn" type="button">
        <span>
          <i className="bi bi-chat-dots"></i> 客服中心
        </span>
      </button>
      {/* 初始狀態建議先顯示或透過 CSS 控制，因為目前不使用 useState */}
      <div
        className="customer-service-chat py-12 d-none"
        id="customerServiceChat"
      >
        <div className="chat-header mb-4">
          <div className="title-large px-4">您好，我們能提供什麼幫助？</div>
        </div>
        <div className="chat-body mx-12">
          <a href="#" className="chat-button mb-2 d-block">
            常見問題 <i className="bi bi-file-earmark"></i>
          </a>
          <a href="#" className="chat-button d-block">
            傳訊息給我們 <i className="bi bi-envelope"></i>
          </a>
          <div className="chat-footer mt-4 text-center">
            上班時間：週一到週五 10:00 - 19:00
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingChat;
