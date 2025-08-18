// import PersonalDetails from "@/dashboard/components/Forms/PersonalDetails";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
// import { useState } from "react";

// function FormSection() {
//     const [activeFormIndex, setActiveFormindex]=useState(3)
//   return (
//     <div className="pt-20">
//       <div className="flex justify-between items-center">
//         <Button variant='outline' size='sm' className=" bg-[white] hover:bg-[white] text-black flex gap-2">
//           <LayoutGrid/>
//           Theme
//         </Button>
//         <div>
//             {activeFormIndex>1
//             &&<Button size='sm' className='bg-[#9f5bff] hover:bg-[#9f5bff] text-white' ><ArrowLeft/></Button>}
//           <Button
//             className=" bg-[#9f5bff] hover:bg-[#9f5bff] text-white flex gap-2"
//             size="sm">
//             Next <ArrowRight />
//           </Button>
//         </div>
//       </div>

//       {/*Personal Details*/}
//       <PersonalDetails />

//       {/*Summery */}

//       {/*Experience */}

//       {/*Educational Details */}

//       {/*Skills */}
//     </div>
//   );
// }

// export default FormSection;

import PersonalDetails from "@/dashboard/components/Forms/PersonalDetails";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

function FormSection() {
  const [activeFormIndex, setActiveFormindex] = useState(1);

  const [enableNext, setEnableNext]=useState(false)

  return (
    <div className="pt-20">
      <div className="flex justify-between items-center">
        {/* Theme Button */}
        <Button
          variant="outline"
          size="sm"
          className="bg-white hover:bg-white text-black flex gap-2">
          <LayoutGrid />
          Theme
        </Button>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              className="bg-[#9f5bff] hover:bg-[#9f5bff] text-white"
              onClick={()=>setActiveFormindex(activeFormIndex-1)}>
              <ArrowLeft />
            </Button>
          )}
          <Button
          disabled={!enableNext}
            className="bg-[#9f5bff] hover:bg-[#9f5bff] text-white flex gap-2"
            size="sm"
            onClick={() => setActiveFormindex(activeFormIndex + 1)}>
            Next <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Personal Details */}
      {activeFormIndex===1? <PersonalDetails enabledNext={(v)=>setEnableNext(v)} />
       :null}
      {/* Summery */}
      {/* Experience */}
      {/* Educational Details */}
      {/* Skills */}
    </div>
  );
}

export default FormSection;
