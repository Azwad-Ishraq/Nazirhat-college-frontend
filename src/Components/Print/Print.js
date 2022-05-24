import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import admit from '../../Images/BS 20-21.jpg'
import styles from './Print.module.css'
import logo from '../../Images/logo.jpg'
import signature from '../../Images/signature2.png'
import pSign from '../../Images/pSign.png'
const Print = () => {
    let params = useParams();
    const [student,setStudent] = useState();
    useEffect(() => {
        fetch(`https://damp-bastion-67720.herokuapp.com/students/${params.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStudent(data);
            })
    }, [])

    
    function printDiv(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        console.log(printContents)
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        window.location.reload(false);
        document.body.innerHTML = originalContents;
   }

    return (
        <div className={styles.container}>
            <div className={styles.btnContainer}>
                <Button onClick={() => printDiv('printableArea')}  variant="success">Print Admit Card</Button>
            </div>
           
            <div className={styles.printArea} id='printableArea'>

                <div className={styles.printAreaTop}>
                    <img src={logo} alt=""/>
                    <span className={styles.printAreaTopTexts}>
                    <h1>NAZIRHAT COLLEGE, CHATTOGRAM</h1>
                    <h2>FINAL PREPERATIONAL EXAMINATION - 2022</h2>
                    </span>
                </div>

                <h2 className={styles.admitCardText}>ADMIT CARD</h2>

                <div className={styles.infoContainer}>
                    <h2>ROLL
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        :&nbsp;&nbsp;&nbsp;&nbsp;{student?.ROLL}</h2>
                    <h2>NAME
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        :&nbsp;&nbsp;&nbsp;&nbsp;{student?.NAME}</h2>
                    <h2>CLASS
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        :&nbsp;&nbsp;&nbsp;&nbsp;TWELVE</h2>
                    <h2>SESSION
                        &nbsp;&nbsp;
                        :&nbsp;&nbsp;&nbsp;&nbsp;2020-21</h2>
                    <h2>GROUP
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        :&nbsp;&nbsp;&nbsp;&nbsp;{student?.GROUP}</h2>
                </div>

                <div className={styles.printAreaBottom}>
                    <span>
                        <img src={pSign} alt=""/>
                    <h2>PRINCIPAL</h2>
                    </span>
                    <span>
                    <img src={signature} alt=""/>
                    <h2>CONTROLLER</h2>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Print;