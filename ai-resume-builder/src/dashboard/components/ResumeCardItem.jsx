import React from "react";
import { Notebook } from "lucide-react";
import { Link } from "react-router-dom";

function ResumeCardItem({ resume }) {
  return (
    <Link to={'/dashboard/resume/'+resume.documentId+"/edit"}>
      <div className="p-14 bg-secondary flex items-center justify-center h-57 w-50 border border-[#9f5bff] rounded-lg hover:scale-105 transition-all 
      hover: shadow-md shadow-[#9f5bff] ">
        <Notebook className='mb-4' />
      </div>
      <h2 className='text-center my-1'>{resume.title}</h2>
    </Link>
  );
}

export default ResumeCardItem;
