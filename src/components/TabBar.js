import "./TabBar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdLocalLaundryService, MdCheckCircle } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { LuMenuSquare } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const TabBar = () => {
  return (
    <div>
      <ul className="tapbar">
        <li>
          <NavLink to="/" className="icon">
            <LuMenuSquare />
            <p>카테고리</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="icon">
            <MdCheckCircle />
            <p>구독신청</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="icon">
            <MdLocalLaundryService />
            <p>나의세탁</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Mypage" className="icon">
            <FaUser />
            <p>마이페이지</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default TabBar;
