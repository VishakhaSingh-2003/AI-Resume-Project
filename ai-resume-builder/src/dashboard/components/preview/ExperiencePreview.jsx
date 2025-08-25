
// import React from "react";

// function ExperiencePreview({ resumeInfo }) {
//   return (
//     <div className="my-6">
//       <h2
//         className="text-center font-bold text-sm mb-2"
//         style={{
//           color: resumeInfo?.themeColor,
//         }}>
//         Professional Experience
//       </h2>

//       <hr
//         className="border-t my-2"
//         style={{ borderColor: resumeInfo?.themeColor }}
//       />

//       {resumeInfo?.experience?.map((experience, index) => (
//         <div key={index} className="mb-4">
//           {/* Job Title in 10% lighter red */}
//           <h2
//             className="text-sm font-bold"
//             style={{ color: "#FF6666" }} // 40% lighter red
//           >
//             {experience?.title}
//           </h2>

//           {/* Company / Location + Dates */}
//           <div className="flex justify-between text-xs">
//             {/* <span>
//               {experience?.companyName}, {experience?.city}, {experience?.state}
//             </span> */}

//             <span>
//               {[experience?.companyName, experience?.city, experience?.state]
//                 .filter(Boolean) // Remove empty or undefined values
//                 .join(", ")}{" "}
            
//             </span>
//             <span>
//               {experience?.startDate} {}
//               {experience?.currentlyWorking ? "Present" : experience?.endDate}
//             </span>
//           </div>

//           {/* Work Summary */}
//           <div dangerouslySetInnerHTML={{ __html: experience?.workSummary }} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ExperiencePreview;





import React, { useContext } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

function ExperiencePreview() {
  const { resumeInfo } = useContext(ResumeInfoContext);

  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor || "#000",
        }}
      >
        Professional Experience
      </h2>

      <hr
        style={{
          borderColor: resumeInfo?.themeColor || "#000",
        }}
      />

      {resumeInfo?.experience?.map((exp, index) => {
  const location = [exp.companyName, [exp.city, exp.state].filter(Boolean).join(", ")]
    .filter(Boolean)
    .join(" | ");
  const dateRange = exp.startDate
    ? `${exp.startDate} - ${exp.endDate || "Present"}`
    : exp.endDate || "";

  return (
    <div key={index} className="my-5">
      <h3 className="text-sm font-semibold" style={{ color: resumeInfo?.themeColor }}>
        {exp.title}
      </h3>
      <div className="flex justify-between text-xs">
        <div>{location}</div>
        <div className="font-normal">{dateRange}</div>
      </div>
      <div
        className="text-xs mt-2"
        dangerouslySetInnerHTML={{ __html: exp.workSummary || "" }}
      />
    </div>
  );
})}

    </div>
  );
}

export default ExperiencePreview;
