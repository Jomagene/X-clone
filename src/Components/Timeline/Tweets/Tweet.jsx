import TweetAvatar from "./Tweet/TweetAvatar";
import TweetContent from "./Tweet/TweetContent";

export default function Tweet({ tweets, order }) {
  return (
    <div className="tweet">
      <TweetAvatar avatar={tweets.avatar} order={order} />
      <TweetContent content={tweets.content} />
    </div>
  );
}
