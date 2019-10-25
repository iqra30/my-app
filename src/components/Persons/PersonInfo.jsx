import React from 'react';
import './PersonInfo.css';
import {Button,Card,ButtonGroup} from 'react-bootstrap';
import PropType from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function PersonInfo(props){
    
    return(
        <div>
     <Card.Body>
    <Card.Title>{props.person.name}, {props.person.age}</Card.Title>
    <Card.Text>
     {props.person.description}
    </Card.Text>
    <ButtonGroup aria-label="Basic example" className="PersonInfo"></ButtonGroup>
    <Button variant="light">
    <FontAwesomeIcon className="text-info" icon={faEdit} />
    </Button>
    <Button variant="light">
    <FontAwesomeIcon className="text-danger" icon={faTrash} />
    </Button>
  </Card.Body>
        </div>
    )
}

PersonInfo.PropType = {
    person : PropType.object
}