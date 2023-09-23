import PropTypes from 'prop-types';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
const Job = ({job}) => {
    const{id,logo,job_title,company_name,remote_or_onsite,job_type,location,salary}=job
    return (
<div className="card text-black text-primary-content border-2 border-gray-200 rounded-lg p-6">
  <div className="card-body gap-0">
    <img src={logo} alt="" className="jobs-log w-[120px] pb-6" />
    <h2 className="card-title text-[24px] pb-2">{job_title}</h2>
    <p className='text-[20px] text-gray-500 pb-4'>{company_name}</p>
    <div className="flex gap-4 pb-4">
        <div className="py-2 px-4 text-xl text-[#9873FF] border-2 border-[#9873FF] rounded-lg">{remote_or_onsite}</div>
        <div className="py-2 px-4 text-xl text-[#9873FF] border-2 border-[#9873FF] rounded-lg">{job_type}</div>
    </div>
    <div className='flex gap-4 text-gray-500 pb-4'>
        <div className='flex items-center gap-1 text-gray-500'>
        <HiOutlineLocationMarker className='text-[24px] text-gray-500'></HiOutlineLocationMarker><p>{location}</p>
        </div>
        <div className='flex items-center gap-1 text-gradient-to-r from-[#7E90FE] to-[#9873FF]'>
        <HiOutlineCurrencyDollar className='text-[24px] text-gradient-to-r from-[#7E90FE] to-[#9873FF]'></HiOutlineCurrencyDollar><p>salary : {salary}</p>
        </div>
    </div>
    <div className="card-actions justify-start">
      <NavLink to={`/job/${id}`}><button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-[18px] py-[10px] px-[18px]">View Details</button></NavLink>
    </div>
  </div>
</div>
    );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;