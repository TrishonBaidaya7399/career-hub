// import PropTypes from 'prop-types';

import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>    
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>

        </div>
    );
};

Home.propTypes = {
    
};

export default Home;