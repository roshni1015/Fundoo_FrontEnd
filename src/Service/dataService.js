import axios from "axios";

let configObjForaddNotes1 = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
  }

  export const createNotes = (obj) =>{
    console.log(configObjForaddNotes1);
    return axios.post("http://localhost:1000/api/v1/userNotes", obj, configObjForaddNotes1)
}

export const getAllNotes = () =>{
    console.log(configObjForaddNotes1);
    return axios.get("http://localhost:1000/api/v1/userNotes", configObjForaddNotes1)
}

export const editNotes = (obj, _id) => {
  console.log(obj);
  return axios.put(`http://localhost:1000/api/v1/userNotes/${_id}`,obj, configObjForaddNotes1)
}

export const archiveNotes = (_id) => {
  return axios.put(`http://localhost:1000/api/v1/userNotes/${_id}/isArchive`, null, configObjForaddNotes1)
}

export const TrashNotes = (_id) => {
  return axios.put(`http://localhost:1000/api/v1/userNotes/${_id}/isDelete`, null, configObjForaddNotes1)
}

export const UpdateNotes = (Obj,_id) =>{
  return axios.put(`http://localhost:1000/api/v1/userNotes/${_id}`,Obj,configObjForaddNotes1)
   
}