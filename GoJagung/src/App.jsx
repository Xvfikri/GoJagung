import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";


import HomePage from "./pages/HomePage";
import LayananPage from "./pages/LayananPage";
import MediaPartnerPage from "./pages/MediaPartnerPage";
import ArtikelPage from "./pages/ArtikelPage";


function App() {
    return (
    <div>
        <NavbarComponent />

        <Routes>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/layanan" Component={LayananPage}></Route>
            <Route path="/mediapartner" Component={MediaPartnerPage}></Route>
            <Route path="/artikel" Component={ArtikelPage}></Route>
        </Routes>


        {/* <FooterComponent/> */}
    </div>

    );

}
export default App
