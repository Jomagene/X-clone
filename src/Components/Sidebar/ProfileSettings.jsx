import More_ from "../../assets/Icons/More_";
import Avatar from "../Timeline/Tweet-Editor/Avatar";
import TweetTitleAuthor from "../Timeline/Tweets/Tweet/Tweet-Content/Tweet-Body/Tweet-Title/TweetTitleAuthor";
import TweetTitleDetails from "../Timeline/Tweets/Tweet/Tweet-Content/Tweet-Body/Tweet-Title/TweetTitleDetails";

export default function ProfileSettings({ img, author, data, src, btn }) {
  return (
    <div className="profile-settings">
      <div className="avatar-details">
        <Avatar src={img} />
        <div className="labels">
          <TweetTitleAuthor author={author} />
          <br />
          <TweetTitleDetails data={data} />
        </div>
        {src}
      </div>
      {btn ? <button>{btn}</button> : <More_ />}
    </div>
  );
}
