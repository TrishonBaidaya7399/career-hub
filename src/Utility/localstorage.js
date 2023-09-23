// //get the job applications stored in local storage
// const getStoredJobApplication=()=>
// {
//     const storedJobApplication = localStorage.getItem('job-applications')
//     if(storedJobApplication){
//         return JSON.parse(storedJobApplication); 
//     }
//     return [];
// }
// //save new job application to the local storage
// const saveJobApplication = id =>{
//     //get all the job applications stored in local storage 
//     const storedJobApplication = getStoredJobApplication()
//     //find if the id of your job application match with any of the job applications stored in your local storage by using find method of array 
//     const exists = storedJobApplication.find(jobId=> jobId === id)
//     if(!exists){
//         storedJobApplication.push(id)
//         localStorage.setItem('job-applications', JSON.stringify(storedJobApplication))
//     }
// }
// export {saveJobApplication, getStoredJobApplication}

const getStoredJobApplication = () =>{
    const storedJobApplication= localStorage.getItem('job-applications')
    if(storedJobApplication){
        console.log(storedJobApplication);
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveStoredJobApplication = id=>{
    console.log(id);
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId=> jobId === id)
    if(!exists){ 
        storedJobApplications.push(id);
        console.log(storedJobApplications);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
    }
}
export {saveStoredJobApplication, getStoredJobApplication}