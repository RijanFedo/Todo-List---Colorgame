import { useState } from "react";

function Counter() {
  const [like, setLike] = useState(0);
  return (
    <div>
      <p>{like}</p>
      <h2 onClick={() => setLike(like + 1)}>❤️</h2>
    </div>
  );
}

export default Counter;
