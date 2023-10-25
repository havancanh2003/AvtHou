import React from "react";
import "./Sidebar.scss";
import data from "../../Data/User.json";
import { Box } from "../../components/Box";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <i className="fa-solid fa-house"></i>
        <i className="fa-regular fa-user"></i>
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-phone"></i>
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
