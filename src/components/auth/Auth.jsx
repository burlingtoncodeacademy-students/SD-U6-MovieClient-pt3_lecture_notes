import React from 'react'
import Signup from './signup/Signup'
import { Container, Col, Row } from 'reactstrap'
import Login from './login/Login'

function Auth(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col md="6">
                        <Signup />
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Login 
                            updateToken={props.updateToken}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Auth