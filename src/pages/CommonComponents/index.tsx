import React, {useEffect} from 'react';
import routes from "./routes.constants";
import {Col, Row} from "react-bootstrap";
import {Switch, Route, Link, withRouter, useRouteMatch} from 'react-router-dom';

const CommonComponents = (props: any) => {

    let { path, url } = useRouteMatch();

    return (
        <Row>
            <Col sm={3}>
                <h5>List Components</h5>
                <ul>
                    <li>
                        {
                            routes.map((r, index) => {
                                return <Link to={url + r.path}>{r.title}</Link>
                            })
                        }
                    </li>
                </ul>
            </Col>
            <Col sm={9}>
                <Switch>
                    {
                        routes.map((r, index) => {
                            return <Route path={path + r.path} exact={r.path === '/'} component={r.component} />
                        })
                    }
                </Switch>
            </Col>
        </Row>
    )
};

export default withRouter(CommonComponents);