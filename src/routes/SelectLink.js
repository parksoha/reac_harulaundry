/* import { useState, useEffect } from "react"; */
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "./SelectLink.scss";
import { GrFormNext } from "react-icons/gr";

import TabBar from "../components/TabBar";
import ProductItem from "../components/ProductItem";

//ProductItem은 단일 제품의 데이터를 받아 처리하고, SelectLink는 전체 제품 데이터를 관리하며 각 ProductItem에 데이터를 전달하는 역할을 함.

const SelectLink = ({ products }) => {
  const handleClose = () => {
    window.history.back(); // 이전 페이지로 돌아가기
  };
  return (
    <div className="select">
      <div className="top">
        <ul>
          <li className="logoin">
            <Link to="#">
              <span>
                로그인 해주세요 <GrFormNext />
              </span>
            </Link>
          </li>
          <li className="close" onClick={handleClose}>
            <IoMdClose />
          </li>
        </ul>
      </div>
      <div className="main">
        {/* products 배열을 순회하여 각 제품에 대해 ProductItem 컴포넌트를 렌더링 */}
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <TabBar />
    </div>
  );
};

export default SelectLink;
