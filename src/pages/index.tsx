import { Cart } from "../features/cart/CartList";

export const TestH1 = () => {
  return (
    <div className="w-[300px] h-[200px] bg-white/65">
      <h1 className="text-2xl font-bold text-blue-600">
        Lorem ipsum dolor sit amet.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        reprehenderit?
      </p>
      <span>BD:462</span>
      <Cart title="tis is my cart" age={353} />
    </div>
  );
};
