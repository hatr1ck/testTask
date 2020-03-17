import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './card.css';

function CardComponent(props) {

  return (
    <Card className="Card">
      <Card.Img className="CardImage" variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.brand}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default CardComponent;
