import { ProfilePhoto } from "../../data/icons_images";
import Avatar from "./Tweet-Editor/Avatar";
import TweetEditorForm from "./Tweet-Editor/TweetEditorForm";

export default function TweetEditor() {
  return (
    <section className="tweet-editor">
      <Avatar src={ProfilePhoto} />
      <TweetEditorForm />
    </section>
  );
}
