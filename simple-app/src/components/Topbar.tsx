import React, { ReactElement } from 'react'
import { Navbar, Container, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom';

interface Props {

}

export default function Topbar({ }: Props): ReactElement {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Navbar>
                <Container style={{ textAlign: "start" }}>
                    <Navbar.Brand as={Link} to="/" >{t("App Title")}</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {t("Language")}:
                            <Form.Select value={i18n.language} onChange={e=> i18n.changeLanguage(e.target.value)}>
                            <option value="zh">中文</option>
                            <option value="en">English</option>
                        </Form.Select>
                        </Navbar.Text>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}
