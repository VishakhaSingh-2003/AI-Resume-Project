import { Input } from "@/components/ui/input";
import React, { useState, useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

function Skills() {
  const [skillsList, setSkillsList] = useState([
    {
      name: "",
      rating: 0,
    },
  ]);
  const { resumeId } = useParams();
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  useEffect(() => {
    if (
      Array.isArray(resumeInfo?.skills) &&
      resumeInfo.skills.length > 0
    ) {
      setSkillsList(resumeInfo.skills);
    }
  }, []);

  const handleChange = (index, name, value) => {
    const newEntries = [...skillsList];

    newEntries[index][name] = value;
    setSkillsList(newEntries);
  };

  const AddNewSkills = () => {
    setSkillsList([
      ...skillsList,
      {
        name: "",
        rating: 0,
      },
    ]);
  };

  const RemoveSkills = () => {
    setSkillsList((skillsList) => skillsList.slice(0, -1));
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        skills: skillsList,
      },
    };
    GlobalApi.UpdateResumeDetail(resumeId, data)
      .then((resp) => {
        setLoading(false);
        toast("Details updated!");
      })
      .catch((error) => {
        setLoading(false);
        toast("Server Error, Try again!");
      });
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      skills: skillsList,
    });
  }, [skillsList]);

  return (
    <div
      className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10"
      style={{ borderTopColor: "#9f5bff" }}>
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add your top professional key skills</p>

      <div>
        {skillsList.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-400 flex justify-between rounded-lg p-3 mb-2">
            <div>
              <label className=" text-sm">Name</label>
              <Input
                className=" border-2 border-gray-400 w-full"
                defaultValue={item?.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
            </div>

            <Rating
              style={{ maxWidth: 120 }}
              value={item.rating}
              onChange={(v) => handleChange(index, "rating", v)}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <Button
          onClick={AddNewSkills}
          className="border-2 border-gray-400 text-[#9f5bff] hover:text-[#9f5bff] focus:text-[#9f5bff] active:text-[#9f5bff] hover:scale-105 transition-transform"
          variant="outline">
          + Add new skills
        </Button>
        <Button
          onClick={RemoveSkills}
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

export default Skills;
