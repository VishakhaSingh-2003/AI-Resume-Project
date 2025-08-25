// import React from "react";
// import { Notebook } from "lucide-react";
// import { Link } from "react-router-dom";

// function ResumeCardItem({ resume }) {
//   return (
//     <Link to={'/dashboard/resume/'+resume.documentId+"/edit"}>
//       <div className="p-14 bg-secondary flex items-center justify-center w-50 border border-[#9f5bff] rounded-lg hover:scale-105 transition-all 
//       hover: shadow-md shadow-[#9f5bff] 
//        bg-gradient-to-b
//           from-pink-100 via-purple-200 to-blue-200
//         h-[228px] 
//           rounded-t-lg border-t-4
//         '
//         style={{
//           borderColor:resume?.themeColor
//         }}
//       ">
//         <Notebook className='mb-4' />
//       </div>
//       <h2 className='text-center my-1'>{resume.title}</h2>
//     </Link>
//   );
// }





// export default ResumeCardItem;



// import React from "react";
// import { Notebook } from "lucide-react";
// import { Link } from "react-router-dom";

// function ResumeCardItem({ resume }) {
//   return (
//     <Link to={'/dashboard/resume/' + resume.documentId + "/edit"}>
//       <div
//         className="
//           p-14 bg-secondary flex items-center justify-center w-50 border border-[#9f5bff] rounded-lg 
//           hover:scale-105 transition-all
//           bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200
//           h-[228px] rounded-t-lg border-t-4 border-t-red-600
//           shadow-none  /* This removes all shadows */
//         "
//         style={{
//           borderColor: resume?.themeColor,
//         }}
//       >
//         <Notebook className="mb-4" />
//       </div>
//       <h2 className="text-center my-1">{resume.title}</h2>
//     </Link>
//   );
// }

// export default ResumeCardItem;

import React from "react";
import { Notebook } from "lucide-react";
import { Link } from "react-router-dom";

function ResumeCardItem({ resume }) {
  return (
    <Link to={`/dashboard/resume/${resume.documentId}/edit?section=personal`}>
      <div
        className={`
          p-14 bg-secondary flex items-center justify-center w-50 border border-[#9f5bff] rounded-lg
          hover:scale-105 transition-all hover:shadow-md shadow-[#9f5bff]
          bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200
          h-[228px] rounded-t-lg border-t-5 border-t-red-600
        `}
        style={{
          borderColor: resume?.themeColor,
        }}
      >
        <img src='/resume-svgrepo-com.svg' width={50} height={50}/>
        
      </div>
      <h2 className="text-center my-1">{resume.title}</h2>
    </Link>
  );
}

export default ResumeCardItem;

