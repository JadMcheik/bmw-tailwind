import Link from "next/link";
const Signature = () => {
  return (
    <div className="bg-custom-bg-color h-fit text-menu-link-hover font-bold p-[20px] min-1500:text-lg min-1500:text-center max-1300:text-base max-700:text-sm">

      <div>
      This page was powered by
      <Link
        href="https://www.linkedin.com/in/jad-mcheik-870a9b292/"
        target="_blank"
     className="text-base max-700:text-sm" >
        Jad Mcheik{" "}
      </Link>
      as an example about navbar, banner, grid cards, form and footer with the
      assistance of a CreoHub team member
    
      </div>
    </div>
  );
};

export default Signature;
