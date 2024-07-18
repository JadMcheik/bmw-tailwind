

import Link from 'next/link';
const Navbar = () => {
    return ( 


        <div className="flex flex-row flex-nowrap items-center justify-center bg-navbar-bg-color p-[30px] box-border font-customFont max-1300:p[20px] max-500:py-[15px] px-[30px] max-400:py-[10px] px-[20px]">

      <div className=" flex flex-row flex-nowrap items-center justify-between w-full max-w-screen-2xl box-border   min-1500:w-[2000px] ">


        <div className=" duration-300 ">
          <Link href="/"><img src="BMWlogo.svg" className="w-52 object-cover  max-700:w-[150px] max-500:w-[100px] max-400:w-[80px]" /> </Link>
        </div>
  
        <div className="flex flex-row flex-nowrap items-center justify-around box-border w-[400px] text-xl font-bold  font-navbarFont min-1500:w-[600px] px-5  max-700:w-[300px] text-lg max-500:hidden ">
          <div className=" text-link-color box-border  hover:text-custom-dark-blue "><Link href="/"> Home </Link></div>
          <div className="text-link-color box-border  hover:text-custom-dark-blue"><Link href="#Sign-in"> Sign in </Link></div>
          <div className="text-link-color  box-border hover:text-custom-dark-blue"><Link href="#footer"> Discover us</Link></div>
        </div>
  
        <nav role="navigation" className="navigation">
          <div id="menu_toggle">
        
            <input type="checkbox" />
  
          
            <span></span>
            <span></span>
            <span></span>
  
       
           
            <ul id="menu">
              <Link href="/"><li>Home</li></Link>
              <Link href="#Sign-in"><li>Sign in</li></Link>
              <Link href="#footer"><li>Discover us</li></Link>
            </ul>
          </div>
        </nav>

        </div>
      </div>

     );
}
 
export default Navbar;