import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';
import {IoLogoInstagram, IoMailOutline, IoLogoLinkedin, IoLogoTwitter} from 'react-icons/io5';


function PerCard(props){
    return(
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.src}/>
      <Card.Body>
        <Card.Title style={{textAlign : "center"}}>{props.name}</Card.Title>
        <Card.Text style={{textAlign : "center"}}>
          {props.title}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item  style={{textAlign : "center"}}>{props.major}</ListGroup.Item>
        
      </ListGroup>
      <Card.Body  style={{textAlign : "center"}}>
        <Card.Link href={props.insta}><IoLogoInstagram size = "28"/></Card.Link>
        <Card.Link href={props.mail}><IoMailOutline size = "31"/></Card.Link>
        <Card.Link href={props.linked}><IoLogoLinkedin size = "27"/></Card.Link>
        <Card.Link href={props.twit}><IoLogoTwitter size ="26"/></Card.Link>
      </Card.Body>
    </Card>

    );

}
export default PerCard;