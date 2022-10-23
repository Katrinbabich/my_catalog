import React, {useEffect, useState} from 'react';
import './DevicePage.css';
import {Card, Container, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import {Button} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import {addToBasket} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    // ------- Создаём функцию для записи ------- //
    const add = () => {
        const formData = new FormData()
        formData.append('deviceId', id)
        addToBasket(formData).then(response => alert(`Товар ` + device.name + ` был добавлен в вашу корзину!`))
    }

    return (
        <Container className={"mt-2"}>
            <Row>
                <Col md={8}>
                    <Form className="d-flex flex-column m-1 ">
                        <h2>{device.name}</h2>
                    </Form>
                    <Image width={700} height={406} src={process.env.REACT_APP_API_URL+device.img}/>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex  align-items-center justify-content-around m-5"
                        style={{width: 400, height: 300, fontSize: 32, border: '3px solid #333238', }}
                    >
                        <h3>{device.price}</h3>
                        <h4>Кол-во мест: {device.kolmest}</h4>
                        <h4>Контакты: {device.kontact}</h4>

                        <Button className="dobvkorz" variant={"outline-dark"}>Добавить избранное</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="m-2 align-items-center" >
                <h2>Описание</h2>
                {device.info.map((info, index) =>
                    <Row key={info.id}  >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;