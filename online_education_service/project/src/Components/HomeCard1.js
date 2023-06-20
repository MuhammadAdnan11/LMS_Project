import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BiTimeFive} from "react-icons/bi"
import {FiMapPin} from "react-icons/fi"


function HomeCard1(props) {
  return (
    <Card style={{ width: '23rem' }} className="HoverDiv">
      <Card.Img variant="top" src={props.imgrsc1} />
      
      <Button className=" datebtn bg-white text-black fs-5 fw-bold">{props.btnD}</Button>
      
      <Card.Body>
        <Card.Title className="fw-bolder iconcolor1">{props.cardTitle}</Card.Title>
        <div className="mt-5">
        <span> <BiTimeFive className="fs-5"/> {props.time}</span><br/>
        <span> <FiMapPin className="fs-5"/>{props.place}</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default HomeCard1;