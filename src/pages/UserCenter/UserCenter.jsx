import { useEffect } from "react";

// scss載入
import "./userCenter.scss"

// 圖片載入
import heroYellowPattern from "../../assets/images/userCenter/hero_yellow_pattern.png";
import heroGreenPattern from "../../assets/images/userCenter/hero_green_pattern.png";
import shippingCart from "../../assets/images/userCenter/member_shipping_cart.png";
import aboutBg from "../../assets/images/userCenter/about-bg.png";
import waitingDog from "../../assets/images/userCenter/member_waiting_dog.png";


export default function UserInfo() {
  useEffect(() => {
    document.title = "會員中心";
  }, []);

  return (
    <main className="member-center position-relative mb-80">
      <div className="container">
        {/* 裝飾圖：先確定你圖片放哪裡（建議 public/assets/...） */}
        <img
          src={heroYellowPattern}
          alt="黃色裝飾"
          className="position-absolute yellow-patten-1 z-3"
        />
        <img
          src={heroGreenPattern}
          alt="綠色裝飾"
          className="position-absolute green-patten-1 me-0 z-3"
        />

        <div className="row justify-content-center">
          <div className="col-12 col-md-10 position-relative">
            {/* tab區塊 */}
            <ul
              className="nav nav-pills d-flex align-items-end"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item me-16" role="presentation">
                <button
                  className="btn button-outline-primary btn-member active rounded-pill"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="true"
                >
                  <span className="icon-user-round-pen align-bottom"></span>
                  <span className="ms-2">會員資料</span>
                </button>
              </li>

              <li className="nav-item me-16" role="presentation">
                <button
                  className="btn button-outline-primary btn-member rounded-pill"
                  id="pills-orderlists-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-orderlists"
                  type="button"
                  role="tab"
                  aria-controls="pills-orderlists"
                  aria-selected="false"
                >
                  <span className="icon-receipt-text align-bottom"></span>
                  <span className="ms-2">訂單管理</span>
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="btn button-outline-primary btn-member rounded-pill"
                  id="pills-exclusives-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-exclusives"
                  type="button"
                  role="tab"
                  aria-controls="pills-exclusives"
                  aria-selected="false"
                >
                  <span className="icon-ticket-check align-bottom"></span>
                  <span className="ms-2">會員專屬活動</span>
                </button>
              </li>
            </ul>

            {/* 頁面內容 */}
            <div
              className="tab-content p-48 bg-yellow bg-radius py-40 px-55"
              id="pills-tabContent"
            >
              {/* tab-會員資料 */}
              <div
                className="member-data tab-pane fade show active"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex={0}
              >
                <form className="needs-validation" noValidate>
                  <div className="mb-40">
                    <h2 className="h h2 text-primary-500 mt-16 mb-32">
                      <span className="icon-user me-2"></span>會員資料
                    </h2>

                    <div className="mb-56 ps-8 position-relative">
                      <label htmlFor="user-name" className="form-label p1">
                        姓名
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control pe-5"
                          id="user-name"
                          placeholder="請輸入姓名"
                          maxLength={20}
                          required
                        />
                        <i className="icon icon-user-round-pen position-absolute top-50 end-0 translate-middle-y me-3"></i>
                      </div>

                      <div className="valid-tooltip">正確!</div>
                      <div className="invalid-tooltip">
                        姓名不得為空或是超過20個字!
                      </div>
                    </div>

                    <div className="mb-56 ps-8 position-relative">
                      <label htmlFor="user-nick-name" className="form-label p1">
                        暱稱
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control pe-5"
                          id="user-nick-name"
                          placeholder="請輸入暱稱"
                        />
                        <i className="icon icon-file-user position-absolute top-50 end-0 translate-middle-y me-3"></i>
                      </div>
                    </div>

                    <div className="mb-56 ps-8 position-relative">
                      <label htmlFor="birthday" className="form-label p1">
                        生日
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="birthday"
                          placeholder="請輸入生日, 例如: 1991/10/09"
                          required
                        />
                        <i className="icon icon-cake position-absolute top-50 end-0 translate-middle-y me-3"></i>
                      </div>
                      <div className="valid-tooltip">正確!</div>
                      <div className="invalid-tooltip">
                        請輸入正確年月日! 例如: 1991/10/09
                      </div>
                    </div>

                    <div className="mb-56 ps-8 position-relative">
                      <label htmlFor="email" className="form-label p1">
                        Email
                      </label>
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="請輸入電子信箱"
                          autoComplete="email"
                          inputMode="email"
                          required
                        />
                        <div className="icon icon-mail position-absolute top-50 end-0 translate-middle-y me-3"></div>
                      </div>
                      <div className="valid-tooltip">正確!</div>
                      <div className="invalid-tooltip">請輸入正確電子信箱!</div>
                    </div>

                    <div className="mb-56 ps-8 position-relative">
                      <label htmlFor="mobile" className="form-label p1">
                        手機號碼
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="mobile"
                          placeholder="請輸入手機號碼"
                          maxLength={10}
                          required
                        />
                        <i className="icon icon-smartphone position-absolute top-50 end-0 translate-middle-y me-3"></i>
                      </div>
                      <div className="valid-tooltip">正確!</div>
                      <div className="invalid-tooltip">請輸入手機號碼!</div>
                    </div>

                    <div className="mb-56 ps-8">
                      <label className="form-label p1">住家地址</label>

                      <div id="address" className="row g-3 g-lg-4">
                        <div className="col-md-3 position-relative">
                          <select
                            className="form-select"
                            id="city"
                            required
                            defaultValue=""
                          >
                            <option disabled value="">
                              縣/市
                            </option>
                            <option>台北市</option>
                            <option>台中市</option>
                            <option>高雄市</option>
                          </select>
                          <div className="invalid-tooltip">請選擇縣/市!</div>
                        </div>

                        <div className="col-md-3 position-relative">
                          <input
                            type="text"
                            className="form-control"
                            id="zip"
                            placeholder="郵遞區號"
                            required
                          />
                          <div className="invalid-tooltip">請輸入郵遞區號!</div>
                        </div>

                        <div className="col-md-6 position-relative">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              id="addres"
                              placeholder="地址"
                              required
                            />
                            <div className="icon icon-map-pin-house position-absolute top-50 end-0 translate-middle-y me-3"></div>
                          </div>
                          <div className="invalid-tooltip">請輸入地址!</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 送貨資料 */}
                  <div className="shipping-info mb-4 position-relative">
                    <h2 className="h h2 text-primary-500 mb-32">
                      <span className="icon-shopping-bag me-2"></span>送貨資料
                    </h2>

                    <img
                      src={shippingCart}
                      alt="行進中的貨車圖"
                      className="position-absolute img-shipping-cart img-shake top-0 end-0 z-2"
                    />
                    <img
                      src={aboutBg}
                      alt="黃色底框"
                      className="position-absolute img-shipping-cart img-shake top-0 end-0 z-1"
                    />
                    <img
                      src={waitingDog}
                      alt="等待中的小狗狗"
                      className="position-absolute img-waiting-dog transform-x img-shake top-1 end-1 z-1"
                    />

                    <div className="mb-3 ps-8">
                      <label className="form-label p1">送達地址</label>

                      <div id="shipping-address" className="row g-3 g-lg-4">
                        <div className="col-md-3 position-relative">
                          <select
                            className="form-select"
                            id="shipping-city"
                            required
                            defaultValue=""
                          >
                            <option disabled value="">
                              縣/市
                            </option>
                            <option>台北市</option>
                            <option>台中市</option>
                            <option>高雄市</option>
                          </select>
                          <div className="invalid-tooltip">請選擇縣/市!</div>
                        </div>

                        <div className="col-md-3 position-relative">
                          <input
                            type="text"
                            className="form-control"
                            id="shipping-zip"
                            placeholder="郵遞區號"
                            required
                          />
                          <div className="invalid-tooltip">請輸入郵遞區號!</div>
                        </div>

                        <div className="col-md-6 position-relative">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              id="shipping-addr"
                              placeholder="地址"
                              required
                            />
                            <div className="icon icon-map-pin-house position-absolute top-50 end-0 translate-middle-y me-3"></div>
                          </div>
                          <div className="invalid-tooltip">請輸入送達地址!</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mt-80">
                    <button
                      type="button"
                      className="btn btn-save rounded-pill align-bottom"
                    >
                      存檔
                    </button>
                  </div>
                </form>
              </div>

              <div
                className="tab-pane fade"
                id="pills-orderlists"
                role="tabpanel"
                aria-labelledby="pills-orderlists-tab"
                tabIndex={0}
              >
                <h2 className="h h2 text-primary-500 mt-16 mb-32">
                  <span className="icon-receipt-text me-2"></span>
                  訂單管理（骨架）
                </h2>
                <p className="p2">✅ 下一步會貼回訂單 table + pagination。</p>
              </div>

              <div
                className="tab-pane fade"
                id="pills-exclusives"
                role="tabpanel"
                aria-labelledby="pills-exclusives-tab"
                tabIndex={0}
              >
                <h2 className="h h2 text-primary-500 mt-16 mb-32">
                  <span className="icon-ticket-check me-2"></span>
                  會員專屬活動（骨架）
                </h2>
                <p className="p2">✅ 下一步會貼回 carousel + 活動卡片。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
