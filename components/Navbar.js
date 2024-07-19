import Link from "next/link";
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <div className=" px-[30px] py-[30px] flex flex-row flex-nowrap items-center justify-center bg-custom-bg-color  box-border font-customFont max-1300:px-[20px] py-[20px] max-500:px-[31px] py-[15px] max-400:px-[20px] py-[10px]  ">
      <div className=" flex flex-row flex-nowrap items-center justify-between w-full max-w-[2000px] box-border   min-1500:w-[2000px] ">
        <div className="box-border  ">
          <Link href="/">
            <img
              src="BMWlogo.svg"
              className="w-[200px] object-cover box-border  max-700:w-[150px] max-500:w-[100px] max-400:w-[80px]"
            />{" "}
          </Link>
        </div>

        <div className="flex flex-row flex-nowrap items-center justify-around box-border w-[400px] text-lg font-bold   min-1500:w-[600px] px-[20px] max-700:w-[300px] text-lg max-500:hidden ">
          <div className=" text-link-color box-border duration-200   hover:text-custom-dark-blue ">
            <Link href="/"> Home </Link>
          </div>
          <div className="text-link-color box-border duration-200  hover:text-custom-dark-blue">
            <Link href="#Sign-in"> Sign in </Link>
          </div>
          <div className="text-link-color  box-border duration-200 hover:text-custom-dark-blue">
            <Link href="#footer"> Discover us</Link>
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
