import React from "react";
import "./Sidebar.scss";
import data from "../../Data/User.json";
import { Box } from "../../components/Box";
import { Link, NavLink } from 'react-router-dom';
const Sidebar = () => {
  const nav__link = [
      {
          path: '/home',
          display : 'Trang chủ',
      },
      {
          path: '/create-avata',
          display : 'Tạo avata',
      },
      {
          path: '/create-frame',
          display : 'Tạo frame',
      },
      {
          path: '/contact',
          display : 'Contact',
      },
      {
          path: '/login',
          display : 'Đăng nhập'
      }
  ];
  return (
    <>
      <div className="sidebar">
        <div className="logo__img">
          <img src="/logo_hou.png" alt="sdeaew" />
        </div>
        <NavLink to='/home'><i className="fa-solid fa-house"></i><br/>Trang chủ</NavLink>
        <NavLink to='/create-frame'><i class="fa fa-object-group" aria-hidden="true"></i><br/>Tạo frame</NavLink>
        <NavLink to='/create-avata'><i class="fa fa-user-circle" aria-hidden="true"></i><br/>Tạo avatar</NavLink>
        <NavLink to='/login'><i class="fa fa-sign-in" aria-hidden="true"></i><br/>Đăng nhập</NavLink>

      </div>
      <div className="container_frame">
      {data.map((user) => (
        <Box props={user} />
      ))}
    </div>
  </>
  );
};

export default Sidebar;
