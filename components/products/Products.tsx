import { useState } from "react";
import Cards from "./Cards";


export default function Products() {

  // const [categories, setCategories] = useState([
  //   "Bakery",
  //   "Baking",
  //   "Beverages",
  //   "Canned and Packaged Foods",
  //   "Dairy",
  //   "Deli",
  //   "Frozen Foods",
  //   "Health and beauty",
  //   "Household Supplies",
  //   "Personal Care",
  //   "Snacks and Sweets",
  //   "Veggies and Fruits",
  // ]);

  const products = [
    {
      id: 1,
      name: "Blue Zero",
      href: "#",
      price: "$48",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/1_e6f43647-5bb6-4773-9dae-85feeab650ec_1024x.jpg?v=1662905907",
      imageAlt: "Veggies",
    },
    {
      id: 2,
      name: "Blue Zero",
      href: "#",
      price: "$35",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/1_00fbc989-d682-418a-adbf-4b54866d226a_1024x.jpg?v=1662906285",
      imageAlt: "Veggies",
    },
    {
      id: 3,
      name: "Blue Zero",
      href: "#",
      price: "$89",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/1_b5bc2f5e-0207-4325-8b05-7ed443085fd5_1024x.jpg?v=1662906682",
      imageAlt: "Veggies",
    },
    {
      id: 4,
      name: "Happster",
      href: "#",
      price: "$35",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/1_4277f171-c78c-4367-9ad0-18673cdd2966_1024x.jpg?v=1662906906",
      imageAlt: "Veggies",
    },
    {
      id: 5,
      name: "Happster",
      href: "#",
      price: "$35",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/1_ce06b41c-b076-414b-8c4c-16739d2a0835_1024x.jpg?v=1662905390",
      imageAlt: "Veggies",
    },
    {
      id: 6,
      name: "Happster",
      href: "#",
      price: "$35",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/1_7df8f65b-be49-4116-812c-7a489ea5b011_1024x.jpg?v=1662905010",
      imageAlt: "Veggies",
    },
    {
      id: 7,
      name: "Happster",
      href: "#",
      price: "$35",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/1_20fb8d4a-a729-4968-aa87-d5b44717f739_1024x.jpg?v=1662904834",
      imageAlt: "Veggies",
    },
    {
      id: 8,
      name: "Happster",
      href: "#",
      price: "$35",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/1_34f5f883-7e77-4680-853f-ad064d01cc50_1024x.jpg?v=1674755564",
      imageAlt: "Veggies",
    },
  ];

  return (
    <>
    <div id="products" className="flex flex-col items-center mt-20">
      <h1 className="text-5xl font-bold">
        Checkout our <span className="italic">latest</span> & <span className="italic">trendy</span> frames 
      </h1>
      <p className="text-3xl ">
        A wide range of collection of frames
      </p>
    </div>

      {/* <div className="flex items-center justify-center">
        <span className="ml-10 font-secondaryFont text-primaryText">
          Shop by category:
        </span>
        <div className="z-20 p-10">
          <div className="dropdown relative inline-block">
            <button className="inline-flex items-center rounded bg-secondaryBg px-4 py-2 font-semibold text-gray-700">
              <span className="mr-1">Choose Categories</span>
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu absolute bg-primary flex-col gap-2 pt-1 text-primaryText hidden">
              {categories.map((word, index) => (
                <li className="" key={index}>
                  <a
                    className="whitespace-no-wrap block rounded-t bg-secondary px-4 py-2 hover:bg-green-200"
                    href="#"
                  >
                    {word}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}

      <div className="mx-auto max-w-2xl px-4  sm:py-24 sm:px-6 lg:max-w-full lg:px-20 ">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <Cards key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}
