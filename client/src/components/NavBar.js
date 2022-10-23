import React, {useContext} from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE,ONAS_ROUTE, SHOP_ROUTE, ADMIN_ROUTE, BASKET_ROUTE} from "../utils/consts";
import {Button, Container} from "react-bootstrap";
import './NavBar.css';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom"

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar className="qwe3" bg-red>
            <Container>
                <NavLink  className="class1" action= {ONAS_ROUTE}>GluManor</NavLink>
                <form className="ms-auto" action={SHOP_ROUTE} method="get" >
                    <button variant={"outline-light"} className="katalo">Каталог</button>
                </form>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button className= "ms-2"
                        variant={"outline-light"}
                        onClick={() => navigate(BASKET_ROUTE)}
                    >
                        Избранное
                    </Button>
                        <Button className= "ms-2"
                                variant={"outline-light"}
                                onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});
export default NavBar;





