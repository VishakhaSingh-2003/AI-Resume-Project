// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import { useContext, useEffect, useState } from "react";
// import GlobalApi from "../../../../service/GlobalApi";
// import { useParams } from "react-router-dom";
// import { LoaderCircle } from "lucide-react";
// import { Brain } from "lucide-react";
// import { AIChatSession } from "../../../../service/AIModel";
// import { toast } from "sonner";

// const prompt = 'Job Title: {jobTitle},depends upon job title give me summery for my resume within 4-5 lines in JSON format with field experience level and summery for experience level for freshers, mid level and experienced'

// function Summery({enabledNext}) {
//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
//   const [summery, setSummery] = useState('');
//   const [loading, setLoading] = useState(false);
//   const params = useParams();
//   const [aiGeneratedSummeryList, setAiGeneratedSummeryList]=useState([]);

//   useEffect(() => {
//     summery &&
//       setResumeInfo({
//         ...resumeInfo,
//         summery: summery,
//       });
//   }, [summery]);

// const GenerateSummeryFromAI = async () => {
//   setLoading(true);
//   const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle);
//   console.log(PROMPT);

//   try {
//     const result = await AIChatSession.sendMessage(PROMPT);
//     const responseText = await result.response.text(); // Get raw JSON string
//     const parsedData = JSON.parse(responseText);       // Convert JSON string to object/array
//     console.log(parsedData);

//     // Ensure it's an array
//     const summaryList = Array.isArray(parsedData) ? parsedData : [parsedData];
//     setAiGeneratedSummeryList(summaryList);
//     if (summaryList[0]?.summery) {
//         setSummery(summaryList[0].summery);
//       }
//   } catch (err) {
//     console.error('AI Response Parse Error:', err);
//     toast("Failed to generate summary from AI");
//   }

//   setLoading(false);
// };

//   const onSave=(e)=>{
//     e.preventDefault();

//     setLoading(true);
//     const data = {
//       data: {
//         summery:summery
//       }
//     };
//     GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
//       (resp) => {
//         console.log(resp);
//         enabledNext(true);
//         setLoading(false);
//         toast("Details updated")
//       },
//       (error) => {
//         setLoading(false);
//       }
//     );
//   }

//   return (
//     <div
//       className="p-5 shadow-lg rounded-lg
//       border-t-primary border-t-4 mt-10"
//       style={{ borderTopColor: "#9f5bff" }}>
//       <h2 className="font-bold text-lg">Summery</h2>
//       <p>Add Summery for your job title</p>

//       <form className="mt-7"
//       onSubmit={onSave}
//       >
//         <div className="flex justify-between items-center">
//           <label>Add Summery</label>
//           <Button
//           type='button'
//             variant="outline"
//             onClick={()=>GenerateSummeryFromAI()}
//             size="sm"
//             className="text-[#9f5bff] border-[#9f5bff] hover:text-[#9f5bff] hover:border-[#9f5bff] hover:bg-white hover:shadow-md hover:scale-105 transition-transform flex gap-2">
//                 <Brain className='h-4 w-4'/>
//             Generate from AI
//           </Button>
//         </div>
//         <Textarea
//           className="mt-5 border-2 border-gray-400"
//           required
//           onChange={(e) => setSummery(e.target.value)}
//         />
//         <div className="mt-2 flex justify-end">
//          <Button
//                      type="submit"
//                      disabled={loading}
//                      className=" hover:scale-105 transition-transform bg-[#9f5bff] hover:bg-[#9f5bff] text-white">
//                     {loading ? <LoaderCircle className="animate-spin" /> :'Save' }

//                    </Button>
//         </div>
//       </form>

//       {aiGeneratedSummeryList&&
//       <div>
//          <h2 className='font-bold text-large'>Suggestions</h2>
//           {aiGeneratedSummeryList.map((item,index)=>{
//                  <div>
//                   <h2 className='font-bold my-1'>Level: {item?.experienceLevel}</h2>
//                   <p>{item?.summery}</p>
//                  </div>
//           })}
//       </div>}
//     </div>
//   );
// }

// export default Summery;

import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { LoaderCircle, Brain } from "lucide-react";
import { AIChatSession } from "../../../../service/AIModel";
import { toast } from "sonner";

const prompt =
  "Job Title: {jobTitle}, depends upon job title give me summary for my resume within 4-5 lines in JSON format with field experience level and summary for experience level for freshers, mid level and experienced";

function Summery({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summery, setSummery] = useState(""); // editable text area state
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [aiGeneratedSummeryList, setAiGeneratedSummeryList] = useState([]);

  useEffect(() => {
    if (summery) {
      setResumeInfo({
        ...resumeInfo,
        summery: summery,
      });
    }
  }, [summery]);

  const GenerateSummeryFromAI = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);
    console.log(PROMPT);

    try {
      const result = await AIChatSession.sendMessage(PROMPT);
      const responseText = await result.response.text();
      const parsedData = JSON.parse(responseText);
       console.log("parsedData",parsedData)
      const summaryList = Array.isArray(parsedData) ? parsedData : [parsedData];

      console.log("summaryList",summaryList)
      // setAiGeneratedSummeryList(summaryList);
      setAiGeneratedSummeryList(summaryList[0].experienceLevels || []);

      // auto-fill first suggestion in textarea
      if (summaryList[0]) {
        setSummery(
             summaryList[0].experienceLevels[0].summary||
            "here is the summary if not summary exist"
        );
      }
    } catch (err) {
      console.error("AI Response Parse Error:", err);
      toast("Failed to generate summary from AI");
    }

    setLoading(false);
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      data: { summery },
    };

    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        enabledNext(true);
        setLoading(false);
        toast("Details updated");
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <div
      className="p-5 shadow-lg rounded-lg border-t-4 mt-10"
      style={{ borderTopColor: "#9f5bff" }}>
      <h2 className="font-bold text-lg">Summary</h2>
      <p>Add summary for your job title</p>

      <form className="mt-7" onSubmit={onSave}>
        <div className="flex justify-between items-center">
          <label>Add Summary</label>
          <Button
            type="button"
            variant="outline"
            onClick={GenerateSummeryFromAI}
            size="sm"
            className="text-[#9f5bff] border-[#9f5bff] hover:text-[#9f5bff] hover:border-[#9f5bff] hover:bg-white hover:shadow-md hover:scale-105 transition-transform flex gap-2">
            <Brain className="h-4 w-4" />
            Generate from AI
          </Button>
        </div>

        {/* Editable Textarea */}
        <Textarea
          className="mt-5 border-2 border-gray-400"
          required
          value={summery}
          onChange={(e) => setSummery(e.target.value)}
        />

        <div className="mt-2 flex justify-end">
          <Button
            type="submit"
            disabled={loading}
            className="hover:scale-105 transition-transform bg-[#9f5bff] hover:bg-[#9f5bff] text-white">
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>

      {/* AI Suggestions */}
      {aiGeneratedSummeryList.length > 0 && (
        <div className="mt-6">
          <h2 className="font-bold text-large">Suggestions</h2>
          {aiGeneratedSummeryList.map((item, index) => (
            <div
              key={index}
              className="p-3 border rounded-lg mt-2 hover:bg-gray-50 cursor-pointer"
              onClick={() => setSummery(item.summary)} // click to insert suggestion into textarea
            >
              <h2 className="font-bold my-1">Level: {item?.experienceLevel}</h2>
              <p>{item?.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Summery;
