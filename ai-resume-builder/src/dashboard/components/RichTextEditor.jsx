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
import { toast } from "sonner";
import { AIChatSession } from "../../../service/AIModel";
import { useContext } from "react";
import { useEffect } from "react";


const PROMPT = `
Position Title: {positionTitle}

Please provide a concise professional summary suitable for a resume. 
Write it in clear, formal language as a paragraph (around 4-5 lines). 
Do not use bullet points or lists. Just write a professional summary paragraph.

Return only the summary text as plain text or JSON with a single field summary
`




function RichTextEditor({ onRichTextEditorChange, index}) {
  const [value, setValue] = useState();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  const GenerateSummeryFromAI = async () => {
    setLoading(true);
    if (!resumeInfo.experience[index].title) {
      toast("Please Add Position Title");
      return;
    }
    const prompt = PROMPT.replace(
      "{positionTitle}",
      resumeInfo.experience[index].title
    );
    const result = await AIChatSession.sendMessage(prompt);
    const responseText = await result.response.text();
    console.log(result.response.text());
    const resp = result.response.text();
    setValue(resp.replace("[", "").replace("]", ""));
    setLoading(false);
  };

  return (
    <div>
      {/* Summary label and Generate button OUTSIDE the bordered container */}
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm">Summary</label>
        <Button
          size="sm"
          onClick={GenerateSummeryFromAI}
          variant="outline"
          className="mt-2 border-2 border-gray-400 text-[#9f5bff] hover:text-[#9f5bff] focus:text-[#9f5bff] active:text-[#9f5bff] hover:scale-105 transition-transform">
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="h-2 w-4" />
              Generate from AI
            </>
          )}
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
