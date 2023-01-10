import Copyright from "../Copyright";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";

const WebLayout = ({ children }) => {
  return (
    <div className="h-screen">
      <Header />
      <Navbar />
      {children}
      <Footer />
      <Copyright />
    </div>
  );
};

export default WebLayout;
