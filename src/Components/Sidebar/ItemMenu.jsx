import { Link } from "react-router-dom";

export default function ItemMenu({ icon, label }) {
  return label == "Profile" ? (
    <Link to="/profile">
      <div className="item-menu">
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  ) : label == "Home" || label == "" ? (
    <Link to="/">
      <div className="item-menu">
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  ) : (
    <div className="item-menu">
      {icon}
      <span>{label}</span>
    </div>
  );
}
