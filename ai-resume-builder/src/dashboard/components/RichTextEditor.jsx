import React from "react";
import { Button } from "@/components/ui/button";
import { Brain, LoaderCircle } from "lucide-react";

import {
  EditorProvider,
  Editor,
  BtnUnderline,
  BtnStrikeThrough,
  Separator,
  BtnNumberedList,
  BtnBulletList,
  BtnLink,
} from "react-simple-wysiwyg";
import { useState } from "react";
import { Toolbar, BtnBold, BtnItalic } from "react-simple-wysiwyg";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { toast} from "sonner";
import { AIChatSession } from "../../../service/AIModel";
import { useContext } from "react";
import { useEffect } from "react";


const PROMPT="Position Title: {positionTitle}, depends upon job title give me summery for my resume within 4-5 lines in JSON format with field experience level and summery for experience level for freshers, mid level and experienced"




function RichTextEditor({ onRichTextEditorChange, index, defaultValue}) {
  const [value, setValue] = useState('<ul> <li>good and stability.</li> <li>Proficient in version control syatems contributing to a collaborative development environment.</li> </ul>');
  const {resumeInfo, setResumeInfo}=useContext(ResumeInfoContext)
  const[loading, setLoading]=useState(false);

  const GenerateSummeryFromAI=async()=>{
    setLoading(true)
    if(!resumeInfo.experience[index].title)
    {
       toast('Please Add Position Title');
       return;
    }
    const prompt=PROMPT.replace('{positionTitle}',resumeInfo.experience[index].title)
      const result = await AIChatSession.sendMessage(prompt);
        const responseText = await result.response.text();
       console.log(result.response.text());
        const resp=result.response.text()
        setValue(resp.replace('[','').replace(']',''));
        setLoading(false);
  }

  return (
    <div>
      {/* Summary label and Generate button OUTSIDE the bordered container */}
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm">Summary</label>
        <Button
          size="sm"
          onClick={GenerateSummeryFromAI}
          variant="outline"
          className="mt-2 border-2 border-gray-400 text-[#9f5bff] hover:text-[#9f5bff] focus:text-[#9f5bff] active:text-[#9f5bff] hover:scale-105 transition-transform"
        >
            {loading?
        <LoaderCircle className="animate-spin"/>: 
        <>
         <Brain className="h-2 w-4" />
          Generate from AI
         
        </>
        }
         </Button> 
         
      </div>
    <div className="border-2 border-gray-400 rounded-md ">

      
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}>
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
    </div>
  );
}



 export default RichTextEditor;

