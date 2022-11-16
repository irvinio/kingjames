import Navbar from "./Navbar"
import Footer from "./Footer"
import Script from "next/script"

const Layout = ({ children}) => {
  return (
    <>
        <Navbar />
        { children }
        <Footer />
        <Script id="mobilenav" strategy="lazyOnload">
          {`document.addEventListener('click', function(e) {
            const mobilemenu = document.querySelector("#navMenu");
            const burgerbtn = document.querySelector(".navbar-burger");
            if(e.target != burgerbtn) {
              mobilemenu.classList.add('fade-out');
              mobilemenu.classList.remove('fade-in');
            }
          })`}
        </Script>
    </>
  )
}

export default Layout