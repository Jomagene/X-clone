import TweetAvatar from "./Tweet/TweetAvatar";
import TweetContent from "./Tweet/TweetContent";

export default function Tweet({ tweets }) {
  return (
    <div className="tweet">
      <TweetAvatar avatar={tweets.avatar} />
      <TweetContent content={tweets.content} />
    </div>
  );
}
