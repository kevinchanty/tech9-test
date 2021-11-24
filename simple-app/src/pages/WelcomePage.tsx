import React, { ReactElement } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

interface Props {

}

export default function WelcomePage({ }: Props): ReactElement {
    const {t} = useTranslation()
    return (
        <Container>
            <h3>{t("Welcome")}</h3>
            <Row>
                <Col md={6} lg={4} style={{display:'flex',justifyContent:"center"}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/600/400/?blur" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} style={{display:'flex',justifyContent:"center"}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/600/400/?blur" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} style={{display:'flex',justifyContent:"center"}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/600/400/?blur" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} style={{display:'flex',justifyContent:"center"}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://picsum.photos/600/400/?blur" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
