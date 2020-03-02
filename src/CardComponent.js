import React from "react";
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody, CardLink, CardDeck,
  CardTitle, CardSubtitle, CardGroup, Button, Nav, NavItem, NavLink
} from 'reactstrap';

import { Link, Route, HashRouter, Redirect } from "react-router-dom";
import intro from "./developer/en/api/dummy1/intro";
import guide from "./developer/en/api/dummy1/guide";
import reference from "./developer/en/api/dummy1/reference";

class CardComponent extends React.Component {
  render() {
    var cardStyle = {
      height: 300,
      width: 250,
      backgroundColor: "#fff",
      fontFamily: "sans-serif",
      padding: 13,
      margin: 10,
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    };
    return (
      <div style={cardStyle}>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <Card>
                <CardBody>
                  <CardTitle>{this.props.api.name}</CardTitle>
                  <br />
                  <CardText>{this.props.api.description}</CardText>
                  <br />
                  <Nav>
                    <NavItem vertical>
                      <Link to="/developer/en/api/dummy1/intro">Intro</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/developer/en/api/dummy1/guide">Developer's Guide</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/developer/en/api/dummy1/reference">API Reference</Link>
                    </NavItem>
                  </Nav>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <HashRouter>
          {/* <div className="content"> */}
            <Route path="/developer/en/api/dummy1/intro" component={intro} render={ () => <Redirect to="/developer/en/api/dummy1/intro" /> } replace />
            <Route path="/developer/en/api/dummy1/guide" component={guide} render={ () => <Redirect to="/developer/en/api/dummy1/guide" /> }/>
            <Route path="/developer/en/api/dummy1/reference" component={reference} render={ () => <Redirect to="/developer/en/api/dummy1/reference" /> }/>
          {/* </div> */}
        </HashRouter>
      </div>


    );
  }
}
export default CardComponent;