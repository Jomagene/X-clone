import ItemMenu from "./Sidebar/ItemMenu";
import pages from "../data/menus";
import Button from "./Timeline/Tweet-Editor/Tweet-Editor-Form/Tweet-Editor-Buttons/Button";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {pages.map((element, index) => (
        <ItemMenu key={index} label={element.label} icon={element.icon} />
      ))}
      <Button msg="Tweet" />
    </div>
  );
}
