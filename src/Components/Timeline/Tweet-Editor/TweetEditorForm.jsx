import TweetEditorButtons from "./Tweet-Editor-Form/TweetEditorButtons";
import TweetEditorInput from "./Tweet-Editor-Form/TweetEditorInput";

export default function TweetEditorForm() {
  return (
    <form className="tweet-editor-form">
      <TweetEditorInput />
      <TweetEditorButtons />
    </form>
  );
}
