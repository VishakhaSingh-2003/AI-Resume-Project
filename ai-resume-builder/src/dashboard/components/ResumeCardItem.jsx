// import React from "react";
// import { Notebook } from "lucide-react";
// import { Link } from "react-router-dom";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// function ResumeCardItem({ resume }) {
//   return (
//     <div>
//       <Link to={`/dashboard/resume/${resume.documentId}/edit?section=personal`}>
//         <div
//           className={`
//           p-14 bg-secondary flex items-center justify-center w-50 border border-[#9f5bff] rounded-lg
//           hover:scale-105 transition-all hover:shadow-md shadow-[#9f5bff]
//           bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200
//           h-[228px] rounded-t-lg border-t-5 border-t-red-600
//         `}
//           style={{
//             borderColor: resume?.themeColor,
//           }}>
//           <img src="/resume-svgrepo-com.svg" width={50} height={50} />
//         </div>
//         <h2 className="text-center my-1">{resume.title}</h2>
//       </Link>
//       <DropdownMenu>
//         <DropdownMenuTrigger>Open</DropdownMenuTrigger>
//         <DropdownMenuContent>
//           <DropdownMenuLabel>My Account</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>Profile</DropdownMenuItem>
//           <DropdownMenuItem>Billing</DropdownMenuItem>
//           <DropdownMenuItem>Team</DropdownMenuItem>
//           <DropdownMenuItem>Subscription</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }

// export default ResumeCardItem;

// import React from "react";
// import { Notebook } from "lucide-react";
// import { Link } from "react-router-dom";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@radix-ui/react-dropdown-menu";  // Correct package import

// function ResumeCardItem({ resume }) {
//   return (
//     <div>
//       <Link to={`/dashboard/resume/${resume.documentId}/edit?section=personal`}>
//         <div
//           className={`
//             p-14 bg-secondary flex items-center justify-center w-50 border border-[#9f5bff] rounded-lg
//             hover:scale-105 transition-all hover:shadow-md shadow-[#9f5bff]
//             bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200
//             h-[228px] rounded-t-lg border-t-5 border-t-red-600
//           `}
//           style={{
//             borderColor: resume?.themeColor,
//           }}
//         >
//           <img src="/resume-svgrepo-com.svg" width={50} height={50} />
//         </div>
//         <h2 className="text-center my-1">{resume.title}</h2>
//       </Link>
//       <DropdownMenu className='flex justify-between'>
//         <DropdownMenuTrigger>Open</DropdownMenuTrigger>
//         <DropdownMenuContent>
//           <DropdownMenuItem>Edit</DropdownMenuItem>
//           <DropdownMenuItem>View</DropdownMenuItem>
//           <DropdownMenuItem>Download</DropdownMenuItem>
//           <DropdownMenuItem>Delete</DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }

// export default ResumeCardItem;

import React from "react";
import { Loader2Icon, MoreVertical } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import GlobalApi from "../../../service/GlobalApi";
import { toast } from "sonner";

function ResumeCardItem({ resume, refreshData }) {
  const navigation = useNavigate();

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = ""; // This attribute will prompt the browser to download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId).then(
      (resp) => {
        console.log(resp);
        toast("Resume Deleted");
        refreshData();
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <div
      className="relative w-56 rounded-lg shadow-md overflow-hidden bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 mr-4 mb-4"
      style={{ borderColor: resume?.themeColor }}>
      {/* Dropdown Trigger at top-right */}
      <div className="absolute top-3 right-3 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 rounded-full hover:bg-gray-200">
              <MoreVertical size={20} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white rounded shadow-lg py-1">
            <DropdownMenuItem
              onClick={() =>
                navigation(
                  `/dashboard/resume/${resume.documentId}/edit?section=personal`
                )
              }>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigation(
                  `/my-resume/${resume.documentId}/view?section=personal`
                )
              }>
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigation(
                  `/my-resume/${resume.documentId}/view?section=personal`
                )
              }>
              Download
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenAlert(true)}>
              {/* Add delete logic here */}Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={openAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenAlert(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={onDelete}
                disabled={loading}
                className="bg-[#9f5bff] hover:bg-[#9f5bff] text-white">
                {loading ? <Loader2Icon className="animate-spin" /> : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Link to={`/dashboard/resume/${resume.documentId}/edit?section=personal`}>
        <div className="flex flex-col items-center justify-center py-10">
          <img
            src="/resume-svgrepo-com.svg"
            width={50}
            height={50}
            alt="Resume"
          />
        </div>
        {/* Title bar at bottom */}
        <div
          className="w-full py-2 text-center font-semibold text-white"
          style={{
            background: resume.themeColor || "#f43f5e", // fallback color
            borderBottomLeftRadius: "0.75rem",
            borderBottomRightRadius: "0.75rem",
          }}>
          {resume.title}
        </div>
      </Link>
    </div>
  );
}

export default ResumeCardItem;
