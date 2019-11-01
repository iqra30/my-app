import React from 'react';
import './Person.css';
import PersonEdit from './PersonEdit';
import PersonInfo from './PersonInfo';
import PropType from 'prop-types';
import { Card } from 'react-bootstrap';

export default function Person(props) {
    
    return (
        <div >
            <Card className="Person" style={{ width: '18rem' }}>
                {props.person.isEditMode ? 
                <PersonEdit person={props.person} disableEditMode={props.disableEditMode}/> : 
                <PersonInfo person={props.person} editedClick={props.editButtonMode} deletePerson={props.deletePerson} />}
            </Card>
        </div>
    )
}

Person.PropType = {
    person: PropType.object,
    editButtonMode: PropType.func,
    disableEditMode: PropType.func,
    deletePerson: PropType.func
}