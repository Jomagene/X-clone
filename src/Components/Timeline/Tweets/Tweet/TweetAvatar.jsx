import { Link } from "react-router-dom";

export default function TweetAvatar({ avatar, order }) {
  return (
    <Link
      to={order == 0 ? "/CNN" : order == 1 ? "/The New York Times" : "/Twitter"}
    >
      <div className="tweet-avatar">
        <img src={avatar} />
      </div>
    </Link>
  );
}
