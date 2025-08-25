import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const CreateNewResume = (data) =>
  axiosClient.post("/user-resume-profiles", data);

const GetUserResumes = (userEmail) =>
  axiosClient.get(`/user-resume-profiles?filters[userEmail][$eq]=${userEmail}`);

const UpdateResumeDetail=(id,data)=>axiosClient.put('/user-resume-profiles/'+id,data)


const GetResumeById=(id)=>axiosClient.get('/user-resume-profiles/'+id+"?populate=*")
export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById
};
