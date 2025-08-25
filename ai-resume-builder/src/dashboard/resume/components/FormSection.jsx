import PersonalDetails from "@/dashboard/components/Forms/PersonalDetails";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Summery from "@/dashboard/components/Forms/Summery";
import Experience from "@/dashboard/components/Forms/Experience";
import Education from "@/dashboard/components/Forms/Education";
import Skills from "@/dashboard/components/Forms/Skills";
import { Home } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import ViewResume from "@/my-resume/view";
import ThemeColor from "@/dashboard/components/ThemeColor";

function FormSection() {
  const [activeFormIndex, setActiveFormindex] = useState(2);

  const [enableNext, setEnableNext] = useState(true);
  const {resumeId} = useParams();
  return (
    <div className="pt-20">
      <div className="flex justify-between items-center">
        {/* Theme Button */}
        <div className="flex gap-5">
          <Link to={'/dashboard'}>
          <Button className='bg-[#9f5bff] hover:bg-[#9f5bff] text-white
              hover:scale-105 transition-transform'><Home/></Button>
          </Link>
          <ThemeColor/>
          
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              className=" bg-[#9f5bff] hover:bg-[#9f5bff] text-white
              hover:scale-105 transition-transform"
              onClick={() => setActiveFormindex(activeFormIndex - 1)}>
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
      {activeFormIndex === 1 ? (
        <PersonalDetails enabledNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 2 ? (
        <Summery enabledNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex === 3 ? (
        <Experience />
      ) : activeFormIndex == 4 ? (
        <Education />
      ) : activeFormIndex == 5 ? (
        <Skills />
      )
      :activeFormIndex==6 ? (
      <Navigate to={'/my-resume/'+resumeId+'/view'}/>
      )
      : null}
      

      {/* Experience */}
      {/* Educational Details */}
      {/* Skills */}
    </div>
  );
}

export default FormSection;
