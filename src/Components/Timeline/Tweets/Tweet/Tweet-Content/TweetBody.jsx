import TweetImage from "./Tweet-Body/TweetImage";
import TweetText from "./Tweet-Body/TweetText";
import TweetTitle from "./Tweet-Body/TweetTitle";

export default function TweetBody({ body }) {
  return (
    <div className="tweet-body">
      <TweetTitle title={body.title} />
      <TweetText text={body.text} />
      <TweetImage image={body.image} />
    </div>
  );
}
