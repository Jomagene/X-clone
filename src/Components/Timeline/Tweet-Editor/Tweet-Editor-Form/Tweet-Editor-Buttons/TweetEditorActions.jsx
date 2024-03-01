import {
  Media,
  Gif,
  Emoji,
  Poll,
  Schedule,
} from "../../../../../data/icons_images";

export default function TweetEditorActions() {
  return (
    <div className="tweet-editor-actions">
      <button>
        <img src={Media} alt="Media Icon" />
      </button>
      <button>
        <img src={Gif} alt="Gif Icon" />
      </button>
      <button>
        <img src={Poll} alt="Poll Icon" />
      </button>
      <button>
        <img src={Emoji} alt="Emoji Icon" />
      </button>
      <button>
        <img src={Schedule} alt="Schedule Icon" />
      </button>
    </div>
  );
}
