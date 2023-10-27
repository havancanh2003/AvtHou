import "./Box.scss";
import { useNavigate } from "react-router-dom";
export const Box = ({ props }) => {
  const { id, name, dayPost, image, role } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/home/generate-avata/${id}`);
  };
  return (
    <div className="item">
      <div className="img__box" onClick={handleClick}>
        <img src={`http://localhost:4000/${image}`} alt=""></img>
      </div>
      <div className="user__infor">
        <p>Họ tên : {name}</p>
        <p>Chức vụ: {role}</p>
        <p>Ngày đăng : {dayPost}</p>
      </div>
    </div>
  );
};
