import { commonApi } from "./commonApi"
import {serverUrl} from "./serverUrl"

 
//api to add videos
export const addVideoApi = async(reqbody)=>{
    return await commonApi('POST', `${serverUrl}/videos`,reqbody)
}

//api to get all videos

export const getVideoApi = async() =>{
    return await commonApi('GET',`${serverUrl}/videos`,"")
}


//api to delete a video

export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{} )
}

//api to add video to watch history

export const addToHistoryApi = async(reqbody)=>{
    return await commonApi('POST', `${serverUrl}/history`,reqbody)
}

//api to get video from watch hisrory

export const getVideoFromHistoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
}


//api to delete a video from history

export const deleteVideoFromHistory = async(id)=>{
    return await  commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

//api to add catagory

export const addCatagoryApi = async(reqBody)=>{
return await commonApi('POST',`${serverUrl}/catagory`,reqBody)
}


//api to get all catagory

export const AllCategoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/catagory`,"")
}

//api to delete catagory

export const deleteCatagoryApi = async(id) =>{
    return await commonApi('DELETE',`${serverUrl}/catagory/${id}`,{})
}

//api to get a video

export const AvideoApi = async (id)=>{
    return await commonApi('GET',`${serverUrl}/videos/${id}`,"")
}

//api to update catagory
export const updateCategoryApi  = async(id , reqBody)=>{
   return await commonApi('PUT', `${serverUrl}/catagory/${id}`, reqBody)
}
    