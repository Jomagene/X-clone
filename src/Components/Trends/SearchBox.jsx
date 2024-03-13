import { IconsSearch } from "../../data/icons_images";

export default function SearchBox() {
  return (
    <form className="search-box">
      <img src={IconsSearch} />
      <input placeholder="Search Twitter" />
    </form>
  );
}
