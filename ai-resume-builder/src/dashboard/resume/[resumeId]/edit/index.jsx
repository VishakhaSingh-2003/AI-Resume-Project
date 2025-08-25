import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import FormSection from '../../components/Formsection';
import PreviewSection from '../../components/PreviewSection';
import dummy from '@/data/dummy';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { useState } from 'react';
import GlobalApi from '../../../../../service/GlobalApi';



function EditResume() {
    const params=useParams();
    const [resumeInfo, setResumeInfo]=useState({themeColor:'#FF6666'});

    useEffect(()=>{
      
        GetResumeInfo();
    },[])
    

    const GetResumeInfo=()=>{
      GlobalApi.GetResumeById(params.resumeId).then(resp=>{
        console.log(resp.data.data)
        setResumeInfo(resp.data.data);
        setResumeInfo(prev=>({
          ...prev,
          ...resp.data.data,
          themeColor: resp.data.data.themeColor || prev.themeColor
          || '#ff1a1a',
        }))
      })
    }

  return (

    <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
    {/*Form Section*/}
      <FormSection/>
    {/*preview Section*/}
    <PreviewSection/>
    </div>
    </ResumeInfoContext.Provider>
    )
}

export default EditResume

