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
        "https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg",
      imageAlt: "Veggies",
    },
    {
      id: 2,
      name: "Blue Zero",
      href: "#",
      price: "$35",
      imageSrc:
        "https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg",
      imageAlt: "Veggies",
    },
    {
      id: 3,
      name: "Blue Zero",
      href: "#",
      price: "$89",
      imageSrc:
        "https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg",
      imageAlt: "Veggies",
    },
    {
      id: 4,
      name: "Happster",
      href: "#",
      price: "$35",
      imageSrc:
        "https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg",
      imageAlt: "Veggies",
    },
    {
      id: 5,
      name: "Happster",
      href: "#",
      price: "$35",
      imageSrc:
        "https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg",
      imageAlt: "Veggies",
    },
    {
      id: 6,
      name: "Happster",
      href: "#",
      price: "$35",
      imageSrc:
        "https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg",
      imageAlt: "Veggies",
    },
    {
      id: 7,
      name: "Happster",
      href: "#",
      price: "$35",
      imageSrc:
        "https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg",
      imageAlt: "Veggies",
    },
    {
      id: 8,
      name: "Happster",
      href: "#",
      price: "$35",
      imageSrc:
        "https://assets.website-files.com/62b14afe3c1bf49d35ec8beb/62ba7dd88326f56afb8fc51a_menu-12.jpg",
      imageAlt: "Veggies",
    },
  ];

  return (
    <>
    <div className="flex flex-col items-center mt-20">
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

      <div id="products" className="mx-auto max-w-2xl px-4  sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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
