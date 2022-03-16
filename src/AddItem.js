function AddItem({ newItem, setNewItem, handleSubmit }) {
  const styles = { margin: "10px" };
  return (
    <div>
      <input
        style={styles}
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Add
      </button>
    </div>
  );
}

export default AddItem;
