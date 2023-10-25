// import { Routes, Navigate, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sidebar from "../pages/Sidebar";
import CreateAvata from "../pages/CreateAvata";
import Login from "../pages/Login";
import Frame from "../pages/Frame";
import FixSizeImg from "../pages/FixSizeImg";
// const Routers = () => {

export const publicRouters = [
  { path: "/", component: Home },
  { path: "/sidebar", component: Sidebar },
  { path: "/home", component: Home },
  { path: "/create-avata", component: CreateAvata },
  { path: "/create-frame", component: Frame },
  { path: "/home/custem", component: FixSizeImg },
  { path: "/login", component: Login },
];

// return (
//   <Routes>
//     <Route path="/" element={<Navigate to="home" />} />
//     <Route path="/home" element={<Home />} />
//     <Route path="/create-frame" element={<Frame />} />
//     <Route path="/create-avata" element={<CreateAvata />} />
//     <Route path="/home/custem" element={<FixSizeImg />} />
//     <Route path="/login" element={<Login />} />
//   </Routes>
// );
// };

// export default Routers;
