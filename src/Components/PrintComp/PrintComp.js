import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './PrintComp.module.css'
import logo from '../../Images/logo.jpg'
import pSign from '../../Images/pSign.png'
import signature from '../../Images/signature2.png'
const PrintComp = ({student}) => {


    function printDiv(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        console.log(printContents)
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        document.body.style.height = '595px'
        document.body.style.width = '842px'
        document.body.style.margin = '0 auto'
        window.print();
        window.location.reload(false);
        document.body.innerHTML = originalContents;
   }



    return (
        <div>
            <div className={styles.container}>
            <div className={styles.btnContainer}>
                <Button onClick={() => printDiv('printableArea')}  variant="success">Print Admit Card</Button>
            </div>
           
            <div className={styles.printArea} id='printableArea'>

                <div className={styles.printAreaTop}>
                    <img src={logo} alt=""/>
                    <span className={styles.printAreaTopTexts}>
                    <h2>NAZIRHAT COLLEGE, CHATTOGRAM</h2>
                    <h3>FINAL PREPERATIONAL EXAMINATION - 2022</h3>
                    </span>
                </div>

                <h3 className={styles.admitCardText}>ADMIT CARD</h3>

                <div className={styles.infoContainer}>
                    <h3>ROLL
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        :&nbsp;&nbsp;&nbsp;&nbsp;{student?.ROLL}</h3>
                    <h3>NAME
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        :&nbsp;&nbsp;&nbsp;&nbsp;{student?.NAME}</h3>
                    <h3>CLASS
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        :&nbsp;&nbsp;&nbsp;&nbsp;TWELVE</h3>
                    <h3>SESSION
                        &nbsp;&nbsp;
                        :&nbsp;&nbsp;&nbsp;&nbsp;2020-21</h3>
                    <h3>GROUP
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        :&nbsp;&nbsp;&nbsp;&nbsp;{student?.GROUP}</h3>
                </div>

                <div className={styles.printAreaBottom}>
                    <span>
                        <img className={styles.signImg} src={pSign} alt=""/>
                    <h3>PRINCIPAL</h3>
                    </span>
                    <span>
                    <img className={styles.signImg} src={signature} alt=""/>
                    <h3>CONTROLLER</h3>
                    </span>
                </div>

            </div>
        </div>
        </div>
    );
};

export default PrintComp;