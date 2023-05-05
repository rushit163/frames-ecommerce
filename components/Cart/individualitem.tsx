import Image from "next/image";


const IndividualItem = () => {
    return (
        <div className="flex border border-solid rounded-md p-2">

        <div className="flex flex-col md:flex-row gap-10 p-6 items-center">
          <Image
            src="/assets/spec.png"
            alt="My Image"
            width={300}
            height={300}
          />

          <div className="flex flex-col gap-2 flex-wrap w-72 items-center text-center">
            <p className="font-bold">
              Specsmakers Blue Zero Unisex Computer Glasses Full Frame Round
              Small 49 Metal TUL034
            </p>
            <p className="text-center w-full">684684688698</p>
          </div>

          <div className="flex gap-4 items-center">
            <div className="rounded-md bg-secondary w-fit h-fit p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width={20}
                height={20}
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c.6 0 1 .4 1 1v7h7c.6 0 1 .4 1 1s-.4 1-1 1h-7v7c0 .6-.4 1-1 1s-1-.4-1-1v-7H4c-.6 0-1-.4-1-1s.4-1 1-1h7V4c0-.6.4-1 1-1z" />
              </svg>
            </div>

            <div className="w-fit h-fit py-[5px]">
              <input className="w-12 border border-gray-400 rounded-md py-[5px] text-center" />
            </div>

            <div className="rounded-md bg-secondary w-fit h-fit p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width={20}
                height={20}
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 13H5v-2h14v2z" />
              </svg>
            </div>
          </div>

          <div className="text-2xl flex flex-col items-center justify-center">
            <span>₹ 1,250</span>
            <span>Black</span>
          </div>
        </div>

        <div className="items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width={20}
            height={20}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    );
  };
  
  export default IndividualItem;
  