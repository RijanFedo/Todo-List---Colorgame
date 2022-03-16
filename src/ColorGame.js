import { useState } from "react";

function ColorGame() {
  const [colors, setColors] = useState([]);
  const styles = { margin: "10px" };
  const [newColor, setNewColor] = useState();
  return (
    // <div>
    //   <h1>ColorGame</h1>
    //   <input
    //     style={styles}
    //     type="text"
    //     placeholder="Add Color:"
    //     onChange={(e) => setColors(e.target.value)}
    //   />
    //   <button>Add</button>
    //   <div
    //     style={{
    //       backgroundColor: colors,
    //       width: "300px",
    //       padding: "10px",
    //       margin: "10px",
    //     }}
    //   >
    //     <span></span>
    //   </div>
    // </div>
    <div>
      <h1>ColorGame</h1>
      <input
        style={styles}
        type="text"
        placeholder="Add Color:"
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
      />
      <button onClick={() => setColors([...colors, newColor])}>Add</button>
      {colors.length ? (
        <div>
          {colors.map((color) => (
            <div
              style={{
                backgroundColor: color,
                width: "300px",
                padding: "10px",
                margin: "10px",
              }}
            >
              <span></span>
            </div>
          ))}
        </div>
      ) : (
        <p>No Colors !</p>
      )}
    </div>
  );
}
export default ColorGame;
