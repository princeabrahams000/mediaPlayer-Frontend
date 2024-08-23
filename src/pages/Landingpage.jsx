import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Landingpage() {
  return (
    <>
      <div className="row mt-5 w-100">
        <div className="col-md-1"></div>
        <div className="col-md-5 p-5">
          <h4>
            Welcome to <span className="text-primary">Media Player</span>
          </h4>
          <p className="mt-3" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            molestiae laudantium quam a fuga aperiam voluptas aspernatur et odio
            nam asperiores nostrum modi sit, assumenda maxime, qui consectetur
            reiciendis. Iure? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sapiente dolorem nisi alias, sit ex quidem
            repellendus architecto nam, cum, modi eum! Id consequuntur quam
            fugit aliquam minima sapiente, tenetur eum.
          </p>
          <button className="btn btn-primary mt-5"><Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Get Started</Link></button>
        </div>
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img
            src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif"
            alt="no-image"
            className="w-100"
          />
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row">
        <h4 className="mt-5 text-center text-white mb-5">Features</h4>
        <div className="col-md-1 ms-md-5"></div>

        <div className="col-md-3 px-5 px-md-4 mt-5">
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif" className='w-100' height={'300px'}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 px-5 px-md-4 mt-5">
          
        <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/62/0c/5a/620c5a819f8b8fa2a75575edf1d155ec.gif" className='w-100' height={'300px'}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 px-5 px-md-4 mt-5">
        <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/74/b5/54/74b55475a352f598c77ae51372297666.gif" className='w-100' height={'300px'}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-1"></div>
      </div>

      <div className="row w-100 mt-5 ">
        <div className="col-md-1"></div>
        <div style={{width:'80%'}} className="col-md-10 border p-4 rounded m-5">
          <div className="row w-100 mt-5">
            <div className="col-md-6">
              <h4 className='text-primary'>Simple fast and PowerFul</h4>
              <p className='mt-4'><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maiores eos neque quae, odio id molestias?.</p>

              <p className='mt-4'><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maiores eos neque quae, odio id molestias?.</p>

              <p className='mt-4'><span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maiores eos neque quae, odio id molestias?.</p>

            </div>
            <div className="col-md-6">
            <iframe width="100%" height="414" src="https://www.youtube.com/embed/ztZzDw3h3W0" title="Manassin madiyile|Vijay Superum Pournamiyum|Climax song|K.S CHITRA|Lantern media" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
}

export default Landingpage