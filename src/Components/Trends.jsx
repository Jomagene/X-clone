import FolowLists from "./Trends/FolowLists";
import SearchBox from "./Trends/SearchBox";
import TrendLists from "./Trends/TrendLists";
import TwitterFooter from "./Trends/TwitterFooter";

export default function Trends() {
  return (
    <div className="trends">
      <SearchBox />
      <TrendLists />
      <FolowLists />
      <TwitterFooter />
    </div>
  );
}
