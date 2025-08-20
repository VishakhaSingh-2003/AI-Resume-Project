
import PersonalDetails from "@/dashboard/components/Forms/PersonalDetails";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Summery from "@/dashboard/components/Forms/Summery";

function FormSection() {
  const [activeFormIndex, setActiveFormindex] = useState(2);

  const [enableNext, setEnableNext]=useState(true)

  return (
    <div className="pt-20">
      <div className="flex justify-between items-center">
        {/* Theme Button */}
        <Button
          variant="outline"
          size="sm"
          className=" hover:scale-105 transition-transform bg-white hover:bg-white text-black flex gap-2">
          <LayoutGrid />
          Theme
        </Button>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              className=" bg-[#9f5bff] hover:bg-[#9f5bff] text-white
              hover:scale-105 transition-transform"
              onClick={()=>setActiveFormindex(activeFormIndex-1)}>
              <ArrowLeft />
            </Button>
          )}
          <Button
          disabled={!enableNext}
            className="bg-[#9f5bff] hover:bg-[#9f5bff]
            hover:scale-105 transition-transform text-white flex gap-2"
            size="sm"
            onClick={() => setActiveFormindex(activeFormIndex + 1)}>
            Next <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Personal Details */}
      {activeFormIndex===1? 
      <PersonalDetails enabledNext={(v)=>setEnableNext(v)} />
       :activeFormIndex==2?
      <Summery enabledNext={(v)=>setEnableNext(v)}/>:null
    }
     
      {/* Experience */}
      {/* Educational Details */}
      {/* Skills */}
    </div>
  );
}

export default FormSection;
