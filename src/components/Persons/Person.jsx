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
                {props.person.isEditMode ? <PersonEdit person={props.person} /> : <PersonInfo person={props.person} />}
            </Card>
        </div>
    )
}

Person.PropType = {
    person: PropType.object
}