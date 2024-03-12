import { More_, Private } from "../../data/icons_images";
import Avatar from "../Timeline/Tweet-Editor/Avatar";
import TweetTitleAuthor from "../Timeline/Tweets/Tweet/Tweet-Content/Tweet-Body/Tweet-Title/TweetTitleAuthor";
import TweetTitleDetails from "../Timeline/Tweets/Tweet/Tweet-Content/Tweet-Body/Tweet-Title/TweetTitleDetails";

export default function ProfileSettings() {
  return (
    <div className="profile-settings">
      <Avatar />
      <div className="avatar-details">
        <TweetTitleAuthor author="Bradley Ortiz" />
        <img src={Private} alt="Market icon" />
        <br />
        <TweetTitleDetails data="@bradley_" />
      </div>
      <img src={More_} alt="See more" />
    </div>
  );
}
