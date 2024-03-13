import TweetDatas from "../../data/tweet_data";
import ProfileSettings from "../Sidebar/ProfileSettings";
import TrendsForYou from "./TrendLists/TrendsForYou";
import ShowMore from "./TrendLists/ShowMore";

export default function FolowLists() {
  return (
    <div className="trend-lists">
      <TrendsForYou content="Who to follow" icon={""} />
      {TweetDatas.map((content, index) =>
        index < 3 ? (
          <ProfileSettings
            key={index}
            img={content.avatar}
            author={content.content.body.title.author}
            data={content.content.body.title.reference}
            src={content.content.body.title.verification}
            alt="Iconne Verified"
            btn="Follow"
          />
        ) : (
          ""
        )
      )}
      <ShowMore />
    </div>
  );
}
