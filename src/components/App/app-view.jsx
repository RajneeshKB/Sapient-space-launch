import React from "react";
import { AppHeader } from "../Header";
import { Container } from "react-bootstrap";
import FooterView from "../Footer/footer-view";
import "./app.scss";
import { Main } from "../Main";

const AppView = (props) => {
  return (
    <Container className="page-view overflow-auto" fluid="md">
      <AppHeader />
      <Main />
      <FooterView />
    </Container>
  );
};

export default AppView;
