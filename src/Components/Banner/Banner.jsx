// import PropTypes from 'prop-types';

const Banner = () => {
return (
<div className="hero px-[200px] bg-[#eef0fa]">
  <div className="hero-content flex-col lg:flex-row-reverse pb-[0px]">
    <img src="/src/assets/images/user.png" className="w-1/2" />
    <div className="w-1/2">
      <h1 className="text-5xl font-bold leading-[70px] text-[60px]">One Step <br/> Closer To Your <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Dream Job</span></h1>
      <p className="py-6 text-[18px] text-gray-500">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Get Started</button>
    </div>
  </div>
</div>
);
};

Banner.propTypes = {
    
};

export default Banner;