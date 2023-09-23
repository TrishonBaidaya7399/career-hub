// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
                <Outlet>
                    <Home></Home>
                </Outlet>
            <Footer></Footer>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;