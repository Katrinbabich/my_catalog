import React, {useContext, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import {Container} from "react-bootstrap";
import './Shop.css';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchTypes, fetchDevices} from "../http/deviceAPI";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    },[])

    return (
        <div className='color1'>
            <Container>
                <Row className="mt-4">
                    <Col md={2}>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>
                        <DeviceList/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
});
export default Shop;