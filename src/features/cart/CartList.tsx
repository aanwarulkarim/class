import { useState } from "react";

export const Cart = ({ title, age }: { title: string; age: number }) => {
  const [NormalStat, SetStat] = useState(false);
  const onClickHendelar = () => {
    SetStat(!NormalStat);
  };

  return (
    <div className="border border-dotted w-[200px] h-[150px]">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p className="text-blue-600">
        Lorem ipsum dolor sit. {title}
        {age}
      </p>
      <button onClick={onClickHendelar}>{NormalStat ? "ON" : "OFF"} </button>
    </div>
  );
};
