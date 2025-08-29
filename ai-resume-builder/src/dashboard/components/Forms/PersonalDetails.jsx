// import React, { useContext } from "react";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import GlobalApi from "../../../../service/GlobalApi";
// import { Save,  LoaderCircle } from "lucide-react";
// import { toast } from "sonner";


// function PersonalDetails({ enabledNext }) {
//   const params = useParams();

//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

//   const [formData, setFormData] = useState();
//   const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     console.log(params);
//   }, []);
//   const handleInputChange = (e) => {
//     enabledNext(false);
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     setResumeInfo({
//       ...resumeInfo,
//       [name]: value,
//     });
//   };
//   const onSave = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const data = {
//       data: formData,
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
//   };

//   return (
//     <div
//       className="p-5 shadow-lg rounded-lg
//       border-t-primary border-t-4 mt-10"
//       style={{ borderTopColor: "#9f5bff" }}>
//       <h2 className="font-bold text-lg">Personal Detail</h2>
//       <p>Get Started with the basic information</p>

//       <form onSubmit={onSave}>
//         <div className="grid grid-cols-2 mt-5 gap-3">
//           <div>
//             <label className="text-sm">First Name</label>
//             <Input name="firstName" defaultValue={resumeInfo?.firstName} required onChange={handleInputChange} />
//           </div>

//           <div>
//             <label className="text-sm">Last Name</label>
//             <Input name="lastName" defaultValue={resumeInfo?.lastName} required onChange={handleInputChange} />
//           </div>

//           <div className="col-span-2">
//             <label className="text-sm">Job Title</label>
//             <Input name="jobTitle" defaultValue={resumeInfo?.jobTitle} required onChange={handleInputChange} />
//           </div>

//           <div className="col-span-2">
//             <label className="text-sm">Address</label>
//             <Input name="address" defaultValue={resumeInfo?.address} required onChange={handleInputChange} />
//           </div>

//           <div>
//             <label className="text-sm">Phone</label>
//             <Input name="phone" defaultValue={resumeInfo?.phone} required onChange={handleInputChange} />
//           </div>

//           <div>
//             <label className="text-sm">Email</label>
//             <Input name="email" defaultValue={resumeInfo?.email} required onChange={handleInputChange} />
//           </div>
//         </div>{" "}
//         <br />
//         <div className="mt-3 flex justify-end">
//           <Button
//             type="submit"
//             disabled={loading}
//             className=" hover:scale-105 transition-transform bg-[#9f5bff] hover:bg-[#9f5bff] text-white">
//            {loading ? <LoaderCircle className="animate-spin" /> :'Save' }
        
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default PersonalDetails;


import React, { useContext, useEffect, useState } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../service/GlobalApi";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

function PersonalDetails({ enabledNext }) {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [formData, setFormData] = useState(resumeInfo || {});
  const [loading, setLoading] = useState(false);

  // 🔑 Check if all required fields are filled → enable Next
  useEffect(() => {
    if (
      formData?.firstName &&
      formData?.lastName &&
      formData?.jobTitle &&
      formData?.address &&
      formData?.phone &&
      formData?.email
    ) {
      enabledNext(true);
    } else {
      enabledNext(false);
    }
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const updated = {
      ...formData,
      [name]: value,
    };

    setFormData(updated);
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { data: formData };

    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        toast("Details updated");
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );
  };

  return (
    <div
      className="p-5 shadow-lg rounded-lg border-t-4 mt-10"
      style={{ borderTopColor: "#9f5bff" }}
    >
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              value={formData?.firstName || ""}
              required
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              value={formData?.lastName || ""}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              value={formData?.jobTitle || ""}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input
              name="address"
              value={formData?.address || ""}
              required
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              value={formData?.phone || ""}
              required
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              value={formData?.email || ""}
              required
              onChange={handleInputChange}
            />
          </div>
        </div>

        <br />

        <div className="mt-3 flex justify-end">
          <Button
            type="submit"
            disabled={loading}
            className="hover:scale-105 transition-transform bg-[#9f5bff] hover:bg-[#9f5bff] text-white"
          >
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;

