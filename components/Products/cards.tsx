import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  href: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

interface Props {
  product: Product;
}
const Cards = ({ product }: Props) => {
  return (
    <div
      key={product.id}
      // href={product.href}
      className="bg-primary shadow-lg rounded-lg sm:w-full w-3/5 justify-self-center transform transition-all duration-400 ease-in-out hover:scale-105 hover:ease-out"
    >
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          width={500}
          height={100}
          src={product.imageSrc}
          alt={product.imageAlt}
          className="w-full object-contain"
        />
      </div>

      <div className="flex justify-between p-4">
        <div className="flex flex-col gap-5">
          <div className="">
            <h3 className="mt-4 text-xl text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {product.price}
            </p>
          </div>
        </div>

        <div  className="flex items-end">
          <button
            type="button"
            className="py-2 px-5 text-white bg-secondary focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm  text-center inline-flex items-center mr-2"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Buy now
          </button>
        </div>

        {/* <div
                    className="group relative inline-block pt-1 text-lg"
                    // onClick={() => handleAddToCart(product)}
                  >
                    <span className="relative z-10 block cursor-pointer overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-primaryText">
                      <button className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3"></button>
                      <span className="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-secondaryBg transition-all duration-300 group-hover:-rotate-180"></span>
                      <span className="relative"></span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </div> */}
      </div>
    </div>
  );
};

export default Cards;
