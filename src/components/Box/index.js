import "./Box.scss";
import { useNavigate } from "react-router-dom";
export const Box = ({ props }) => {
  const { id, name, dayPost, image, role } = props;
  console.log(props);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/create-avata/${id}`);
  };
  return (
    <div className="item">
      <div className="img__box">
        <img src={`http://localhost:4000/${image}`} alt=""></img>
      </div>
      <div className="user__infor">
        <p>Họ tên : {name}</p>
        <p>Chức vụ: {role}</p>
        <p>Ngày đăng : {dayPost}</p>
      </div>
      <button className="btn-test" onClick={handleClick}>
        Lấy mẫu
      </button>
    </div>
  );
};
