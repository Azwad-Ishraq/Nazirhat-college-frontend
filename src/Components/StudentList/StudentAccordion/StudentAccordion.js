import React, { useState } from 'react';
import { Accordion, Container, ListGroup, Button, Table } from 'react-bootstrap';
import styles from './StudentAccordion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const StudentAccordion = (props) => {
    const { student } = props;
    console.log(student)
   
    return (
        <>
            <Accordion defaultActiveKey="0" flush>

                <Accordion.Item className={styles.accordion} eventKey={student?.ROLL}>
                    <Accordion.Header>
                        <div className={styles.accordionTextContainer}>
                            <p>{student?.ROLL}</p>
                            <p>{student?.NAME}</p>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>

                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Roll</th>
                                    <th>Subjects</th>
                                    <th>OPT. SUB</th>
                                    <th>Group</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>{student?.NAME}</td>
                                    <td>{student?.ROLL}</td>
                                    <td>{student?.SUBJECTS}</td>
                                    <td>{student?.OPTSUB}</td>
                                    <td>{student?.GROUP}</td>
                                </tr>




                            </tbody>
                        </Table>

                        <div className="buttonContainer">
                            <Link className={styles.link} to={`/print/${student?._id}`}>
                                    <Button className={styles.button} variant="success">
                                        <FontAwesomeIcon className={styles.icon} icon={faPrint} />
                                        Print Admit Card
                                    </Button>
                            </Link>

                            {/* <Button className={styles.button} variant="danger">
                                <FontAwesomeIcon className={styles.icon} icon={faUserPen} />
                                        Edit
                            </Button> */}
                        </div>

                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>

          


        </>
    );
};

export default StudentAccordion;