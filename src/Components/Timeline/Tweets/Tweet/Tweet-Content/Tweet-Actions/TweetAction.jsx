export default function TweetAction({ count, icon }) {
  return (
    <div className="tweet-action">
      <img src={icon} />
      <span>{count}</span>
    </div>
  );
}
