import TweetDatas from "../../data/tweet_data";
import TrendsForYou from "./TrendLists/TrendsForYou";
import ShowMore from "./TrendLists/ShowMore";
import Verified from "../../assets/Icons/Verified";
import ProfileSettings from "./FolowLists/ProfileSettings";

export default function FolowLists() {
  return (
    <div className="trend-lists">
      <TrendsForYou content="Who to follow" />
      {TweetDatas.map((content, index) =>
        index < 3 ? (
          <ProfileSettings
            key={index}
            img={content.avatar}
            author={content.content.body.title.author}
            data={content.content.body.title.reference}
            src=<Verified />
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
