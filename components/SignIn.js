

const SignIn = () => {
    return ( 



        <div className={styles.outer_sign_in}>
        <div id="Sign-in" className={styles.sign_in}>
          <div>
            <h1><span>SIGN IN</span></h1>
          </div>
          <div className={styles.form_info}>
            <div>
              <div>
                <div><span>First name</span></div>
                <div><input type="text" /></div>
              </div>
  
              <div>
                <div><span>Last name</span></div>
                <div><input type="text" /></div>
              </div>
            </div>
  
            <div>
              <div>
                <div><span>Email address</span></div>
                <div><input type="email" /></div>
              </div>
  
              <div>
                <div><span>Password</span></div>
                <div><input type="password" /></div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.submit_div}><input type="submit" value="Sign In" /></div>
          </div>
        </div>
      </div>
  





     );
}
 
export default SignIn;