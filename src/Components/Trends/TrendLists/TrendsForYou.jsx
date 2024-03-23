import Settings from "../../../assets/Icons/Settings";

export default function TrendsForYou({ content, icon }) {
  return (
    <div className="trend-item">
      <div className="trend-content">
        <span className="title">{content}</span>
      </div>
      {icon ? <Settings /> : ""}
    </div>
  );
}
