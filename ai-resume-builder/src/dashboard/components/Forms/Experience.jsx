// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import React, { useState, useEffect, useContext } from "react";
// import RichTextEditor from "../RichTextEditor";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";

// const formField = {
//   title: "",
//   companyName: "",
//   city: "",
//   state: "",
//   startDate: "",
//   endDate: "",
//   workSummary: "",
// };

// function Experience() {
//   const [experienceList, setExperienceList] = useState([formField]);

//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

//   const handleChange = (index, event) => {
//     const newEntries = [...experienceList];
//     const { name, value } = event.target;
//     newEntries[index][name] = value;
//     setExperienceList(newEntries);
//   };

//   const AddNewExperience = () => {
//     setExperienceList([...experienceList, { ...formField }]);
//   };

//   const RemoveExperience = () => {
//     setExperienceList((experienceList) =>
//       experienceList.length > 1 ? experienceList.slice(0, -1) : experienceList
//     );
//   };

//   const handleRichTextEditor = (e, name, index) => {
//     const newEntries = experienceList.slice();
//     newEntries[index][name] = e.target.value;
//     setExperienceList(newEntries);
//   };

//   useEffect(() => {
//     setResumeInfo({
//       ...resumeInfo,
//       experience: experienceList,
//     });
//   }, [experienceList]);

//   return (
//  <div
//       className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10"
//       style={{ borderTopColor: "#9f5bff" }}>
//       <h2 className="font-bold text-lg">Professional Experience</h2>
//       <p>Add your previous job experience</p>
//       <div>
//         {experienceList.map((item, index) => (
//           <div key={index}>
//             <div className="border-2 border-gray-400 grid grid-cols-2 gap-3 p-3 my-5 rounded-lg">
//               <div>
//                 <label className="text-xs">Position Title</label>
//                 <Input
//                   className="border-2 border-gray-400"
//                   name="title"
//                   defaultValue={item?.title}
//                   onChange={(event) => handleChange(index, event)}
//                 />
//               </div>

//               <div>
//                 <label className="text-xs">Company Name</label>
//                 <Input
//                   className="border-2 border-gray-400"
//                   name="companyName"
//                   defaultValue={item?.companyName}
//                   onChange={(event) => handleChange(index, event)}
//                 />
//               </div>

//               <div>
//                 <label className="text-xs">City</label>
//                 <Input
//                   className="border-2 border-gray-400"
//                   name="city"
//                   defaultValue={item?.city}
//                   onChange={(event) => handleChange(index, event)}
//                 />
//               </div>

//               <div>
//                 <label className="text-xs">State</label>
//                 <Input
//                   className="border-2 border-gray-400"
//                   name="state"
//                   defaultValue={item?.state}
//                   onChange={(event) => handleChange(index, event)}
//                 />
//               </div>

//               <div>
//                 <label className="text-xs">Start Date</label>
//                 <Input
//                   className="border-2 border-gray-400"
//                   type="date"
//                   name="startDate"
//                   defaultValue={item?.startDate}
//                   onChange={(event) => handleChange(index, event)}
//                 />
//               </div>

//               <div>
//                 <label className="text-xs">End Date</label>
//                 <Input
//                   className="border-2 border-gray-400"
//                   type="date"
//                   name="endDate"
//                   defaultValue={item?.endDate}
//                   onChange={(event) => handleChange(index, event)}
//                 />
//               </div>

//               <div className="col-span-2">
//                 {/* Work summary */}
//                 <RichTextEditor
//                 index={index}
//                   onRichTextEditorChange={(event) =>
//                     handleRichTextEditor(event, "workSummery", index)
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex gap-4">
//         <Button
//           onClick={AddNewExperience}
//           className="border-2 border-gray-400 text-[#9f5bff] hover:text-[#9f5bff] focus:text-[#9f5bff] active:text-[#9f5bff] hover:scale-105 transition-transform"
//           variant="outline">
//           + Add More Experience
//         </Button>
//         <Button
//           onClick={RemoveExperience}
//           className="border-2 border-gray-400 text-[#9f5bff] hover:text-[#9f5bff] focus:text-[#9f5bff] active:text-[#9f5bff] hover:scale-105 transition-transform"
//           variant="outline">
//           - Remove
//         </Button>
//       </div>

//       <div className="flex justify-end mt-4">
//         <Button className="hover:scale-105 transition-transform bg-[#9f5bff] hover:bg-[#9f5bff] text-white">
//           Save
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Experience;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect, useContext } from "react";
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummary: "",
};

function Experience() {
  const [experienceList, setExperienceList] = useState([formField]);

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const handleChange = (index, event) => {
    const newEntries = [...experienceList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };

  const AddNewExperience = () => {
    setExperienceList([...experienceList, { ...formField }]);
  };

  const RemoveExperience = () => {
    setExperienceList((experienceList) =>
      experienceList.length > 1 ? experienceList.slice(0, -1) : experienceList
    );
  };

  const handleRichTextEditor = (e, name, index) => {
    const newEntries = experienceList.slice();
    newEntries[index][name] = e.target.value;
    setExperienceList(newEntries);
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
  }, [experienceList]);

  return (
    <div
      className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10"
      style={{ borderTopColor: "#9f5bff" }}>
      <h2 className="font-bold text-lg">Professional Experience</h2>
      <p>Add your previous job experience</p>
      <div>
        {experienceList.map((item, index) => (
          <div key={index}>
            <div className="border-2 border-gray-400 grid grid-cols-2 gap-3 p-3 my-5 rounded-lg">
              <div>
                <label className="text-xs">Position Title</label>
                <Input
                  className="border-2 border-gray-400"
                  name="title"
                  defaultValue={item?.title}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div>
                <label className="text-xs">Company Name</label>
                <Input
                  className="border-2 border-gray-400"
                  name="companyName"
                  defaultValue={item?.companyName}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div>
                <label className="text-xs">City</label>
                <Input
                  className="border-2 border-gray-400"
                  name="city"
                  defaultValue={item?.city}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div>
                <label className="text-xs">State</label>
                <Input
                  className="border-2 border-gray-400"
                  name="state"
                  defaultValue={item?.state}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div>
                <label className="text-xs">Start Date</label>
                <Input
                  className="border-2 border-gray-400"
                  type="date"
                  name="startDate"
                  defaultValue={item?.startDate}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div>
                <label className="text-xs">End Date</label>
                <Input
                  className="border-2 border-gray-400"
                  type="date"
                  name="endDate"
                  defaultValue={item?.endDate}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div className="col-span-2">
                {/* Work summary */}
                <RichTextEditor
                  index={index}
                  onRichTextEditorChange={(event) =>
                    handleRichTextEditor(event, "workSummery", index)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <Button
          onClick={AddNewExperience}
          className="border-2 border-gray-400 text-[#9f5bff] hover:text-[#9f5bff] focus:text-[#9f5bff] active:text-[#9f5bff] hover:scale-105 transition-transform"
          variant="outline">
          + Add More Experience
        </Button>
        <Button
          onClick={RemoveExperience}
          className="border-2 border-gray-400 text-[#9f5bff] hover:text-[#9f5bff] focus:text-[#9f5bff] active:text-[#9f5bff] hover:scale-105 transition-transform"
          variant="outline">
          - Remove
        </Button>
      </div>
      <div className="flex justify-end mt-4">
        <Button className="hover:scale-105 transition-transform bg-[#9f5bff] hover:bg-[#9f5bff] text-white">
          Save
        </Button>
      </div>
    </div>
  );
}

export default Experience;
