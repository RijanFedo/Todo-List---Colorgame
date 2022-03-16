import LineItem from "./LineItem";
function ListItem({ items, handleClick, handleDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
export default ListItem;
