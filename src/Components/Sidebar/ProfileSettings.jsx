import { More_ } from "../../data/icons_images";
import Avatar from "../Timeline/Tweet-Editor/Avatar";
import TweetTitleAuthor from "../Timeline/Tweets/Tweet/Tweet-Content/Tweet-Body/Tweet-Title/TweetTitleAuthor";
import TweetTitleDetails from "../Timeline/Tweets/Tweet/Tweet-Content/Tweet-Body/Tweet-Title/TweetTitleDetails";

export default function ProfileSettings({ img, author, data, src, alt, btn }) {
  return (
    <div className="profile-settings">
      <div className="avatar-details">
        <Avatar src={img} />
        <div>
          <TweetTitleAuthor author={author} />
          <br />
          <TweetTitleDetails data={data} />
        </div>
        <img src={src} alt={alt} />
      </div>
      {btn ? <button>{btn}</button> : <img src={More_} alt="See more" />}
    </div>
  );
}
