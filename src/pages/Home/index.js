import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Box } from "../../components/Box";
// import { data } from "../../data_temp";
import data from "../../Data/User.json";
import CreateAvata from "../CreateAvata";
import axios from "axios";
// import CustemInput from "../../components/Custeminput";
// import { Data } from './../../../node_modules/cropperjs/types/index.d';
const Home = () => {
  const [frame, setFrame] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "http://localhost:4000/api/v1/frame/upload";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setFrame(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <section>
      {/* <CustemInput
        type="text"
        className="search__input"
        placeholder="Tìm kiếm khung"
      /> */}
      {/* Trang chu , generate avata , contact  */}
      <div className="container_frame">
        {frame.map((user) => (
          <Box props={user} />
        ))}
      </div>
      <CreateAvata className="avt"/>
    </section>
  );
};

export default Home;
