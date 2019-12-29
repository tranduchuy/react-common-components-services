import React from 'react';
import routes from "./constants/routes.constant";
import {Container, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Commons</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {
                            routes.map(r => {
                                return <LinkContainer to={r.path}>
                                    <Nav.Link>
                                        {r.title}
                                    </Nav.Link>
                                </LinkContainer>
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container fluid={true}>
                <Switch>
                    {
                        routes.map(r => {
                            return <Route path={r.path} exact={r.path === '/'} component={r.component}/>
                        })
                    }
                </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default App;
