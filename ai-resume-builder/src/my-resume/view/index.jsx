import React from 'react'
import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import PreviewSection from '@/dashboard/resume/components/PreviewSection'
import {ResumeInfoContext} from'@/context/ResumeInfoContext'
import { useContext } from 'react'

function ViewResume() {
  return (
<ResumeInfoContext.Provider className='pt-20'>
        < Header/>
       <div className='my-10 mx-10 md:mx-20 lg:mx-3'>
        <h2 className='text-center text-2xl font-medium'>Congrats! your Ultimate AI generated Resume is ready!</h2>
        <p className=' text-center text-gray-400'>Now you are ready to download your resume and you can share unique resume url with your friends and family.</p>
        <div className='flex justify-between px-44 my-10'>
            <Button className="bg-[#9f5bff] hover:bg-[#9f5bff] text-white px-4 py-2 rounded">Download</Button>
            <Button className="bg-[#9f5bff] hover:bg-[#9f5bff] text-white px-4 py-2 rounded">Save</Button>
        </div>

        <div>
            <PreviewSection/>
        </div>
    </div>

    </ResumeInfoContext.Provider>
  )
}

export default ViewResume