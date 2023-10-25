import React from "react";
import "./Home.scss";
import { Box } from "../../components/Box";
// import { data } from "../../data_temp";
import data from "../../Data/User.json";
import CreateAvata from "../CreateAvata";
// import CustemInput from "../../components/Custeminput";
// import { Data } from './../../../node_modules/cropperjs/types/index.d';
const Home = () => {
  return (
    <section>
      {/* <CustemInput
        type="text"
        className="search__input"
        placeholder="Tìm kiếm khung"
      /> */}
      {/* Trang chu , generate avata , contact  */}
      {/* <div className="container_frame">
        {data.map((user) => (
          <Box props={user} />
        ))}
      </div> */}
      <CreateAvata className="avt" />
    </section>
  );
};

export default Home;
