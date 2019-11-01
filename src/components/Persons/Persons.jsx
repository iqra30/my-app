
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
    deletePerson = (personClicked) => {
       this.setState({
           personsData: this.state.personsData.filter(
               person => person.name !== personClicked.name
           )
       })
    }
    toggleEditMode = (personClicked , newValue) => {
        this.setState({
            personsData: this.state.personsData.map(
                pInner => {
                    if(pInner.name === personClicked.name){
                        pInner.isEditMode = newValue;
                    }
                    return pInner;
                }
            )
        })
    }
    
    render() {
        return (
            <div className="Persons">

                <h1>Persons </h1>
                {
                    this.state.personsData.map(person => <Person
                        person={person}
                        deletePerson={
                            () => this.deletePerson(person)}
                        editButtonMode={
                            () => this.toggleEditMode(person , true)} disableEditMode={
                                () => this.toggleEditMode(person, false)
                            }/>)
                }
            </div>
        )
    }
}

export default Persons;

