// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";
// import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            {/* <h1>Root JSX</h1> */}
            <Header></Header>
                <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;