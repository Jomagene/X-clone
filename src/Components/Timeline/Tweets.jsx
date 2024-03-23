import Tweet from "./Tweets/Tweet";
import TweetDatas from "../../data/tweet_data";

export default function Tweets() {
  return (
    <div className="tweets">
      {TweetDatas.map((el, index) => {
        return <Tweet tweets={el} key={index} order={index} />;
      })}
    </div>
  );
}
