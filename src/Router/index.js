// import { Routes, Navigate, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sidebar from "../pages/Sidebar";
import CreateAvata from "../pages/CreateAvata";
import Login from "../pages/Login";
import Frame from "../pages/Frame";
<<<<<<< HEAD
=======
import FixSizeImg from "../pages/FixSizeImg";
>>>>>>> bf0630acae302218cdff6e0bb9b6d808a6b86049
// const Routers = () => {

export const publicRouters = [
  { path: "/sidebar", component: Sidebar },
<<<<<<< HEAD
  { path: "/create-frame", component: Frame },
  { path: "/login", component: Login },
  { path: "/home", component: Home },
<<<<<<< HEAD

=======
  { path: "/home", component: Home },
  { path: "/create-avata", component: CreateAvata },
  { path: "/create-frame", component: Frame },
  { path: "/home/custem", component: FixSizeImg },
  { path: "/login", component: Login },
>>>>>>> bf0630acae302218cdff6e0bb9b6d808a6b86049
=======
  { path: "/home/generate-avata/:id", component: Home },
>>>>>>> anhdev
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
