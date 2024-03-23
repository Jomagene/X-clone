export default function TrendItem({ obj }) {
  return (
    <div className="trend-item">
      <div className="trend-content">
        <span className="tweet-title-details">{obj.subtitle}</span>
        <span className="tag">{obj.tag}</span>
        <span className="tweet-title-details">{obj.count}</span>
      </div>
      {obj.icon}
    </div>
  );
}
