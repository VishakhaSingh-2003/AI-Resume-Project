
import React from 'react';

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className='my-6'>
      <h2
        className='text-center font-bold text-sm mb-2'
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Professional Experience
      </h2>

      <hr
        className="border-t my-2"
        style={{ borderColor: resumeInfo?.themeColor }}
      />

      {resumeInfo?.experience?.map((experience, index) => (
        <div key={index} className="mb-4">
          {/* Job Title */}
          <h2 className="text-sm font-bold">{experience?.title}</h2>

          {/* Company / Location + Dates */}
          <div className="flex justify-between text-xs">
            <span>
              {experience?.companyName}, {experience?.city}, {experience?.state}
            </span>
            <span>
              {experience?.startDate} -{" "}
              {experience?.currentlyWorking ? "Present" : experience?.endDate}
            </span>
          </div>

          {/* Work Summary */}
          <p className="text-xs my-2">{experience.workSummery}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
