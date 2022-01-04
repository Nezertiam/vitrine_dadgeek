import Header from './Header';
import Footer from "./Footer";
import GlobalStyle from '../../assets/style/GlobalStyle';

import "../../assets/bootstrap/css/bootstrap-grid.min.css";
import "../../assets/bootstrap/css/bootstrap-grid.rtl.min.css";
import "../../assets/bootstrap/css/bootstrap-reboot.min.css";
import "../../assets/bootstrap/css/bootstrap-reboot.rtl.min.css";
import "../../assets/bootstrap/css/bootstrap-utilities.min.css";
import "../../assets/bootstrap/css/bootstrap-utilities.rtl.min.css";
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets/bootstrap/css/bootstrap.rtl.min.css";
import MainRouting from './MainRouting';



const Layout = () => {
  return (
    <>
      <GlobalStyle />

      <Header />
      
      <main id="main" class="container-fluid p-0">
          <MainRouting />
      </main>

      <Footer/>

      <script src="../../assets/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="../../assets/bootstrap/js/bootstrap.esm.min.js"></script>
      <script src="../../assets/bootstrap/js/bootstrap.min.js"></script>
    </>
  )
}

export default Layout
