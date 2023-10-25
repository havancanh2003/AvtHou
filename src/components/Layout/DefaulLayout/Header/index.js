import React, { useEffect, useRef } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import CustemInput from "../../../Custeminput/index";

const Header = () => {
  const headerRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 96 ||
        document.documentElement.scrollTop > 96
      ) {
        headerRef.current?.classList.add("sticky__header");
      } else {
        headerRef.current?.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  });
  return (
    <div className="container__header" ref={headerRef}>
      {/* Logo */}
      <div className="container__right">
        <span class='title' id='h'>AVATAR &nbsp; H</span>
        <div className="logo__img">
          <img src="/logo_hou.png" alt="sdeaew" />
        </div>
        <span class='title'>U</span>
      </div>


        <CustemInput 
            type="text" 
            className="search__input"
            placeholder="Tìm kiếm khung"
        />
        {/* <NavLink id='login' to='/login'>Đăng nhập</NavLink> */}
    </div>
  );
};

export default Header;
