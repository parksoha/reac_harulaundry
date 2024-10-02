import React from "react";
import "../routes/SelectLink.scss";
import { Link } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";

const ProductItem = ({ product }) => {
  return (
    <div className="main_con">
      <div className="con">
        <div className="img1"></div>
        <div>
          <p>{product.title}</p>
          <span>{product.content}</span>
        </div>
      </div>
      <Link to={`/Detail/${product.id}`}>
        <div className="guduk">
          <p>
            해택받고 구독하기 <GrFormNext />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
