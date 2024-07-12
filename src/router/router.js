import { Routes, Route } from "react-router-dom";
import Myhome from "../pages/home";
import Mydetail from "../pages/detail"; 
import Myblog from "../pages/blog"; 
import Mycontact from "../pages/contact"; 
import Myabout from "../pages/about"; 

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Myhome />} />
            <Route path="detail" element={<Mydetail />} />
            <Route path="blog" element={<Myblog />} />
            <Route path="about" element={<Myabout />} />
            <Route path="contact" element={<Mycontact />} />
        </Routes>
    );
}

export default AppRoutes;
