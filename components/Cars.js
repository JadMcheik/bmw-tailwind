import Link from "next/link";

const Cars = () => {
  return (
    <div className="py-[40px] px-[0px] flex flex-col flex-nowrap items-center box-border max-700:py-[20px] px-[0px]">
      <div className="text-center text-menu-link-hover italic pt-[10px] pb-[30px] font-georgia box-border ">
        <h1>Check our new Collection!</h1>
      </div>

      <div className="grid grid-cols-4 w-full justify-evenly justify-items-center gap-y-[15px] box-border min-2000:max-w-[2000px] max-1300:grid-cols-2 max-700:grid-cols-1">
        <div className="bg-item-bg-color cursor-pointer flex flex-col flex-nowrap w-[300px] box-border border border-solid border-gray-300 drop-shadow-custom text-custom-dark-blue transition duration-300 hover:border-solid hover:border-black  min-2000:w-[400px] max-700:w-[400px] max-500:w-[300px]">
          <div className="w-full h-[200px] box-border ">
            <img
              src="the-m4-csl.webp"
              className="w-full h-full object-cover box-border"
            />
          </div>
          <div className="py-[20px] px-[10px] ">
            <div>
              <h2 className="m-[10px]">The M4 CSL</h2>

              <Link
                href="https://www.bmw-lebanon.com/models/the-m4-csl/"
                target="_blank"
                className="m-[10px] hover:text-menu-link-hover  "
              >
                Discover now
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-item-bg-color cursor-pointer flex flex-col flex-nowrap w-[300px] box-border border border-dotted border-gray-300 drop-shadow-custom text-custom-dark-blue transition duration-200 hover:border-solid hover:border-black  min-2000:w-[400px] max-700:w-[400px] max-500:w-[300px]">
          <div className="w-full h-[200px] box-border">
            <img
              src="the-z4.webp"
              className="w-full h-full object-cover box-border"
            />
          </div>
          <div className="py-[20px] px-[10px] ">
            <div>
              <h2 className="m-[10px]">The Z4</h2>

              <Link
                href="https://www.bmw-lebanon.com/models/thez4/"
                target="_blank"
                className="m-[10px] hover:text-menu-link-hover  "
              >
                Discover now
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-item-bg-color cursor-pointer flex flex-col flex-nowrap w-[300px] box-border border border-dotted border-gray-300 drop-shadow-custom text-custom-dark-blue transition duration-200 hover:border-solid hover:border-black  min-2000:w-[400px] max-700:w-[400px] max-500:w-[300px]">
          <div className="w-full h-[200px] box-border">
            <img
              src="the-i7.webp"
              className="w-full h-full object-cover box-border"
            />
          </div>
          <div className="py-[20px] px-[10px] ">
            <div>
              <h2 className="m-[10px]">The i7</h2>

              <Link
                href="https://www.bmw-lebanon.com/the-i7/"
                target="_blank"
                className="m-[10px] hover:text-menu-link-hover  "
              >
                Discover now
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-item-bg-color cursor-pointer flex flex-col flex-nowrap w-[300px] box-border border border-dotted border-gray-300 drop-shadow-custom text-custom-dark-blue transition duration-200 hover:border-solid hover:border-black  min-2000:w-[400px] max-700:w-[400px] max-500:w-[300px]">
          <div className="w-full h-[200px] box-border">
            <img
              src="the-gran2-coupe.webp"
              className="w-full h-full object-cover box-border"
            />
          </div>
          <div className="py-[20px] px-[10px] ">
            <div>
              <h2 className="m-[10px]">The 2 Gran Coupe</h2>

              <Link
                href="https://www.bmw-lebanon.com/models/the2grancoupef-44/"
                target="_blank"
                className="m-[10px] hover:text-menu-link-hover  "
              >
                Discover now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
