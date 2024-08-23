import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { addToHistoryApi, deleteVideoApi } from "../services/allApi";


function VideoCard({displayVideo, setDeleteVideoStatus, isPresent}) {
  console.log(displayVideo);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);

    let caption = displayVideo?.caption
    let url = displayVideo?.url
    let time = new Date()
    let timeStamp = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)

    console.log(timeStamp);

    const reqBody = {
      caption, url, timeStamp

    }
    const result = await addToHistoryApi(reqBody)
    console.log(result);
    
    
}
  

  const handleDelete = async(id)=>{
    const result = await deleteVideoApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      
      setDeleteVideoStatus(result.data)
    }
    
  }

  const videoDrag = (e, id)=>{
    console.log('card draged is :',id);
    e.dataTransfer.setData("videoId",id)
    
  }


  return (
    <>
      <Card style={{ width: "100%" }} className=" mt-3  ms-md-0" draggable onDragStart={(e)=>videoDrag(e,displayVideo?.id)}>
        {!isPresent && <Card.Img
          onClick={handleShow}
          variant="top"
          src={displayVideo?.image}
          width={"100%"}
          height={"300px"}
        />}
        <Card.Body className="d-flex justify-content-between">
          <Card.Text className="me-3">{displayVideo?.caption}</Card.Text>
          
          {!isPresent && <Button className="btn btn-danger ms-auto" onClick={()=>handleDelete(displayVideo?.id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="444"
            src={`${displayVideo?.url}?autoplay=1`}
            title="Addiction (Official Video) Garry Sandhu | New Punjabi Video Song 2024 | Bipolar | Fresh Media Record"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
