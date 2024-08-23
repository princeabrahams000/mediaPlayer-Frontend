import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { AllCategoryApi, getVideoApi, updateCategoryApi } from '../services/allApi'


function Vmus({addStatus, setDragStatus}) {

  const [videoDetails, setVideoDetails] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus] =useState([])

  const getVideo = async()=>{
    const result = await getVideoApi()
    setVideoDetails(result.data)
  }

  const DragOver =(e)=>{
    e.preventDefault()
  }

  const videoDrop =async(e)=>{
    const{videoId, categoryId} =JSON.parse(e.dataTransfer.getData("dataShared"))
    console.log(videoId, categoryId);

    //get all category
    const {data} = await AllCategoryApi()
    console.log(data);
    //get selected category
    const selectedCatagory = data.find((item)=>item.id == categoryId)
    console.log(selectedCatagory);
    
    //remove video from the selected categroy.
    const result = selectedCatagory.allVideo.filter((item)=>item.id!=videoId)

    const reqBody = {
      categoryName: selectedCatagory.categoryName,
      allVideo:result,
      id:selectedCatagory.id
    }

    await updateCategoryApi(categoryId,reqBody)
    setDragStatus(true)
    
  }

  useEffect(()=>{
    getVideo()
  },[addStatus,deleteVideoStatus])
  console.log(videoDetails);


  return (

    <Row className='w-100 ms-1' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrop(e)}>

      {videoDetails?.length>0?
        videoDetails?.map((item)=>( <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
          <VideoCard displayVideo ={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </Col>))
        :
        <p className='text-warning fs-5 mt-4'>No video yet uploaded....</p>}
    </Row>
  )
}

export default Vmus