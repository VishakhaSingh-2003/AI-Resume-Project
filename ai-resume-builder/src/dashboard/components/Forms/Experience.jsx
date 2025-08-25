//  import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import React, { useState, useEffect, useContext } from "react";
// import RichTextEditor from "../RichTextEditor";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import { LoaderCircle } from "lucide-react";
// import { useParams } from "react-router-dom";

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
//   const [loading, setLoading]=useState(false);
//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
//   const params = useParams();

//   useEffect(() => {
//     resumeInfo && setExperienceList(resumeInfo?.experience);
//   }, [resumeInfo]);

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

//   const onSave=()=>{
//         setLoading(true)
//         const data={
//             data:{
//                 Experience:experinceList.map(({ id, ...rest }) => rest)
//             }
//         }
//       }

//   return (
//     <div
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
                  
//                   onChange={(event) => handleChange(index, event)}
//                   defaultValue={item?.title}
//                 />
//               </div>

//               <div>
//                 <label className="text-xs">Company Name</label>
//                 <Input
//                   className="border-2 border-gray-400"
//                   name="companyName"
                  
//                   onChange={(event) => handleChange(index, event)}
//                   defaultValue={item?.companyName}
//                 />
//               </div>

//               <div>
//                 <label className="text-xs">City</label>
//                 <Input
//                   className="border-2 border-gray-400"
//                   name="city"
                  
//                   onChange={(event) => handleChange(index, event)}
//                   defaultValue={item?.city}
//                 />
//               </div>

//               <div>
//                 <label className="text-xs">State</label>
//                 <Input
//                   className="border-2 border-gray-400"
//                   name="state"
                  
//                   onChange={(event) => handleChange(index, event)}
//                   defaultValue={item?.state}
//                 />
//               </div>

//               <div>
//                 <label className="text-xs">Start Date</label>
//                 <Input
//                   className="border-2 border-gray-400"
//                   type="date"
//                   name="startDate"
                  
//                   onChange={(event) => handleChange(index, event)}
//                   defaultValue={item?.startDate}
//                 />
//               </div>

//               <div>
//                 <label className="text-xs">End Date</label>
//                 <Input
//                   className="border-2 border-gray-400"
//                   type="date"
//                   name="endDate"
                  
//                   onChange={(event) => handleChange(index, event)}
//                   defaultValue={item?.endDate}
//                 />
//               </div>

//               <div className="col-span-2">
//                 {/* Work summary */}
//                 <RichTextEditor
//                   index={index}
//                   defaultValue={item?.workSummary}
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
//         <Button
//           className="hover:scale-105 transition-transform bg-[#9f5bff] hover:bg-[#9f5bff] text-white"
//           disabled={loading}
//           onClick={onSave}>
//           {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
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
import { LoaderCircle } from "lucide-react";

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
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  // Initialize local list from context on first mount only
  useEffect(() => {
    if (Array.isArray(resumeInfo?.experience) && resumeInfo.experience.length > 0) {
      setExperienceList(resumeInfo.experience);
    }
  }, []); // Only run once

  // const handleChange = (index, event) => {
  //   const newEntries = [...experienceList];
  //   const { name, value } = event.target;
  //   newEntries[index][name] = value;
  //   setExperienceList(newEntries);
  // };

  const handleChange = (index, event) => {
  const newEntries = [...experienceList];
  const { name, value } = event.target;
  newEntries[index][name] = value;
  setExperienceList(newEntries);

  // 🔑 Immediately sync with context
  setResumeInfo((prev) => ({
    ...prev,
    experience: newEntries,
  }));
};

  const AddNewExperience = () => {
    setExperienceList([...experienceList, { ...formField }]);
  };

  const RemoveExperience = () => {
    setExperienceList((prevList) =>
      prevList.length > 1 ? prevList.slice(0, -1) : prevList
    );
  };

  const handleRichTextEditor = (value, name, index) => {
    const newEntries = [...experienceList];
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };

  // Save updates context only on user action (no looping)
  const onSave = () => {
    setLoading(true);
    setResumeInfo((prev) => ({
      ...prev,
      experience: experienceList.map(({id, ...rest})=>rest)
    }));
    // Optionally send to backend here
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div
      className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10"
      style={{ borderTopColor: "#9f5bff" }}
    >
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
                  value={item.title}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div>
                <label className="text-xs">Company Name</label>
                <Input
                  className="border-2 border-gray-400"
                  name="companyName"
                  value={item.companyName}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div>
                <label className="text-xs">City</label>
                <Input
                  className="border-2 border-gray-400"
                  name="city"
                  value={item.city}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div>
                <label className="text-xs">State</label>
                <Input
                  className="border-2 border-gray-400"
                  name="state"
                  value={item.state}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div>
                <label className="text-xs">Start Date</label>
                <Input
                  className="border-2 border-gray-400"
                  type="date"
                  name="startDate"
                  value={item.startDate}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div>
                <label className="text-xs">End Date</label>
                <Input
                  className="border-2 border-gray-400"
                  type="date"
                  name="endDate"
                  value={item.endDate}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>

              <div className="col-span-2">
                <RichTextEditor
                  index={index}
                  defaultValue={item.workSummary}
                  onRichTextEditorChange={(value) =>
                    handleRichTextEditor(value, "workSummary", index)
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
          variant="outline"
          className="border-2 border-gray-400 text-[#9f5bff] hover:text-[#9f5bff] focus:text-[#9f5bff] active:text-[#9f5bff] hover:scale-105 transition-transform"
        >
          + Add More Experience
        </Button>
        <Button
          onClick={RemoveExperience}
          variant="outline"
          className="border-2 border-gray-400 text-[#9f5bff] hover:text-[#9f5bff] focus:text-[#9f5bff] active:text-[#9f5bff] hover:scale-105 transition-transform"
        >
          - Remove
        </Button>
      </div>

      <div className="flex justify-end mt-4">
        <Button
          onClick={onSave}
          className="hover:scale-105 transition-transform bg-[#9f5bff] hover:bg-[#9f5bff] text-white"
          disabled={loading}
        >
          {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default Experience;
