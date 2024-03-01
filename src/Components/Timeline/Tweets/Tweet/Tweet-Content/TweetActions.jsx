import TweetAction from "./Tweet-Actions/TweetAction";

export default function TweetActions({ action }) {
  return (
    <div className="tweet-actions">
      {action.actions.map((element, index) => {
        return (
          <TweetAction icon={element.img} count={element.count} key={index} />
        );
      })}
    </div>
  );
}
