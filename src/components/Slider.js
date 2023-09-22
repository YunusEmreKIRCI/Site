import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Slider(props){

    return (
       <div style = {{width : '100%'}}>
         <Carousel style={{marginTop : 50}}>
         {props.photos.map((photo) => {
      return(
        <Carousel.Item>
          <img
            className="d-block w-100"
            src = {photo.value}
            alt = "First slide"
            />
            <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
     );

     })}
        </Carousel>
       </div>
      );

}
export default Slider;