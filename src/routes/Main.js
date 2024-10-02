/* import TabBar from "../components/TabBar"; */
import "bootstrap/dist/css/bootstrap.min.css";
/* import { Container, Row, Col } from "react-bootstrap"; */
import "./Main.scss";
import { MdNotifications } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";

import TabBar from "../components/TabBar";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main_body">
      <header>
        <ul>
          <li className="logo">
            <img src="img/logo.png" alt="logo"></img>
          </li>
          <li className="bell">
            <MdNotifications />
          </li>
        </ul>
      </header>
      <section id="section1">
        <div className="cont_bg">
          <p>
            <span>밀착! </span> 맞춤형 물세탁 하루세탁
          </p>
        </div>
        <div className="cons_main">
          <div className="cons_txt">
            <p>맞춤 상품이 궁금하다면</p>
            <p>
              나의 세탁 스타일에 맞는 <br />
              맞춤 세탁 상품 찾아보기
            </p>
            <p>
              구독자 전용 <span>타포린백</span> 증정🎁
            </p>
          </div>
          <div className="mainimg"></div>
          <Link to="/SelectLink">
            <div className="main_btn">
              <p>
                <span>맞춤 선택 링크</span> <GrFormNext />
              </p>
              <p>첫결제 5,000원 할인!</p>
            </div>
          </Link>
        </div>
      </section>
      <section id="section2">
        <h2>
          <span>하루세탁</span> 알차게 이용하기
        </h2>
        <div className="con_box">
          <Link>
            <div className="con1">
              <div>이미지</div>
              <div>
                <p>내옷은 어떻게 세탁될까?</p>
                <p>맞춤형 세탁진행 노하우</p>
              </div>
              <p>
                <GrFormNext />
              </p>
            </div>
          </Link>
          <Link>
            <div className="con2">
              <div>이미지</div>
              <div className="con_txt">
                <p>내옷은 어떻게 세탁될까?</p>
                <p>맞춤형 세탁진행 노하우</p>
              </div>
              <p>
                <GrFormNext />
              </p>
            </div>
          </Link>
          <Link>
            <div className="con3">
              <div>이미지</div>
              <div className="con_txt">
                <p>내옷은 어떻게 세탁될까?</p>
                <p>맞춤형 세탁진행 노하우</p>
              </div>
              <p>
                <GrFormNext />
              </p>
            </div>
          </Link>
        </div>
        <hr />
      </section>

      <footer>
        <div className="f_nav">
          <ul>
            <li>개인정보취급방침</li>
            <li>이용약관</li>
            <li>회사소개</li>
            <li>고객센터</li>
          </ul>
        </div>
        <div className="f_txt">
          <p>(주)하루세탁(harulaundry lnc.)</p>
          <address>
            대표이사:박성은 | 개인정보 보호책임자: 박성은
            <br />
            사업자등록번호:455-86-02935 | 사업자정보확인 본사: (04150)서울마포구
            독막로36길 10-6 1층 동산판매신고번로: 2023-서울마포-0431호
          </address>
          <p>
            운영시간:오전09시~06시 (월~금)
            <br />
            점심시간:오후 11시50분~ 오후 01시 00분
            <br />
            문의방법: 카카오톡에서 '하루세탁' 친구 추가
            <br />
            이메일:harulaundry@naver.com
          </p>
          <copy> &copy; 하루세탁 Corp All rights reserved</copy>
        </div>
      </footer>
      <TabBar />
    </div>
  );
};
export default Main;
