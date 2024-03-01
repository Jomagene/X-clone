export default function TweetImage({ image }) {
  return image ? (
    <div className="tweet-image">
      <img src={image} alt="Picture illustrating the tweet" />
    </div>
  ) : (
    ""
  );
}
