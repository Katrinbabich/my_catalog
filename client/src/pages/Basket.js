import React, {useContext, useEffect} from 'react';
import {getBasket} from '../http/deviceAPI';
import {Context} from "../index";
import { observer } from 'mobx-react-lite';
import {Card, Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

    const Basket = observer(() => {
        const {device} = useContext(Context)

        useEffect(() => {
            getBasket().then(data => device.setBaskets(data))
        }, [])
        return (
        <Container className="d-flex flex-sm-column justify-content-center align-items-center mt-3">
            <h1 className="pb-2">Корзина</h1>
            {device.basket.map(device =>
                <Card className="d-flex w-100 p-2 justify-content-center mb-2" key={device.id}>
                    <Row className="d-flex w-100">
                        <Col>
                            <div className="d-flex flex-row align-items-center">
                                <img src={process.env.REACT_APP_API_URL + device.img} width={50}/>
                                <h1 className="pl-3">{device.name}</h1>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                                <h2 className="font-weight-light">{device.price} </h2>
                            </div>
                        </Col>
                    </Row>
                </Card>
            )}
        </Container>
    );
    });
        export default Basket;