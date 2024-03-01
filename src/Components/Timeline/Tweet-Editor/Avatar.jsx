import { ProfilePhoto } from "../../../data/icons_images";

export default function Avatar() {
  return (
    <div className="Avatar">
      <img src={ProfilePhoto} alt="Profile picture" />
    </div>
  );
}
