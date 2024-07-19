const Banner = () => {
  return (
    <div className="flex items-center justify-center h-[600px] w-full bg-cover bg-no-repeat backdrop-filter backdrop-blur-[2px]   bg-[url('/bmw-image.webp')] box-border  min-1500:h-[800px] max-1300:h-[600px]  ">
      <div className="text-custom-bg-color w-[1000px] border border-white border-solid  bg-black bg-opacity-40 p-[30px] text-center    font-Poland box-border  min-1500:p-[60px] max-w-[1800px]  max-1300:p-[30px] w-[800px] max-1000:p-[60px] w-[600px]  text-lg max-700:p-[15px] text-[10px]  w-[400px] max-500: w-[315px] text-[7px]  max-400:p-[7px] w-[250px] text-[10px]  ">
        <div>
          <h1>Welcome to our website</h1>
        </div>

        <div>
          <h3>Rely on us to choose for you the best car you can get!</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
