

const SignIn = () => {
    return ( 



        <div className="flex items-center justify-center bg-custom-bg-color mt-[20px] mb-[20px] pt-[20px] pb-[20px]">
        <div id="Sign-in" className=" font-sign-in-font w-[70%] p-[20px] flex flex-col flex-nowrap items-center justify-between font-bold bg-custom-bg-color max-w-[1800px] text-custom-dark-blue max-700:p-[0px] w-[400px] max-500:w-[300px]">
          <div className="w-full p-[15px] flex flex-row items-center justify-evenly max-700:flex flex-col flex-nowrap ">
            <h1><span>SIGN IN</span></h1>
          </div>
          <div className="w-full p-[15px] flex flex-row items-center justify-evenly  flex-nowrap max-700:flex-col">
            <div className="w-full p-[5px] flex flex-col items-start justify-between flex-nowrap">
              <div className="w-full p-[5px] flex flex-col items-start justify-between max-1300:p-[0px] flex-nowrap">
                <div className="w-full p-[5px] flex flex-col items-start justify-between flex-nowrap"><span>First name</span></div>
                <div className="w-full p-[5px] flex flex-col items-start justify-between flex-nowrap"><input type="text" className="w-full h-[40px] border border-black max-700:h-[32px]" /></div>
              </div>
  
              <div className="w-full p-[5px] flex flex-col items-start justify-between max-1300:p-[0px] flex-nowrap">
                <div className="w-full p-[5px] flex flex-col items-start justify-between flex-nowrap"><span>Last name</span></div>
                <div className="w-full p-[5px] flex flex-col items-start justify-between flex-nowrap" > <input type="text" className="w-full h-[40px] border border-black max-700:h-[32px]" /></div>
              </div>
            </div>
  
            <div className="w-full p-[5px] flex flex-col items-start justify-between flex-nowrap">
              <div className="w-full p-[5px] flex flex-col items-start justify-between max-1300:p-[0px] flex-nowrap">
                <div className="w-full p-[5px] flex flex-col items-start justify-between flex-nowrap"><span>Email address</span></div>
                <div className="w-full p-[5px] flex flex-col items-start justify-between flex-nowrap"><input type="email" className="w-full h-[40px] border border-black max-700:h-[32px]" /></div>
              </div>
  
              <div className="w-full p-[5px] flex flex-col items-start justify-between max-1300:p-[0px] max-700:flex flex-col flex-nowrap">
                <div className="w-full p-[5px] flex flex-col items-start justify-between flex-nowrap"><span>Password</span></div>
                <div className="w-full p-[5px] flex flex-col items-start justify-between flex-nowrap"><input type="password" className="w-full h-[40px] border border-black max-700:h-[32px]" /></div>
              </div>
            </div>
          </div>
          <div className="w-full p-[15px] flex flex-row items-center justify-evenly max-700:flex flex-col flex-nowrap">
            <div className="group flex items-center justify-center h-[50px] border-[3px] border-solid border-menu-link-hover rounded-[20px] mt-[10px] w-[30%] transition duration-[400ms] hover:cursor-pointer hover:bg-menu-link-hover active:transform active:translate-x-1 active:translate-y-1 max-700:flex flex-col flex-nowrap"><input type="submit" value="Sign In" className="border-0 bg-custom-bg-color mt-[3px] mb-[3px] mr-[8px] ml-[8px] text-black transition duration-[400ms] hover:cursor-pointer group-hover:bg-menu-link-hover group-hover:text-white " /></div>
          </div>
        </div>
      </div>
  





     );
}
 
export default SignIn;