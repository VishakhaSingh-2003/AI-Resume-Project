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
      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-30 place-items-center'>
        <AddResume />
        {resumeList.length>0&&resumeList.map((resume,index)=>{
         return <ResumeCardItem resume={resume} key={index}/>
        })}
      </div>
    </div>
  )
}

export default Dashboard;






