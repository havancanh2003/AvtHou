import React from "react";
import "./Frame.scss";
import { Link } from "react-router-dom";
const Frame = () => {
  return (
    <div className="container__avata" id="frame_cr">
      <div className="img__box">
        <Link to="/home/custem">
          {/* <canvas></canvas> */}
          <img src="./logo.png" alt="" srcset="" />
        </Link>
      </div>
      <div className="container__input">
        <label>Chọn frame</label>
        <input
          type="file"
          placeholder="Chọn farme"
          name="farme"
          id="upload-farme"
        />
        <button className="btn-success">Hoàn thành</button>
      </div>
    </div>
  );
};

export default Frame;
