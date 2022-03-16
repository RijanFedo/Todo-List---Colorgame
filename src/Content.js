import ListItem from "./ListItem";

function Content({ items, handleClick, handleDelete }) {
  return (
    <div>
      {items.length ? (
        <ListItem
          items={items}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Rijan your list is empty !</p>
      )}
    </div>
  );
}
export default Content;
