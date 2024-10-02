import "./App.css";
import { Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";
import Main from "./routes/Main";
import "./reset.css";
/* import Main from "./routes/main"; */

import SelectLink from "./routes/SelectLink";
import Login from "./routes/Login";
import Detail from "./routes/Detail";
import productsData from "./productsData"; // 데이터 파일 import
import Mypage from "./routes/Mypage";

function App() {
  const [products, setProducts] = useState([]);

  const [coupons, setCoupons] = useState([]); // 쿠폰 목록 상태
  const [isCouponIssued, setIsCouponIssued] = useState(false); // 쿠폰 발급 여부 상태 추가

  const addCoupon = (amount) => {
    const newCoupon = `쿠폰 ${coupons.length + 1}: ${amount}원 할인`;
    setCoupons([...coupons, newCoupon]);
  };

  // 컴포넌트가 마운트될 때 productsData를 상태로 설정
  useEffect(() => {
    console.log(productsData); // 데이터 확인을 위한 콘솔 로그
    if (Array.isArray(productsData)) {
      setProducts(productsData); // products 상태에 데이터 설정
    } else {
      console.error("productsData is not an array"); // 데이터 형식 오류 처리
    }
  }, []);
  /* 인트로 */
  //state를 이용하여 초기 배너 보이도록  true로 설정
  let [intro, setIntro] = useState(true); //true면 보이고 false면 안보임

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* 인트로 페이지 */}
              <div>
                {
                  //참일때 인트로가 보여지도록
                  intro === true ? <div className="introWrap"></div> : null
                }
              </div>
              <Main />
            </>
          }
        />

        <Route
          path="/SelectLink"
          element={<SelectLink products={products} />}
        />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Detail/:id"
          element={
            <Detail
              products={products}
              addCoupon={addCoupon}
              isCouponIssued={isCouponIssued} // 쿠폰 발급 여부 전달
              setIsCouponIssued={setIsCouponIssued} // 쿠폰 발급 상태 변경 함수 전달
            />
          }
        />
        <Route path="/Mypage" element={<Mypage coupons={coupons} />} />
      </Routes>
    </div>
  );
}

export default App;
