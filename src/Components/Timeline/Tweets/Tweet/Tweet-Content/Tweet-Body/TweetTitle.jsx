import TweetTitleAuthor from "./Tweet-Title/TweetTitleAuthor";
import TweetTitleDetails from "./Tweet-Title/TweetTitleDetails";

export default function TweetTitle({ title }) {
  //   console.log(title);
  return (
    <div className="tweet-title">
      <TweetTitleAuthor author={title.author} />
      <img src={title.verification} alt="Verified icon" />
      <TweetTitleDetails data={title.reference} />
      <TweetTitleDetails data={title.dot} />
      <TweetTitleDetails data={title.date} />
    </div>
  );
}
