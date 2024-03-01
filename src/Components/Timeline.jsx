import Header from "./Timeline/Header";
import TweetEditor from "./Timeline/TweetEditor";
import Tweets from "./Timeline/Tweets";

export default function Timeline() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
    </main>
  );
}
