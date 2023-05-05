const PriceDetails = () => {
  return (
    <>
      <div className="flex flex-col border-2 border-solid">
        <h3 className="text-gray-500 py-3 font-semibold text-base px-4">
          PRICE DETAILS
        </h3>
        <hr />
        <div className="grid grid-cols-2 px-4 py-2">
          <div className="flex flex-col gap-4">
            <span>Price</span>
            <span>Discount</span>
            <span>Delivery Charges</span>
          </div>

          <div className="flex flex-col gap-4 justify-self-end">
            <span>526969</span>
            <span>6468</span>
            <span>Free</span>
          </div>
        </div>
        <hr className="border-dashed border" />
        <div className="flex justify-between font-bold px-4 text-lg py-2">
          <span>Total Amount</span>
          <span>31997</span>
        </div>
      </div>

      <div className="py-4 flex items-center justify-center">
        <button className="py-2 bg-black text-primary rounded-full w-full">
          Check Out
        </button>
      </div>
    </>
  );
};

export default PriceDetails;
