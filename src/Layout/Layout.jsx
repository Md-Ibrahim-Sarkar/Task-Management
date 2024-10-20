

import Banner from "../Sections/Banner/Banner";
import Footer from "../Sections/Footer/Footer";
import Header from "../Sections/Header/Header"
import TableBody from "../Sections/Table/TableBody";


function Layout() {
  return (
    <div>
      <div className="border-b-2">
        <Header />
      </div>
      <div className="container mx-auto">
        <Banner />
        <TableBody />
        <Footer />

        

        
        
      </div>
    </div>
  );
}

export default Layout