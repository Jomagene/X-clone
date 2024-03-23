export default function TweetAction({ count, icon }) {
  console.log(icon);
  return (
    <div className="tweet-action">
      {icon}
      <span>{count}</span>
    </div>
  );
}
