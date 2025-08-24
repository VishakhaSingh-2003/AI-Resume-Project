import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../service/GlobalApi";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";



function Education() {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [educationalList, setEducationalList] = useState([
    {
      universityName: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const handleChange = (event, index) => {
    const newEntries = [...educationalList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setEducationalList(newEntries);
  };

  const AddNewEducation = () => {
    setEducationalList([
      ...educationalList,
      {
        universityName: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const RemoveEducation = () => {
    setEducationalList((educationalList) =>
      educationalList.length > 1
        ? educationalList.slice(0, -1)
        : educationalList
    );
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        education: educationalList,
      },
    };

    GlobalApi.UpdateResumeDetail(params.resumeId, data).then(
      (resp) => {
        console.log(resp);
        setLoading(false);
        toast("Details updated");
      },
      (error) => {
        setLoading(false);
        toast("Server Error, Please try again!");
      }
    );
  };
  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      education: educationalList,
    });
  }, [educationalList]);

  return (
    <div
      className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10"
      style={{ borderTopColor: "#9f5bff" }}>
      <h2 className="font-bold text-lg">Education</h2>
      <p>Add your educational details</p>

      <div>
        {educationalList.map((item, index) => (
          <div key={index}>
            <div className="border-2 border-gray-400 grid grid-cols-2 gap-3 p-3 my-5 rounded-lg">
              <div className="col-span-2">
                <label className="text-xs">University Name</label>
                <Input
                  className="border-2 border-gray-400"
                  name="universityName"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div>
                <label className="text-xs">Degree</label>
                <Input
                  className="border-2 border-gray-400"
                  name="degree"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div>
                <label className="text-xs"> Major</label>
                <Input
                  className="border-2 border-gray-400"
                  name="major"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div>
                <label className="text-xs">Start Date</label>
                <Input
                  type="date"
                  className="border-2 border-gray-400"
                  name="startDate"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div>
                <label className="text-xs">End Date</label>
                <Input
                  type="date"
                  className="border-2 border-gray-400"
                  name="endDate"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div className="col-span-2">
                <label className="text-xs">Description</label>
                <Textarea
                  className="border-2 border-gray-400"
                  name="description"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <Button
          onClick={AddNewEducation}
          className="border-2 border-gray-400 text-[#9f5bff] hover:text-[#9f5bff] focus:text-[#9f5bff] active:text-[#9f5bff] hover:scale-105 transition-transform"
          variant="outline">
          + Add More Education
        </Button>
        <Button
          onClick={RemoveEducation}
          className="border-2 border-gray-400 text-[#9f5bff] hover:text-[#9f5bff] focus:text-[#9f5bff] active:text-[#9f5bff] hover:scale-105 transition-transform"
          variant="outline">
          - Remove
        </Button>
      </div>
      <div className="flex justify-end mt-4">
        <Button
          className="hover:scale-105 transition-transform bg-[#9f5bff] hover:bg-[#9f5bff] text-white"
          disabled={loading}
          onClick={onSave}>
          {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default Education;
