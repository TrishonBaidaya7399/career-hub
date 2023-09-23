// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const[jobs, setJobs]= useState([]);
    const[dataLength, setDataLength]= useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    },[])
    return (
    <div className="py-[100px] px-[200px] flex flex-col items-center">
        <div>
            <section className="title-section flex flex-col items-center gap-4">
                <h1 className="text-5xl font-extrabold">Featured Jobs</h1>
                <p className="text-xl text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </section>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
            {
                jobs.slice(0, dataLength).map((job,index)=><Job key={index} job={job}></Job>)
            }
        </div>
        <div className="pt-10">
            {
            dataLength<jobs.length && 
            <button onClick={()=> setDataLength(jobs.length)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Show All Jobs</button>
            }
            {
            dataLength===jobs.length &&
            <button onClick={()=> setDataLength(4)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Show Less</button>

            }
        </div>
    </div>
    );
};

FeaturedJobs.propTypes = {
    
};

export default FeaturedJobs;