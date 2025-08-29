import React from 'react'
import AddResume from './components/AddResume';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './../../service/GlobalApi';
import { useEffect } from 'react';
import { useState } from 'react';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {

  const {user}=useUser();
  const [resumeList, setResumeList]=useState([]);

useEffect(()=>{
  user&&GetResumesList()
},[user])

  const GetResumesList=()=>{
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(resp=>{
      
      setResumeList(resp.data.data);
    })
  }
  return (
    <div className='text-left p-10 md:px-20 lg:px-32'>
      <h2 className='pt-20 font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume for your next Job role</p>

      {/* Added mt-10 to create vertical gap */}
      <div className="mt-10 flex flex-wrap justify-center gap-10">
  <AddResume />
  {resumeList.length > 0 &&
    resumeList.map((resume, index) => (
      <ResumeCardItem
        resume={resume}
        key={index}
        refreshData={GetResumesList}
      />
    ))}
</div>

    </div>
  )
}

export default Dashboard;






