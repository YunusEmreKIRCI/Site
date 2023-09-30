import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Slider(props){

    return (
       <div style = {{width : '100%'}}>
         <Carousel style={{marginTop : 50}}>
         {props.photos.map((photo) => {
      return(
        <Carousel.Item>
          <img style = {{maxHeight : '1000px'}}
            className="d-block w-100"
            src = {photo.value}
            alt = "First slide"
            />
            
        </Carousel.Item>
     );

     })}
        </Carousel>
       </div>
      );

}
export default Slider;