import Verified from "../../../../../../assets/Icons/Verified";
import TweetTitleAuthor from "./Tweet-Title/TweetTitleAuthor";
import TweetTitleDetails from "./Tweet-Title/TweetTitleDetails";

export default function TweetTitle({ title }) {
  //   console.log(title);
  return (
    <div className="tweet-title">
      <TweetTitleAuthor author={title.author} />
      <Verified />
      <TweetTitleDetails data={title.reference} />
      <TweetTitleDetails data={title.dot} />
      <TweetTitleDetails data={title.date} />
    </div>
  );
}
