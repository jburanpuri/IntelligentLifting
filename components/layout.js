import Navbar from './NavbarComponent/navbar'
import Banner from './BannerComponent/banner'
import Footer from './FooterComponent/footer'

export default function Layout({ children }) {
  return (
    <>
      <Banner />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}