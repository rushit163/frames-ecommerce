import IndividualItem from "./individualitem";

const ProductList = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex w-full justify-between items-center">
        <span className="text-lg">Your Cart:  ₹17,980</span>
        <button className="py-2 px-10 bg-black text-primary rounded-full">
          Check Out
        </button>
      </div>
      <hr />
      <IndividualItem/>
      <IndividualItem/>
      <IndividualItem/>
      <IndividualItem/>
    </div>
  );
};

export default ProductList;
