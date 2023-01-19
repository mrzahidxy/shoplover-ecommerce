import Copyright from "../Copyright";
import Footer from "../Footer";
import Header from "../Header";
import MobileNav from "../MobileNav";
import Navbar from "../Navbar";

const WebLayout = ({ children }) => {
  return (
    <div className="h-screen">
      <Header />
      <Navbar />
      {children}
      <Footer />
      <Copyright />

      <div className="fixed">
        <MobileNav />
      </div>
    </div>
  );
};

export default WebLayout;
