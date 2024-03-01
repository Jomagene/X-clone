import Avatar from "./Tweet-Editor/Avatar";
import TweetEditorForm from "./Tweet-Editor/TweetEditorForm";

export default function TweetEditor() {
  return (
    <section className="tweet-editor">
      <Avatar />
      <TweetEditorForm />
    </section>
  );
}
