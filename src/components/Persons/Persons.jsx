import React from 'react';
import './Persons.css';
import Person from './Person';

export default function Persons(props) {
    const personsData = [
        {
            "name": "Alaina Sarfaraz",
            "age": 20,
            "description": "Freelancer",
            "isEditMode": false
        },
        {
            "name": "Saqib Siddiqui",
            "age": 22,
            "description": "Mobile app designer",
            "isEditMode": false

        },
        {
            "name": "Mahanoor Faraz",
            "age": 23,
            "description": "Graphic designer",
            "isEditMode": false

        }
    ];
    const enableEdit = () => {
        alert('hello duniya');
    }
    return (
        <div className="Persons">

            <h1>Persons </h1>
            {
                personsData.map(person => <Person
                    person={person}
                    editButtonMode={enableEdit} />)
            }
        </div>
    )
}