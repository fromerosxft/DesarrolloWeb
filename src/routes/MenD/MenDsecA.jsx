import React from "react"
//import Botton from "../ObjM/Bottons"
import { Button, Card } from "react-bootstrap";

export default function MenDsecA(){

    return(
        <>
        <Card style={{ width: '18rem' }} className="text-center">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </>
        
    )
}