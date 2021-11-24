import React, { ReactElement, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Prev } from 'react-bootstrap/esm/PageItem'
import { useTranslation } from 'react-i18next'

interface Props {

}

export default function LoginPage({ }: Props): ReactElement {
    const [formState, setFormState] = useState({email:"",password:""})
    const {t} = useTranslation()


    return (
        <Container>
            <h3>{t("Login")}</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{t("Email address")}</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    value={formState.email} 
                    onChange={e=>setFormState(prev=>({...prev, email:e.target.value}))}/>

                    <Form.Text className="text-muted">
                        {t("Disclaimer")}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>{t("Password")}</Form.Label>
                    <Form.Control type="password" placeholder={t("Password")}
                    value={formState.password} 
                    onChange={e=>setFormState(prev=>({...prev, password:e.target.value}))}/>
                    
                </Form.Group>

                <Button variant="primary" onClick={()=>console.log(formState)}>
                    {t("Submit")}
                </Button>
        </Container>
    )
}
