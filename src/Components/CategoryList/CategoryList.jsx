// import PropTypes from 'prop-types';
import accountsImage from './accounts.png';
import creativeImage from './creative.png';
import marketingImage from './marketing.png';
import clipImage from './chip.png';

const CategoryList = () => {
    return (
        <div className="pt-[100px] px-[200px]">
            <div>
                <section className="title-section flex flex-col items-center gap-4">
                    <h1 className="text-5xl font-extrabold">Job Category List</h1>
                    <p className="text-xl text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </section>
            </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
           <div className='bg-gray-100 rounded-lg p-8 h-[200px] '>
                <div className='mb-6 w-[70px] h-[70px] rounded-lg bg-gray-200 flex justify-center items-center'>
                   <img src={accountsImage} alt="" />
                </div>
                <h1 className='text-[20px] font-bold text-gray-700'>Account & Finance</h1>
                <p className='text-[16px] text-gray-400 font-semibold'>300 Jobs Available</p>
            </div>
           <div className='bg-gray-100 rounded-lg p-8 h-[200px] '>
                <div className='mb-6 w-[70px] h-[70px] rounded-lg bg-gray-200 flex justify-center items-center'>
                    <img src={creativeImage} alt="" />
                </div>
                <h1 className='text-[20px] font-bold text-gray-700'>Creative Design</h1>
                <p className='text-[16px] text-gray-400 font-semibold'>100+ Jobs Available</p>
            </div>
           <div className='bg-gray-100 rounded-lg p-8 h-[200px] '>
                <div className='mb-6 w-[70px] h-[70px] rounded-lg bg-gray-200 flex justify-center items-center'>
                    <img src={marketingImage} alt="" />
                </div>
                <h1 className='text-[20px] font-bold text-gray-700'>Account & Finance</h1>
                <p className='text-[16px] text-gray-400 font-semibold'>300 Jobs Available</p>
            </div>
           <div className='bg-gray-100 rounded-lg p-8 h-[200px] '>
                <div className='mb-6 w-[70px] h-[70px] rounded-lg bg-gray-200 flex justify-center items-center'>
                    <img src={clipImage} alt="" />
                </div>
                <h1 className='text-[20px] font-bold text-gray-700'>Account & Finance</h1>
                <p className='text-[16px] text-gray-400 font-semibold'>300 Jobs Available</p>
            </div>
          
        </div>
        </div>
    );
};

CategoryList.propTypes = {
    
};

export default CategoryList;