import React, { useState } from 'react';
import { Container, Form, FormControl, InputGroup,Button } from 'react-bootstrap';

const AddStudent = () => {

    const [student,setStudent] = useState();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...student }
        newInfo[field] = value;

        setStudent(newInfo)
    }




    console.log(student);

    const handleSubmit = (e) => {
        e.preventDefault();
        const studentData = {...student};
        fetch(`https://damp-bastion-67720.herokuapp.com/students`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(studentData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }

    return (
        <Container style={{marginTop:'5vh'}}>

            <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                <FormControl onBlur={handleOnBlur} name='name'/>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Roll</InputGroup.Text>
                <FormControl onBlur={handleOnBlur} name='roll'/>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Section</InputGroup.Text>
                <FormControl onBlur={handleOnBlur} name='section'/>
            </InputGroup>
            <Button type='submit' style={{marginTop:'20px'}} variant="success">Add</Button>
            </form>

        </Container>
    );
};


export default AddStudent;