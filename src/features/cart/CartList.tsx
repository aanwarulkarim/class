import type { ReactNode } from "react";
import { Button } from "../../component/common/Button";
import { ProdactCart } from "../product/ProductList";

export const FirstTest = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[400px] h-[300px] border border-black/60 rounded-2xl  mt-20 flex m-auto">
      <div className="m-auto h-[300px] w-[250px] mt-10">
        <h1 className="font-bold text-[22px]">Lorem ipsum dolor</h1>
        <div className="w-[100px] h-[80px] border border-red-600 my-3"></div>
        <p className="text-[15px] text-gray-700 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <span className="font-bold text-[18px]">BD : 364 TK</span>
        <Button Title="Hello this is our title">
          <ProdactCart></ProdactCart>
        </Button>
        {children}
      </div>
    </div>
  );
};
