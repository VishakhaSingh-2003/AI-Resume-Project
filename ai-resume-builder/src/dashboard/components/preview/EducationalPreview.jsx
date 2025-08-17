// import React from "react";

// function EducationalPreview({ resumeInfo }) {
//   return (
//     <div className="my-6">
//       <h2
//         className="text-center font-bold text-sm mb-2"
//         style={{
//           color: resumeInfo?.themeColor,
//         }}>
//         Education
//       </h2>

//       <hr
//         className="border-t my-2"
//         style={{ borderColor: resumeInfo?.themeColor }}
//       />
//       {resumeInfo?.education.map((education, index) => (
//         <div>
//           <h2 className="text-sm font-bold"
//           style={{
//             color:resumeInfo.themeColor
//           }}
//           >{education.universityName}</h2>
//           <h2 className="text-xs flex justify-between">
//             {education?.degree} in {education?.major}
//           </h2>
//           <span>
//             {education?.startDate} - {education?.endDate}
//           </span>
//           <p className='text-xs my-2'>
//             {education?.description}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default EducationalPreview;


import React from "react";

function EducationalPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      {/* Section Title */}
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Education
      </h2>

      <hr
        className="border-t my-2"
        style={{ borderColor: resumeInfo?.themeColor }}
      />

      {resumeInfo?.education?.map((education, index) => (
        <div key={index} className="mb-4">
          {/* University */}
          <h2
            className="text-sm font-bold"
            style={{ color: resumeInfo?.themeColor }}
          >
            {education.universityName}
          </h2>

          {/* Degree + Dates in one row */}
          <div className="flex justify-between text-xs">
            <span>
              {education?.degree} in {education?.major}
            </span>
            <span>
              {education?.startDate} - {education?.endDate}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs my-2">{education?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationalPreview;
