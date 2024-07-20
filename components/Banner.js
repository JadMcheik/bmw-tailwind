const Banner = () => {
  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-cover bg-no-repeat backdrop-filter backdrop-blur-[2px]   bg-[url('/bmw-image.webp')] box-border  min-1500:h-[800px] max-1300:h-[600px]  ">
      <div className="w-[1000px] p-[30px] text-custom-bg-color border border-white border-solid  bg-black bg-opacity-40 text-center font-Poland box-border min-1500: w-auto px-[80px] py-[80px] max-w-[2000px] max-1300:w-[800px] px-[30px] py-[30px]  max-1000:w-[600px] p-[60px]   text-lg max-700:w-[400px] p-[15px] text-[10px]  max-500:w-[315px] text-[7px] max-400:w-[250px] p-[5px] text-[5px] ">
        <div>
          <h1 className="py-[5px] max-400:text-[15px]">Welcome to our website</h1>
        </div>

        <div>
          <h3 className="max-400:text-[10px]">Rely on us to choose for you the best car you can get!</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
