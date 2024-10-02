import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import { Link, useParams, useNavigate } from "react-router-dom";

import TabBar from "../components/TabBar";
import "react-calendar/dist/Calendar.css"; // 스타일을 임포트합니다
import Calendar from "react-calendar";
import "./Detail.scss";
import "../reset.css";

import { GoDownload } from "react-icons/go";

const Detail = ({ products, addCoupon, isCouponIssued, setIsCouponIssued }) => {
  console.log(products);
  const { id } = useParams(); // useParams 활성화
  const navigate = useNavigate();
  const product = products.find((item) => item.id === Number(id)); // ID 기반으로 제품 찾기

  const today = new Date(); // 현재 날짜와 시간을 가져옵니다.
  const tomorrow = new Date(today); // 오늘 날짜를 복사합니다.
  tomorrow.setDate(today.getDate() + 1); // 내일 날짜로 설정합니다.

  const [date, setDate] = useState(tomorrow); //내일 날짜를 기본으로
  const [showCalender, setShowCalendar] = useState(false); //달력 표시 여부 상태
  const [error, setError] = useState(false);
  const [couponMessage, setCouponMessage] = useState(false);

  const handleDateChange = (newDate) => {
    const dayOfWeek = newDate.getDay(); // newDate에서 요일 가져오기
    if (newDate < tomorrow || dayOfWeek === 0 || dayOfWeek === 6) {
      ////0=일요일 6=토요일
      /*  alert("선택할 수 없는 날짜입니다. 다른 날짜를 선택해주세요."); // alert 사용 */
      setError(true);
    } else {
      setDate(newDate);
      setError(false);
    }

    setShowCalendar(false); //달력 숨기기
  };

  const couponClick = () => {
    if (isCouponIssued) {
      setCouponMessage("쿠폰함을 확인하여 주세요.");
    } else {
      addCoupon(5000); // 쿠폰 추가
      setCouponMessage("쿠폰이 발급 되었습니다.");
      setIsCouponIssued(true); // 쿠폰 발급 상태 업데이트
    }
  };

  // 내일 날짜의 연, 월, 일을 가져옵니다.
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
  const day = date.getDate();

  return (
    <div className="product">
      <div className="detail_top">
        <ul>
          <li className="back" onClick={() => navigate(-1)}>
            <GrFormPrevious />
          </li>
          <li className="home">
            <Link to="/">
              <span>
                <GoHome />
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="detail_mian">
        <div className="detail_mianbox">
          <div className="detail_mian_img">이미지</div>
          <div className="detail_mian_text">
            <p>하루를 소중하게</p>
            <p>생활 구독 ({product.name})</p>
            <p>
              <span>{product.eventprice}</span> 원<span> / 1주 </span>
              <span>{product.price}원</span>
            </p>
            <p>(주1회 정기결제)</p>
            <hr />
            <div className="detail_mian_day">
              <p>
                수거일: {year}년 {month}월 {day}일
              </p>
              <button
                className="detail_mian_btn"
                onClick={() => setShowCalendar(!showCalender)}
              >
                날짜변경
              </button>
              {showCalender && (
                <Calendar
                  onChange={handleDateChange}
                  value={date}
                  calendarType="gregory"
                  next2Label={null} // +1년 & +10년 이동 버튼 숨기기
                  prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
                  minDetail="year" // 10년단위 년도 숨기기
                />
              )}
            </div>
          </div>
          {error && (
            <div className="error">
              <p>
                선택할 수 없는 날짜입니다. <br />
                다른 날짜를 선택해주세요.
              </p>
              <button
                onClick={() => {
                  setError(false);
                }}
              >
                확인
              </button>
            </div>
          )}
        </div>
        <hr />
        <div className="coupon">
          <p onClick={couponClick}>
            첫 구독 5,000원 혜택 받기
            <GoDownload />
          </p>
        </div>
        {couponMessage && (
          <div className="coupon-message">
            <p>{couponMessage}</p>
            <button
              onClick={() => {
                setCouponMessage(false);
              }}
            >
              확인
            </button>
          </div>
        )}
        <Link to>
          <div className="gudok">구독하기</div>
        </Link>
      </div>

      <TabBar />
    </div>
  );
};

export default Detail;
