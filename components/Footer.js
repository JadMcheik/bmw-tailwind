import Link from "next/link";

const Footer = () => {
  return (
    <div
      id="footer"
      className="text-custom-dark-blue font-footer-font pt-[40px] pb-[40px] pr-[20px] pl-[20px] flex flex-row flex-nowrap items-center justify-center"
    >
      <div className="flex flex-row flex-nowrap w-full max-w-[2000px]">
        <div className="w-1/2 flex flex-col flex-nowrap border-r border-dotted border-custom-dark-blue ">
          <div>
            <h2>JOIN US ON SOCIAL MEDIA</h2>

            <p>
              Immerse yourself even deeper. Visit and join our social channels
              today.
            </p>
          </div>
          <div className="flex justify-between w-full ">
            <div className="grid grid-cols-4 justify-items-center align-content-start w-[60%] max-700:w-[70%]  items-center justify-items-center max-500:grid-cols-2 ">
              <div className="flex items-center justify-center p-2.5 border-[2px] border-item-bg-color transition duration-700 hover:transform hover:scale-110 hover:border-solid hover:border-light-blue max-1300:p-[7px] max-1000:p-[5px] max-500:p-[3px] ">
                <Link
                  href="https://www.facebook.com/BMWLebanon"
                  target="_blank"
                  className="flex items-center justify-center max-700:p-[5px]"
                >
                  <img src="icons8-facebook.svg" className="min-1300:w-[50px] min-1300:h-[50px] max-1300:w-[45px] max-1300:h-[45px] max-1000:w-[40px] max-1000:h-[40px] max-700:w-[30px] max-700:h-[30px] max-500:w-[20px] max-500:h-[20px]" />
                </Link>
              </div>
              <div className="flex items-center justify-center p-2.5 border-[2px] border-item-bg-color transition duration-700 hover:transform hover:scale-110 hover:border-solid hover:border-light-blue max-1300:p-[7px] max-1000:p-[5px] max-500:p-[3px]">
                <Link className="flex items-center justify-center max-700:p-[5px]" href="https://instagram.com/bmwlebanon" target="_blank">
                  <img src="icons8-insta-64.png" className="min-1300:w-[50px] min-1300:h-[50px] max-1300:w-[45px] max-1300:h-[45px] max-1000:w-[40px] max-1000:h-[40px] max-700:w-[30px] max-700:h-[30px] max-500:w-[20px] max-500:h-[20px]"/>
                </Link>
              </div>
              <div className="flex items-center justify-center p-2.5 border-[2px] border-item-bg-color transition duration-700 hover:transform hover:scale-110 hover:border-solid hover:border-light-blue max-1300:p-[7px] max-1000:p-[5px] max-500:p-[3px]">
                <Link
                  href="https://twitter.com/bmw_lebanon/?lang=en"
                  target="_blank"
                  className="flex items-center justify-center max-700:p-[5px]">
                  <img src="icons8-x-50.png" className="min-1300:w-[50px] min-1300:h-[50px] max-1300:w-[45px] max-1300:h-[45px] max-1000:w-[40px] max-1000:h-[40px] max-700:w-[30px] max-700:h-[30px] max-500:w-[20px] max-500:h-[20px]"/>
                </Link>
              </div>
              <div className="flex items-center justify-center p-2.5 border-[2px] border-item-bg-color transition duration-700 hover:transform hover:scale-110 hover:border-solid hover:border-light-blue max-1300:p-[7px] max-1000:p-[5px] max-500:p-[3px]">
                <Link
                  href="https://youtube.com/channel/UCTR2HnPGlj1B2LcfC0ck0RQ"
                  target="_blank"
                  className="flex items-center justify-center max-700:p-[5px]" >
                  <img src="icons8-youtube-32.png" className="min-1300:w-[50px] min-1300:h-[50px] max-1300:w-[45px] max-1300:h-[45px] max-1000:w-[40px] max-1000:h-[40px] max-700:w-[30px] max-700:h-[30px] max-500:w-[20px] max-500:h-[20px]"/>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-start pl-[40px] ">
          <div>
            <h2>EXPLORE BMW</h2>
          </div>

          <div>
            <Link href="https://www.bmw-lebanon.com/owners/" target="_blank">
              <p>Owners</p>
            </Link>
            <Link
              href="https://www.bmw-lebanon.com/corporate-sales/"
              target="_blank"
            >
              <p>BMW Corporate Sales</p>
            </Link>
            <Link
              href="https://www.bmw-lebanon.com/news-events/"
              target="_blank"
            >
              <p>News & Events</p>
            </Link>
            <Link href="https://www.bmw-lebanon.com/site/map/" target="_blank">
              <p>Site Map</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
