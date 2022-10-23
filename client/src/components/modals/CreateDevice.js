import React, {useContext, useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {Dropdown} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
            setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i=> i.number !== number))
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить место
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle variant='outline-dark'>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <FormControl
                        className="mt-3"
                        placeholder="Введите название места"
                    />


                    <FormControl
                        className="mt-3"
                        placeholder="Введите стоимость места"

                    />

                    <FormControl
                        className="mt-3"
                        placeholder="Выберите изображение места"
                        type="file"
                    />
                    <hr/>

                    <Button
                    variant="outline-dark"
                    onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                            <Row className="mt-4" key={i.number} >
                                <Col md={4}>
                                    <FormControl
                                        placeholder="Введите название свойства"
                                    />
                                </Col>
                                <Col md={4}>
                                    <FormControl
                                        placeholder="Введите описание свойства"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        onClick={() => removeInfo(i.number)}
                                        variant="outline-danger"
                                    >
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                    )}

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;