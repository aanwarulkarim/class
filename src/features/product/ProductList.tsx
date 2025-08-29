import { useState } from "react";

export const ProdactCart = () => {
  const [SetState, FnState] = useState(false);

  return (
    <div>
      {SetState == true ? (
        <p>Hello i'm from p tag </p>
      ) : (
        <h2>hello i'm from h2 tag</h2>
      )}
      <button className="" onClick={() => FnState(!SetState)}>
        click me
      </button>
    </div>
  );
};
