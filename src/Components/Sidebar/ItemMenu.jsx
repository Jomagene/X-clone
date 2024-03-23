export default function ItemMenu({ icon, label }) {
  return (
    <div className="item-menu">
      {icon}
      <span>{label}</span>
    </div>
  );
}
