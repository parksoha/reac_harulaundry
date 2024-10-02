import React from "react";
import TabBar from "../components/TabBar";

const Mypage = ({ coupons }) => {
  // coupons를 props로 받아옴
  return (
    <div>
      <h1>마이 페이지</h1>
      <div>
        <h2>쿠폰함</h2>
        {coupons.length > 0 ? (
          <ul>
            {coupons.map((coupon, index) => (
              <li key={index}>{coupon}</li>
            ))}
          </ul>
        ) : (
          <p>보유한 쿠폰이 없습니다.</p>
        )}
      </div>
      <TabBar />
    </div>
  );
};

export default Mypage;
