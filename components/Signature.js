import Link from "next/link";

const Signature = () => {
  return (
    <div className={styles.signature}>

      <div>
      This page was powered by
      <Link
        href="https://www.linkedin.com/in/jad-mcheik-870a9b292/"
        target="_blank"
      >
        Jad Mcheik{" "}
      </Link>
      as an example about navbar, banner, grid cards, form and footer with the
      assistance of a CreoHub team member
    
      </div>
    </div>
  );
};

export default Signature;
