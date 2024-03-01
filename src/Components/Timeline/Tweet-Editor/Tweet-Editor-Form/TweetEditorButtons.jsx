import Button from "./Tweet-Editor-Buttons/Button";
import TweetEditorActions from "./Tweet-Editor-Buttons/TweetEditorActions";

export default function TweetEditorButtons() {
  return (
    <div className="tweet-editor-buttons">
      <TweetEditorActions />
      <Button />
    </div>
  );
}
