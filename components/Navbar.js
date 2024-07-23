import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className=" p-4  md:p-5    lg:p-6  2xl:p-8             flex flex-nowrap items-center justify-center bg-custom-bg-color font-customFont  ">
      <div className=" flex flex-nowrap items-center justify-between w-full 2xl:container mx-auto ">
        <div className=" w-24 sm:w-36 md:w-52    ">
          <Link href="/">
            <img
              src="BMWlogo.svg"
             
            />{" "}
          </Link>
        </div>

        <div className="hidden sm:flex flex-nowrap items-center justify-around text-lg font-bold pl-7  2xl:pl-5  ">
          <div className=" text-link-color px-4 ">
            <Link href="/" className="  duration-200  hover:text-custom-dark-blue"> Home </Link>
          </div>
          <div className="text-link-color px-4 ">
            <Link href="#Sign-in" className="  duration-200  hover:text-custom-dark-blue "> Sign in </Link>
          </div>
          <div className="text-link-color  px-4">
            <Link href="#footer" className="  duration-200  hover:text-custom-dark-blue"> Discover us</Link>
          </div>
        </div>

        <nav role="navigation" className={styles.navigation}>
          <div id={styles.menu_toggle}>
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id={styles.menu}>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="#Sign-in">
                <li>Sign in</li>
              </Link>
              <Link href="#footer">
                <li>Discover us</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
