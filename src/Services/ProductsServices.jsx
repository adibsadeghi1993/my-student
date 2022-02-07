import axios from "axios";



const instanceAxios =axios.create({
    baseURL :"http://localhost:4000"
})

 const getAllProducts =()=>{
        return instanceAxios.get("/products")
 }



 export {
    getAllProducts
 }