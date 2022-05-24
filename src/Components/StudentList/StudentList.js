import React, { useContext, useEffect, useState } from 'react';
import { Accordion, Container, ListGroup,Button, Table } from 'react-bootstrap';
import {SearchContext} from '../../Context/SearchContext'
import StudentAccordion from './StudentAccordion/StudentAccordion';
const StudentList = () => {

    const [students,setStudents] = useState();
    const [modalShow, setModalShow] = React.useState(false);
    

    useEffect(()=>{
        fetch(`https://damp-bastion-67720.herokuapp.com/students`,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setStudents(data);
            console.log(data)
        })
    },[])

    const {searchText} = useContext(SearchContext);

    const matchedData = students? students.filter(item => item?.ROLL.includes(searchText)) : [];
            
    
    
    return (
        <Container>
                {
                    

                    matchedData.map(item => 
                        <StudentAccordion student={item}></StudentAccordion>
                    )
                    
                }
                
                
            
        </Container>
        
    );
};

export default StudentList;