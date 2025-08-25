// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import PersonalDetailPreview from "@/dashboard/components/preview/PersonalDetailPreview";
// import ExperiencePreview from "@/dashboard/components/preview/ExperiencePreview";
// import SummeryPreview from "@/dashboard/components/preview/SummeryPreview";
// import React from "react";
// import { useContext } from "react";
// import EducationalPreview from "@/dashboard/components/preview/EducationalPreview";
// import SkillsPreview from "@/dashboard/components/preview/SkillsPreview";

// function PreviewSection() {
//     const {resumeInfo, setResumeInfo}=useContext(ResumeInfoContext)
    
//   return (
//     <div className="mt-15 pt-10 shadow-lg h-full p-14 border-t-[20px]"
//     style={{
//         borderColor:resumeInfo?.themeColor
//     }}
//     >
//       {/* Personal Details*/}
//        <PersonalDetailPreview resumeInfo={resumeInfo}/>
//       {/* Summary */}
//         <SummeryPreview resumeInfo={resumeInfo}/>
//       {/* Professional Experience */}
//         <ExperiencePreview resumeInfo={resumeInfo}/>
//       {/* Educational */}
//     <EducationalPreview resumeInfo={resumeInfo}/>
//       {/* Skills */}
//       <SkillsPreview resumeInfo={resumeInfo}/>
//     </div>
//   );
// }

// export default PreviewSection;



import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import PersonalDetailPreview from "@/dashboard/components/preview/PersonalDetailPreview";
import ExperiencePreview from "@/dashboard/components/preview/ExperiencePreview";
import SummeryPreview from "@/dashboard/components/preview/SummeryPreview";
import React, { useContext } from "react";
import EducationalPreview from "@/dashboard/components/preview/EducationalPreview";
import SkillsPreview from "@/dashboard/components/preview/SkillsPreview";

function PreviewSection() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  // Debug log to check which components might be undefined
  

  return (
    <div
      className="mt-15 pt-10 shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: resumeInfo?.themeColor,
      }}
    >
      {/* Personal Details */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      {/* Summary */}
      <SummeryPreview resumeInfo={resumeInfo} />
      {/* Professional Experience */}
      <ExperiencePreview resumeInfo={resumeInfo} />
      {/* Educational */}
      <EducationalPreview resumeInfo={resumeInfo} />
      {/* Skills */}
      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
}

export default PreviewSection;
