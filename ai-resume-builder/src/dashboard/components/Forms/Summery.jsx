import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext, useEffect, useState } from "react";
import GlobalApi from "../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import { Brain } from "lucide-react";
import { AIChatSession } from "../../../../service/AIModel";
import { toast } from "sonner";

const prompt = 'Job Title: {jobTitle},depends upon job title give me summery for my resume within 4-5 lines in JSON format with field experience level and summery for experience level for freshers, mid level and experienced'

function Summery({enabledNext}) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summery, setSummery] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [aiGeneratedSummeryList, setAiGeneratedSummeryList]=useState();

  useEffect(() => {
    summery &&
      setResumeInfo({
        ...resumeInfo,
        summery: summery,
      });
  }, [summery]);

  // const GenerateSummeryFromAI = async () => {
  //   setLoading(true);
  //   const PROMPT=prompt.replace('{jobTitle}',resumeInfo?.jobTitle);
  //   console.log(PROMPT);
  //   const result=await AIChatSession.sendMessage(PROMPT)
  //   console.log(JSON.parse(result.response.text()));
  //   setAiGeneratedSummeryList(JSON.parse([result.response.text()]))
  //   setLoading(false);
  // }


const GenerateSummeryFromAI = async () => {
  setLoading(true);
  const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle);
  console.log(PROMPT);

  try {
    const result = await AIChatSession.sendMessage(PROMPT);
    const responseText = await result.response.text(); // Get raw JSON string
    const parsedData = JSON.parse(responseText);       // Convert JSON string to object/array
    console.log(parsedData);

    // Ensure it's an array
    const summaryList = Array.isArray(parsedData) ? parsedData : [parsedData];
    setAiGeneratedSummeryList(summaryList);
  } catch (err) {
    console.error('AI Response Parse Error:', err);
    toast("Failed to generate summary from AI");
  }

  setLoading(false);
};




  const onSave=(e)=>{
    e.preventDefault();

    setLoading(true);
    const data = {
      data: {
        summery:summery
      }
    };
    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        enabledNext(true);
        setLoading(false);
        toast("Details updated")
      },
      (error) => {
        setLoading(false);
      }
    );
  }

  return (
    <div
      className="p-5 shadow-lg rounded-lg
      border-t-primary border-t-4 mt-10"
      style={{ borderTopColor: "#9f5bff" }}>
      <h2 className="font-bold text-lg">Summery</h2>
      <p>Add Summery for your job title</p>

      <form className="mt-7"
      onSubmit={onSave}
      >
        <div className="flex justify-between items-center">
          <label>Add Summery</label>
          <Button
          type='button'
            variant="outline"
            onClick={()=>GenerateSummeryFromAI()}
            size="sm"
            className="text-[#9f5bff] border-[#9f5bff] hover:text-[#9f5bff] hover:border-[#9f5bff] hover:bg-white hover:shadow-md hover:scale-105 transition-transform flex gap-2">
                <Brain className='h-4 w-4'/>
            Generate from AI
          </Button>
        </div>
        <Textarea
          className="mt-5 border-2 border-gray-400"
          required
          onChange={(e) => setSummery(e.target.value)}
        />
        <div className="mt-2 flex justify-end">
         <Button
                     type="submit"
                     disabled={loading}
                     className=" hover:scale-105 transition-transform bg-[#9f5bff] hover:bg-[#9f5bff] text-white">
                    {loading ? <LoaderCircle className="animate-spin" /> :'Save' }
                 
                   </Button>
        </div>
      </form>


      {aiGeneratedSummeryList&&
      <div>
         <h2 className='font-bold text-large'>Suggestions</h2>
          {aiGeneratedSummeryList.map((item,index)=>{
                 <div>
                  <h2 className='font-bold my-1'>Level: {item?.experienceLevel}</h2>
                  <p>{item?.summery}</p>
                 </div>
          })}
      </div>}
    </div>
  );
}

export default Summery;
