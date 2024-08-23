import { faPenNib, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCatagoryApi, AllCategoryApi, AvideoApi, deleteCatagoryApi, updateCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Row } from 'react-bootstrap'



function Catagory({dragStatus, setDragStatus}) {
  const [show, setShow] = useState(false);
  const [categoryName,setCatagoryName]=useState("")
  const [allCategory, setAllCatagory] = useState([])
  const [addStatus, setAddStaus] = useState(false)


  const handleClose = () => {setShow(false)
    setCatagoryName("")
  };
  const handleShow = () => setShow(true);

  const addCatagory = async()=>{


    if(categoryName){
      const reqBody ={
        categoryName,
        allVideo:[]
      }
      const result = await addCatagoryApi(reqBody)  
      if(result.status>=200 && result.status<300){
        setAddStaus(true)
        handleClose()
        toast.success('Catagory added successufully')
  
      }else{
        console.log(result);
        
      }
      
    }else{
      toast.info('Please add the Catagory name')
    }
  }

  const getAllCategory = async()=>{
    const result = await AllCategoryApi()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setAllCatagory(result.data)
     
    }
    
  }
  console.log(allCategory);
  const delCategory = async(id)=>{
    const result = await deleteCatagoryApi(id)
    console.log(result);
    getAllCategory()
    
  }
  
  const DragOver = (e)=>{
    e.preventDefault()
  }

  const VideoDrop = async(e, categoryId)=>{
    console.log(`category id is :${categoryId}`);
    //access the video id from view component
    const videoId= e.dataTransfer.getData("videoId")
    console.log("video id is",videoId);
    //get video details from backend
    const {data} = await AvideoApi(videoId)
    console.log(data);

    const selectedCatagory = allCategory.find((item)=>item.id==categoryId)

    if(selectedCatagory.allVideo.find((item)=>item.id==data.id)){
      toast.warning('Video already exist in Catagory')

    }else{
      selectedCatagory.allVideo.push(data)
      await updateCategoryApi(categoryId,selectedCatagory)

      getAllCategory()
    }
    
  }

const DragStart = (e, videoId,categoryId)=>{
  console.log(videoId);
  console.log(categoryId);
  let dataShare ={
    videoId, categoryId
  }
  e.dataTransfer.setData("dataShared",JSON.stringify(dataShare))
}



  useEffect(()=>{
    setAddStaus(false)
    getAllCategory()
    setDragStatus(false)
  },[addStatus, dragStatus])

  return (
    <>
      <div className="w-100 mt-1 p-4">
        <button onClick={handleShow} className="btn btn-warning w-100">
          Add New Catagory
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {allCategory?.length > 0
        ? allCategory?.map((item) => (
            <div
              className="mt-5"
              droppable
              onDragOver={(e) => DragOver(e)}
              onDrop={(e) => VideoDrop(e, item.id)}
            >
              <div className="border border-secondary mt-3 rounded p-3 ms-2">
                <div className="d-flex">
                  <h5>{item.categoryName}</h5>
                  <button
                    className="btn btn-danger ms-auto"
                    onClick={() => delCategory(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
                <Row>
                  {item?.allVideo?.length>0?
                  item?.allVideo?.map((videoItem)=>(<Col sm={12} draggable onDragStart={(e)=>DragStart(e,videoItem.id,item.id)}>
                    <VideoCard displayVideo={videoItem} isPresent={true}/>
                  </Col>))
                  
                  : 
                  null}
                </Row>
              </div>
            </div>
          ))
        : null}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">
            <FontAwesomeIcon icon={faPenNib} />
            Add New Catagory
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="border rounded p-3 border-secondary">
            <input
              type="text"
              placeholder="Category Name"
              className="form-control"
              onChange={(e) => setCatagoryName(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addCatagory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </>
  );  
}

export default Catagory