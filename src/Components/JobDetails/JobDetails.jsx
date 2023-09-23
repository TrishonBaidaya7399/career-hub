// import PropTypes from 'prop-types';
import { HiOutlineCurrencyDollar, HiOutlineLocationMarker } from 'react-icons/hi';
import { BsCalendar4Week, BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveStoredJobApplication} from '../../Utility/localstorage';

const JobDetails = () => {
    const jobs= useLoaderData();
    const {id}=useParams();
    const idInt = parseInt(id);
    const job= jobs.find(job=> job.id===idInt)
    console.log(idInt, job);
    const{job_description, job_responsibility, educational_requirements, experiences,salary,job_title,contact_information,}=job;
    const handleApplyJob = () =>{
        saveStoredJobApplication(idInt);
        toast('Successfully Applied!')
    }
    return (
        <div>
            <div className="flex justify-center job-details-title pt-[80px] pb-[80px] bottom-0 bg-[#eef0fa] bottom-0 bg-[url('/src/assets/images/bg1.png')] bg-no-repeat">
                <h1 className="text-2xl font-extrabold text-center">Job Details</h1>
            </div>
            <ToastContainer/>
            <div className="flex px-[200px] py-[100px] gap-6">
                <div className="w-2/3 flex flex-col gap-6">
                    <p className='text-xl font-semibold'>Job Description: <span className='font-normal text-[16px] text-gray-500'>{job_description}</span></p>
                    <p className='text-xl font-semibold'>Job Responsibility: <span className='font-normal text-[16px] text-gray-500'>{job_responsibility}</span></p>
                    <p className='text-xl font-semibold'>Educational Requirements:</p>
                    <p className='text-xl font-semibold pt-[0px]'><span className='font-normal text-[16px] text-gray-500'>{educational_requirements}</span></p>
                    <p className='text-xl font-semibold'>Experiences:</p>
                    <p className='text-xl font-semibold pt-0'><span className='font-normal text-[16px] text-gray-500'>{experiences}</span></p>
                </div>
                <div className="w-1/3">
                    <div className='rounded-lg p-8 bg-[#eef0fa]'>
                        <h1 className='border-b-2 border-gray-300 pb-6 text-xl font-semibold'>Job Details</h1>
                        <div className='pt-6'>
                        <div className='flex items-center gap-1 text-gray-500'>
                        <HiOutlineCurrencyDollar className='text-[18px] text-[#7E90FE]'></HiOutlineCurrencyDollar><p><span className='font-semibold text-black'>Salary :</span><span className='text-gray-500'> {salary} (Per Month)</span> </p>
                        </div>
                        <div className='flex items-center gap-1 text-gradient-to-r from-[#7E90FE] to-[#9873FF]'>
                        <BsCalendar4Week className='text-[18px] text-[#7E90FE]'></BsCalendar4Week><p><span className='font-semibold text-black'>Job Title :</span><span className='text-gray-500'> {job_title}</span> </p>
                        </div>
                        </div>
                        <h1 className='border-b-2 border-gray-300 pb-6 text-xl font-semibold pt-8'>Contact Information</h1>
                        <div className='pt-6'> 
                        <div className='flex items-center gap-1 text-gray-500'>
                        <BsTelephone className='text-[18px] text-[#7E90FE]'></BsTelephone><p><span className='font-semibold text-black'>Phone: </span><span className='text-gray-500'>{contact_information.phone}</span> </p>
                        </div>
                        <div className='flex items-center gap-1 text-gradient-to-r from-[#7E90FE] to-[#9873FF]'>
                        <AiOutlineMail className='text-[18px] text-[#7E90FE]'></AiOutlineMail><p><span className='font-semibold text-black'>Email : </span><span className='text-gray-500'>{contact_information.email}</span> </p>
                        </div>
                        <div className='flex items-center gap-1 text-gradient-to-r from-[#7E90FE] to-[#9873FF]'>
                        <HiOutlineLocationMarker className='text-[30px] text-[#7E90FE]'></HiOutlineLocationMarker><p><span className='font-semibold text-black'>Address : </span><span className='text-gray-500'>{contact_information.address}</span> </p>
                        </div>
                        </div>
                    </div>
                        <NavLink to=''><button onClick={handleApplyJob} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-[20px] w-full mt-8">Apply Now</button></NavLink>
                </div>
            </div>
        </div>
    );
};

JobDetails.propTypes = {
    
};

export default JobDetails;