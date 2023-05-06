import Image from "next/image";
import { useState } from "react";
interface Props{
    id: Number,
    Name : String,
    productName : String,
    qty:Number,
    price:Number,
    key:Number
}

const IndividualItem = ({key,Name,productName,price}:Props) => {
    let quantity = 1
    let [qty,setQty] = useState(quantity)
    const increament = ()=>{
      setQty(++qty)
    }
    const decrement = ()=>{
      if(qty===1){
      setQty(qty)
      }else{
      setQty(--qty)
      }
    }
    return (
      <div className="flex items-center gap-4">
      <Image
        src="https://cdn.shopify.com/s/files/1/0015/2879/1092/products/1_ce06b41c-b076-414b-8c4c-16739d2a0835_1024x.jpg?v=1662905390"
        width={100}
        height={100}
        alt=""
        className="rounded object-cover"
      />

      <div>
        <h3 className="text-lg text-semibold text-gray-900">{productName}</h3>

        <dl className="mt-0.5 space-y-px text-sm text-gray-600">
          <div>
            Price : {`${price}`}
          </div>

          <div>
            {`${Name}`}
          </div>
        </dl>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
          <button 
          className="py-1 px-3 border-2 border-indigo-500 text-indigo-500 font-medium rounded-lg text-lg text-center inline-flex items-center mr-2 hover:bg-indigo-500 hover:text-white  transform transition-all duration-400 ease-in-out hover:scale-105 hover:ease-out"
          onClick={increament}
          >+
          </button>
          <input
            type="number"
            id="Line1Qty"
            className="h-8 mr-2 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
         
            value={qty}
          />
          <button 
          className="py-1 px-3 border-2 border-indigo-500 text-indigo-500 font-medium rounded-lg text-lg text-center inline-flex items-center mr-2 hover:bg-indigo-500 hover:text-white  transform transition-all duration-400 ease-in-out hover:scale-105 hover:ease-out"
          onClick={decrement}
          >-
          </button>
        <button className="text-gray-600 transition hover:text-red-600">
          <span className="sr-only">Remove item</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
    );
  };
  
  export default IndividualItem;
  