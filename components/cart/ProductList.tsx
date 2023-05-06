import IndividualItem from "./IndividualItem";
import { Products } from "@/utils/constants";
const ProductList = () => {
  return (
    <div className="w-[80vw]">
      <div className="">
      <header className="text-center">
        <h1 className="text-xl font-semibold text-gray-900 sm:text-3xl font-primary">Your Cart</h1>
      </header>
      <div className="mt-8">
      <ul className="flex flex-col w-full space-y-4">
      {Products.map((item, index)=>{
        return(
        <li key={index}>
          <IndividualItem Name={item.name} id={item.id} productName={item.productName} qty={item.quantity} price={item.price} key={item.id}/>
        </li>)
      })}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default ProductList;
