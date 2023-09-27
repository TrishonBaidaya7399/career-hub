// import PropTypes from 'prop-types';


import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Home page</title>
            </Helmet>
            <Banner></Banner>    
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>

        </div>
    );
};

Home.propTypes = {
    
};

export default Home;