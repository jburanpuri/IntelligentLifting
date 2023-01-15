import Navbar from './NavbarComponent/navbar'
import Footer from './FooterComponent/footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}