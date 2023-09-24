// import PropTypes from 'prop-types';
import pageUnderConstruction from "../../assets/images/under construction.png"
const Blog = () => {
    return (
    <div className="flex flex-col gap-6 items-center px-[200px]">
        <h1 className="text-4xl font-extrabold pt-8 pb-2">Blogs page</h1>
        <img src={pageUnderConstruction} alt="" className="w-[50%] rounded-xl mb-8"/>
    </div>
    );
};

Blog.propTypes = {
    
};

export default Blog;