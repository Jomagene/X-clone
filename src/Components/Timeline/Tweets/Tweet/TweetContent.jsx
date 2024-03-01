import TweetActions from "./Tweet-Content/TweetActions";
import TweetBody from "./Tweet-Content/TweetBody";

export default function TweetContent({ content }) {
  return (
    <div className="tweet-content">
      <TweetBody body={content.body} />
      <TweetActions action={content.action} />
    </div>
  );
}
