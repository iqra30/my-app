import React from 'react';
import './PersonEdit.css';
import PropType from 'prop-types';
import {Button,Card,ButtonGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function PersonEdit(props){
    return(
        <div>
               <Card.Body>
    <Card.Title>Edit Person</Card.Title>
    <Card.Text>
     <input type="text" value={props.person.name}/>
     <input type="number" value={props.person.age}/>
     <textarea>{props.person.description}</textarea>
    </Card.Text>
    <ButtonGroup aria-label="Basic example" className="PersonInfo"></ButtonGroup>
    <Button variant="light">
    <FontAwesomeIcon className="text-info" icon={faCheck} />
    </Button>
    <Button variant="light">
    <FontAwesomeIcon className="text-danger" icon={faTimes} />
    </Button>
  </Card.Body>
        </div>
    )
}

PersonEdit.PropType = {
    human : PropType.object
}