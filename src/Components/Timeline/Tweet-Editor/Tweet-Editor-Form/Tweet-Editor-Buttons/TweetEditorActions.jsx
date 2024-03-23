import Emoji from "../../../../../assets/Icons/Emoji";
import Gif from "../../../../../assets/Icons/Gif";
import Media from "../../../../../assets/Icons/Media";
import Poll from "../../../../../assets/Icons/Poll";
import Schedule from "../../../../../assets/Icons/Schedule";

export default function TweetEditorActions() {
  return (
    <div className="tweet-editor-actions">
      <button>
        <Media />
      </button>
      <button>
        <Gif />
      </button>
      <button>
        <Poll />
      </button>
      <button>
        <Emoji />
      </button>
      <button>
        <Schedule />
      </button>
    </div>
  );
}
