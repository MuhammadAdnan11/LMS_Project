import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function HomeCard(props) {
  return (
    <Card style={{ width: '23rem' }} className="HoverDiv">
      <Card.Img variant="top" src={props.imgrsc1} />
      <Card.Body>
        <Card.Title className="fw-bolder iconcolor1">{props.cardTitle}</Card.Title>
        <Card.Text>
          {props.cardName}
        </Card.Text>

        <Card.Text>
          {props.cardText}
        </Card.Text>
        <Link to="/courses"><Button className="btn-col">{props.btn}</Button></Link>
        <div className="row p-3 ">
                    <p className="price ">{props.price}<span className="sm-text ">{props.cents}</span></p>
                    <div className="stars ">
                        <span className="fa fa-star star-active"></span>
                        <span className="fa fa-star star-active"></span>
                        <span className="fa fa-star star-active"></span>
                        <span className="fa fa-star star-active"></span>
                        <span className="fa fa-star star-active"></span>
                    </div>
                </div>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;