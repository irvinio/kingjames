import Navbar from "./Navbar"
import Footer from "./Footer"
import Script from "next/script"

const Layout = ({ children}) => {
  return (
    <>
        <Navbar />
        { children }
        <Footer />
    </>
  )
}

export default Layout