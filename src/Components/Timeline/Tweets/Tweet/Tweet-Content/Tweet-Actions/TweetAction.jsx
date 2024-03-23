export default function TweetAction({ count, icon, msg }) {
  return (
    <div className="tweet-action">
      <button className="tweet-action1">
        {icon}
        <span>{count}</span>
      </button>
      <span className="tooltip">{msg}</span>
    </div>
  );
}
