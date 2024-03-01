import PageTitle from "./Header/PageTitle";
import TopTweets from "./Header/TopTweets";

export default function Header() {
  return (
    <header className="header">
      <PageTitle />
      <TopTweets />
    </header>
  );
}
