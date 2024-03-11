export default function ItemMenu({ icon, label }) {
  return (
    <div className="item-menu">
      <img src={icon} />
      <span>{label}</span>
    </div>
  );
}
