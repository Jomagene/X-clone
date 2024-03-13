export default function TrendsForYou({ content, icon }) {
  return (
    <div className="trend-item">
      <div className="trend-content">
        <span className="title">{content}</span>
      </div>
      <img src={icon} />
    </div>
  );
}
