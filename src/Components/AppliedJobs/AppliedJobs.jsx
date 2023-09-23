// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { AiOutlineDown } from 'react-icons/ai';
const AppliedJobs = () => {
    const jobs =useLoaderData();
    const [appliedJobs, setAppliedJobs]=useState([])
    const [displayJobs, setDisplayJobs]=useState([])
    const handleJobsFiler= filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(remoteJob=> remoteJob.remote_or_onsite ==='Remote')
            setDisplayJobs(remoteJobs);
        }else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(onsiteJob=> onsiteJob.remote_or_onsite ==='Onsite')
            setDisplayJobs(onsiteJobs);

        }
    }
    useEffect(() =>{
        const storedJobIds= getStoredJobApplication();
        if(jobs.length>0){
            const jobsApplied= jobs.filter(job=> storedJobIds.includes(job.id))
            // console.log('jobsapplied:',jobsApplied,'storedjobsids:', storedJobIds,'jobs:', jobs);
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    },[jobs])
    
    return (
        <div>
        <div className="flex justify-center job-details-title pt-[80px] pb-[80px] bottom-0 bg-[#eef0fa] bottom-0 bg-[url('/src/assets/images/bg1.png')] bg-no-repeat">
            <h1 className="text-2xl font-extrabold text-center">Applied Jobs: {appliedJobs.length}</h1>
        </div>
        <div className="pb-[100px]">
        <div className="pt-[50px] flex justify-end lg:px-[200px]">
        <details className="dropdown ml-auto">
            <summary className="m-1 btn text-gray-700 font-semibold">Filter <AiOutlineDown></AiOutlineDown></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li onClick={()=>handleJobsFiler('all')}><a>All</a></li>
                  <li onClick={()=>handleJobsFiler('remote')}><a>Remote</a></li>
                  <li onClick={()=>handleJobsFiler('onsite')}><a>Onsite</a></li>
                </ul>
        </details>
        </div>   
           
            <ul className="lg:px-[200px]">
                {
                    displayJobs.map(appliedJob => 
                    <div key={appliedJob.id}>
                        <div className="border-2 rounded-xl border-gray-300 w-full flex p-6 my-6 items-center">
                            <div className="bg-gray-300 flex items-center w-[180px] h-[180px] justify-center rounded-lg mr-8">
                                <img src={appliedJob.logo} alt="" className="w-[120px]" />
                            </div>
                            <div>
                                <h1 className="text-[24px] font-bold">{appliedJob.job_title}</h1>
                                <h1 className="text-[20px] font-semibold text-gray-500 pb-[15px]">{appliedJob.company_name}</h1>
                                <div className="flex gap-4 pb-4">
                                  <div className="py-2 px-4 text-xl text-[#9873FF] border-2 border-[#9873FF] rounded-lg">{appliedJob.remote_or_onsite}</div>
                                  <div className="py-2 px-4 text-xl text-[#9873FF] border-2 border-[#9873FF] rounded-lg">{appliedJob.job_type}</div>
                                 </div>
                                 <div className='flex gap-4 text-gray-500'>
                                 <div className='flex items-center gap-1 text-gray-500'>
                                  <HiOutlineLocationMarker className='text-[24px] text-gray-500'></HiOutlineLocationMarker><p>{appliedJob.location}</p>
                                 </div>
                                 <div className='flex items-center gap-1 text-gradient-to-r from-[#7E90FE] to-[#9873FF]'>
                                  <HiOutlineCurrencyDollar className='text-[24px] text-gradient-to-r from-[#7E90FE] to-[#9873FF]'></HiOutlineCurrencyDollar><p>salary : {appliedJob.salary}</p>
                                 </div>
                                 </div>

                            </div>
                            
                            <div className="flex ml-auto items-center ">
                                <div className="">
                                 <NavLink to={`/job/${appliedJob.id}`}><button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-[18px] py-[10px] px-[18px]">View Details</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </ul>
        </div>
    </div>
    );
};

AppliedJobs.propTypes = {
    
};

export default AppliedJobs;