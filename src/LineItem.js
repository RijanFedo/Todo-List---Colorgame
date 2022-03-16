function LineItem({ item, handleClick, handleDelete }) {
  return (
    <li>
      <input
        onClick={() => handleClick(item.id)}
        type="checkbox"
        checked={item.checked}
      />
      <label onDoubleClick={() => handleClick(item.id)}>{item.name}</label>
      <button onClick={() => handleDelete(item.id)}>#</button>
    </li>
  );
}
export default LineItem;
