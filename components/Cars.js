
import Link from 'next/link';


const Cars = () => {
    return (  

        <div className={styles.cars}>
        <div className={styles.cars_title}>
          <h1>Check our new Collection!</h1>
        </div>
  
        <div className={styles.main_container}>
          <div className={styles.item}>
            <div className={styles.big_img_div}>
              <img src="the-m4-csl.webp" />
            </div>
            <div className={styles.big_container}>
              <div>
                <h2>The M4 CSL</h2>
  
                <Link
                  href="https://www.bmw-lebanon.com/models/the-m4-csl/"
                  target="_blank"
                >
                  Discover now
                </Link>
              </div>
            </div>
          </div>
  
          <div className={styles.item}>
            <div className={styles.big_img_div}>
              <img src="the-z4.webp" />
            </div>
            <div className={styles.big_container}>
              <div>
                <h2>The Z4</h2>
  
                <Link
                  href="https://www.bmw-lebanon.com/models/thez4/"
                  target="_blank"
                >
                  Discover now
                </Link>
              </div>
            </div>
          </div>
  
          <div className={styles.item}>
            <div className={styles.big_img_div}>
              <img src="the-i7.webp" />
            </div>
            <div className={styles.big_container}>
              <div>
                <h2>The i7</h2>
  
                <Link href="https://www.bmw-lebanon.com/the-i7/" target="_blank">
                  Discover now
                </Link>
              </div>
            </div>
          </div>
  
          <div className={styles.item}>
            <div className={styles.big_img_div}>
              <img src="the-gran2-coupe.webp" />
            </div>
            <div className={styles.big_container}>
              <div>
                <h2>The 2 Gran Coupe</h2>
  
                <Link
                  href="https://www.bmw-lebanon.com/models/the2grancoupef-44/"
                  target="_blank"
                >
                  Discover now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
}
 
export default Cars;