import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function EditResume() {
    const params=useParams();

    useEffect(()=>{
        console.log(params.resumeId)
    },[])
  return (
    <div className="pt-20" > EditResume</div>
    )
}

export default EditResume