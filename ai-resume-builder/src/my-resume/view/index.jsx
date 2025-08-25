
// import React, { useState, useEffect } from "react";
// import Header from "@/components/custom/Header";
// import { Button } from "@/components/ui/button";
// import PreviewSection from "@/dashboard/resume/components/PreviewSection"; // Default import without curly braces
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import GlobalApi from "../../../service/GlobalApi";
// import { useParams } from "react-router-dom";
// import  {RWebShare}  from "react-web-share";

// function ViewResume() {
//   const [resumeInfo, setResumeInfo] = useState();
//   const { resumeId } = useParams();

//   useEffect(() => {
//     GetResumeInfo();
//   }, []);

//   const GetResumeInfo = () => {
//     GlobalApi.GetResumeById(resumeId).then((resp) => {
//       console.log(resp.data.data);
//       const data = resp.data.data || {};
//       if (!data.themeColor) {
//         data.themeColor = "#ff4d4d";
//       }
//       setResumeInfo(data);
//     });
//   };

//   const HandleDownload = () => {
//     window.print();
//   };

//   return (
//     <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
//       <div id="no-print">
//         <Header />
//         <div className="pt-18 my-10 mx-10 md:mx-20 lg:mx-3">
//           <h2 className="text-center text-2xl font-medium">
//             Congrats! your Ultimate AI generated Resume is ready!
//           </h2>
//           <p className="text-center text-gray-400">
//             Now you are ready to download your resume and you can share unique
//             resume url with your friends and family.
//           </p>
//           <div className="flex justify-between px-44 my-10">
//             <Button
//               className="bg-[#9f5bff] hover:bg-[#9f5bff] text-white px-4 py-2 rounded"
//               onClick={HandleDownload}
//             >
//               Download
//             </Button>

//             <RWebShare
//               data={{
//                 text: "Hello Everyone, This is my resume please open url to see it.",
//                 url:
//                   import.meta.env.VITE_BASE_URL +
//                   "/my-resume/" +
//                   resumeId +
//                   "view",
//                 title: resumeInfo?.firstName + " " + resumeInfo?.lastName + " resume",
//               }}
//               onClick={() => console.log("shared successfully!")}
//             >
//               <button>Share 🔗</button>

//               <Button className="bg-[#9f5bff] hover:bg-[#9f5bff] text-white px-4 py-2 rounded">
//                 Share
//               </Button>
//             </RWebShare>
//           </div>
//         </div>
//       </div>
//       <div className="pt-24 my-10 mx-10 md:mx-20 lg:mx-3">
//         <div id="print-area">
//           <PreviewSection />
//         </div>
//       </div>
//     </ResumeInfoContext.Provider>
//   );
// }

// export default ViewResume;


import React, { useState, useEffect } from "react";
import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import PreviewSection from "@/dashboard/resume/components/PreviewSection";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../service/GlobalApi";
import { useParams } from "react-router-dom";

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeId } = useParams();

  useEffect(() => {
    GetResumeInfo();
  }, []);

  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId).then((resp) => {
      console.log(resp.data.data);
      const data = resp.data.data || {};
      if (!data.themeColor) {
        data.themeColor = "#ff4d4d";
      }
      setResumeInfo(data);
    });
  };

  const HandleDownload = () => {
    window.print();
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: resumeInfo?.firstName + " " + resumeInfo?.lastName + " resume",
          text: "Hello Everyone, This is my resume please open url to see it.",
          url: import.meta.env.VITE_BASE_URL + "/my-resume/" + resumeId + "view",
        })
        .then(() => console.log("shared successfully!"))
        .catch((error) => console.error("Share failed:", error));
    } else {
      alert("Web Share API not supported in this browser.");
    }
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />
        <div className="pt-18 my-10 mx-10 md:mx-20 lg:mx-3">
          <h2 className="text-center text-2xl font-medium">
            Congrats! your Ultimate AI generated Resume is ready!
          </h2>
          <p className="text-center text-gray-400">
            Now you are ready to download your resume and you can share unique
            resume url with your friends and family.
          </p>
          <div className="flex justify-between px-44 my-10">
            <Button
              className="bg-[#9f5bff] hover:bg-[#9f5bff] text-white px-4 py-2 rounded"
              onClick={HandleDownload}
            >
              Download
            </Button>
            <Button
              className="bg-[#9f5bff] hover:bg-[#9f5bff] text-white px-4 py-2 rounded"
              onClick={handleNativeShare}
            >
              Share 🔗
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-24 my-10 mx-10 md:mx-20 lg:mx-3">
        <div id="print-area">
          <PreviewSection />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;
