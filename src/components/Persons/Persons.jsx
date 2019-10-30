
import './Persons.css';
import Person from './Person';
import React, { Component } from 'react';

class Persons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personsData: [
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
            ]
        }
    }
    enableEdit = (p) => {
        this.setState({
            personsData: this.state.personsData.map(
                pInner => {
                    if(pInner.name === p.name){
                        pInner.isEditMode =true;
                    }
                    return pInner;
                }
            )
        })
        p.isEditMode = true;
    }
    render() {
        return (
            <div className="Persons">

                <h1>Persons </h1>
                {
                    this.state.personsData.map(person => <Person
                        person={person}
                        editButtonMode={
                            () => this.enableEdit(person)} />)
                }
            </div>
        )
    }
}

export default Persons;

