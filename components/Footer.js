
import Link from 'next/link';

const Footer = () => {
    return ( 



        <div id="footer"  className={styles.footer}>
<div>

        <div className={styles.left_footer}>
          <div>
            <h2>JOIN US ON SOCIAL MEDIA</h2>
  
            <p>
              Immerse yourself even deeper. Visit and join our social channels
              today.
            </p>
          </div>
          <div className={styles.outer_icon_div}>
            <div className={styles.icon_div}>
              <div>
                <Link href="https://www.facebook.com/BMWLebanon" target="_blank"
                  ><img src="icons8-facebook.svg" className={styles.icon}
                /></Link>
              </div>
              <div>
                <Link href="https://instagram.com/bmwlebanon" target="_blank"
                  ><img src="icons8-insta-64.png" className={styles.icon}
                /></Link>
              </div>
              <div>
                <Link href="https://twitter.com/bmw_lebanon/?lang=en" target="_blank"
                  ><img src="icons8-x-50.png" className={styles.icon}
                /></Link>
              </div>
              <div>
                <Link
                  href="https://youtube.com/channel/UCTR2HnPGlj1B2LcfC0ck0RQ"
                  target="_blank"
                  ><img src="icons8-youtube-32.png" className={styles.icon}
                /></Link>
              </div>
            </div>
          </div>
        </div>
  
        <div className={styles.right_footer}>
          <div>
            <h2>Explore BMW</h2>
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
            <Link href="https://www.bmw-lebanon.com/news-events/" target="_blank">
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
}
 
export default Footer;