import More_ from "../../assets/Icons/More_";
import ShowMore from "./TrendLists/ShowMore";
import TrendItem from "./TrendLists/TrendItem";
import TrendsForYou from "./TrendLists/TrendsForYou";

let trendListContent = [
  {
    subtitle: "Trending in Turkey",
    icon: <More_ />,
    tag: "#SQUID",
    count: "2,066 Tweets",
  },
  {
    subtitle: "Trending in Turkey",
    icon: <More_ />,
    tag: "#SQUID",
    count: "2,066 Tweets",
  },
  {
    subtitle: "Trending in Turkey",
    icon: <More_ />,
    tag: "#SQUID",
    count: "2,066 Tweets",
  },
  {
    subtitle: "Trending in Turkey",
    icon: <More_ />,
    tag: "#SQUID",
    count: "2,066 Tweets",
  },
];

export default function TrendLists() {
  return (
    <div className="trend-lists">
      <TrendsForYou content="Trends for you" icon={true} />
      {trendListContent.map((content, index) => (
        <TrendItem obj={content} key={index} />
      ))}
      <ShowMore />
    </div>
  );
}
