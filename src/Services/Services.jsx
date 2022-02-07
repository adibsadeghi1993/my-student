import axios from "axios";



const instanceAxios =axios.create({
    baseURL:"http://localhost:4000"
})



const getAllUsers = () =>{
    return instanceAxios.get("/user")
}


const getOneUsers =(id)=>{
    return instanceAxios.get(`/user/${id}`)
}


const AddUsers =(newUser)=>{
    return instanceAxios.post("/user" ,newUser)
}


const deleteUsers =(id)=>{
    return instanceAxios.delete(`/user/${id}`)
}


const editUsers =(values ,id)=>{
    return instanceAxios.put(`/user/${id}`,values)
}


export {
    getAllUsers ,getOneUsers ,AddUsers ,deleteUsers ,editUsers
}


