import React from 'react';
import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./DeviceItem.css"
import {DEVICE_ROUTE} from "../utils/consts";
import { useNavigate } from "react-router-dom"


const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={7} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <div className='qwerty123'>{device.name}</div>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={450} height={300} src={process.env.REACT_APP_API_URL+device.img}/>
                <div className=" text-black-50 mt-2 d-flex justify-content-between align-items-center ">
                    <div>Mesto...</div>
                </div>

            </Card>
        </Col>
    );
};
export default DeviceItem;