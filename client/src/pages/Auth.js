import React, {useContext, useState} from 'react';
import {Card, Container, Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import './Auth.css';
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom"


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   const click = async () => {
       try {
           let data;
           if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    return (
        <div className='color3'>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54}}
            >
                <Card style={{width: 600}} className="p-3">
                    <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш email..."
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш пароль..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                        <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">

                            {isLogin ?
                                <div className='color4'>
                                    Нет аккаунта? <NavLink className='color1'
                                                           to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                </div>
                                :
                                <div className='color5'>
                                    Есть аккаунт? <NavLink className='color2' to={LOGIN_ROUTE}>Войдите!</NavLink>

                                </div>
                            }
                            <Button className='color6'
                                    variant={"outline-light"}
                                    onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </Form>
                    </Form>
                </Card>
            </Container>
        </div>
    );
});


export default Auth;