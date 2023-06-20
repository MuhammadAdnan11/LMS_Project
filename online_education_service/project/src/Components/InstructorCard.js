import React from "react";
import "./Instructor.css";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";




const InstructorCard = (props) => {
  return (
    <>
    
          

          <Card style={{ width: '20rem',height:"102px" }} className="d-flex flex-row HoverDiv" id="intShadow">
              <Card.Img variant="top" src={props.imginsrc} className="text-center mt-2" style={ {width:"80px", height:"80px"}} />
      
      <div className="d-block ms-3 mt-3" style={{height:"120px", width:"200px"}}>
          <Card.Title className="fw-bolder iconcolor1">
            <Link to={`/specificInstructor/${props.id}`}>{props.inname}</Link>
          </Card.Title>
        <div className="mt-1">
        <span> {props.instr}</span><br/>
        
        </div>
        </div>
    </Card>


    </>
  );
};

export default InstructorCard;